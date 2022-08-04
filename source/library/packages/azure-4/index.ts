import P from "path";
import {promisify} from "util";
import glob from "glob";
import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Item, Package} from "../../../../workdir-generator/manifest";
import {fetchArchive} from "../../../../workdir-generator/archive";
import {getAbsoluteImagePath} from "../../../../workdir-generator/paths";
import {toCamelCase, toSnakeCase} from "../../../../workdir-generator/naming";
import {csvToCustomGroups, unifyItems} from "../../../../workdir-generator/discovery";

const ICONS_VERSION = "4";
const ICONS_URL = `https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V${ICONS_VERSION}.zip`

export class AzureV2Factory implements PackageFactory {

    getUrn(): string {
        return "azure-4";
    }

    private getItemUrn(imageSrcPath: string) {
        const parts = imageSrcPath.split(P.sep)
            .slice(2)
            .map(part => part
                .replace(/^[0-9]*/g, '')
                .replace(/^[0-9]*/g, '')
                .replace(/icon-/g, '')
                .replace(/\.svg$/g, '')
            )
            .map(toCamelCase)
            .filter(part => !!part);
        const name = parts[parts.length - 1].replace(/^[0-9]/, (s) => `_${s}`);
        return `${this.getUrn()}/Item/${parts.slice(0, -1).join("/")}/${name}`;
    }

    private async discover(
        context: PackageContext,
        cwd: string,
        globPattern: string
    ): Promise<Array<Item>> {
        const discoveredSvg = await promisify(glob)(globPattern, {cwd, nodir: true});
        context.info("discovered %s pictures file from %s", discoveredSvg.length, cwd);

        return discoveredSvg.map((relativeImagePathToGlob) => {
            const absoluteImagePath = getAbsoluteImagePath(context, cwd, relativeImagePathToGlob);
            const imageSrcPath = P.relative(context.absoluteDstYamlDirPath, absoluteImagePath);
            const itemUrn = this.getItemUrn(relativeImagePathToGlob);
            const itemFamily = itemUrn.split("/")[2];
            return {
                urn: itemUrn,
                family: itemFamily,
                icon: {
                    type: "Source",
                    source: imageSrcPath
                },
                elements: [{
                    shape: {
                        type: "Icon"
                    }
                }, {
                    shape: {
                        type: "IconCard"
                    }
                }, {
                    shape: {
                        type: "IconGroup"
                    }
                }],
            }
        });
    }

    async create(context: PackageContext): Promise<Package> {
        const iconsZipPath = P.join(context.pkgTmpDirPath, "icons.zip");
        const iconsZipDst = P.join(context.pkgTmpDirPath, "icons");
        await fetchArchive(context, ICONS_URL, iconsZipPath, iconsZipDst)

        const iconItems: Array<Item> = await this.discover(
            context,
            iconsZipDst,
            "*/Icons/**/*.svg",
        );
        context.info('found (%s) icons', iconItems.length)

        const groupItems: Array<Item> = await csvToCustomGroups(this, P.join(__dirname, "groups.csv"));
        context.info('found (%s) groups', groupItems.length)

        return {
            urn: this.getUrn(),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
            },
            modules: [{
                urn: `${this.getUrn()}/Item`,
                items: unifyItems(iconItems)
            }, {
                urn: `${this.getUrn()}/Group`,
                items: unifyItems(groupItems)
            }],
            examples: [
                "Scikit Learn and Deep Learning",
            ].map(name => ({
                name,
                template: `${this.getUrn()}/examples/${toSnakeCase(name)}.tera`
            })),
        }
    }
}
