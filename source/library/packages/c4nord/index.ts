import {PackageContext, PackageFactory} from "../../../../workdir-generator/factories";
import {Package} from "../../../../workdir-generator/manifest";
import {toSnakeCase} from "../../../../workdir-generator/naming";

export class C4nordFactory implements PackageFactory {

    getUrn(): string {
        return "c4nord";
    }

    async create(context: PackageContext): Promise<Package> {
        return {
            urn: this.getUrn(),
            modules: [],
            examples: [
                "Deployment diagram",
                "Dynamic diagram",
                "Level 1 System Context",
                "Level 2 Container",
                "Level 3 Component",
                "System Landscape diagram",
                "Main Artifacts",
            ].map(name => ({
                name,
                template: `c4model/examples/${toSnakeCase(name)}.tera`
            })),
            templates: {
                bootstrap: `${this.getUrn()}/bootstrap.tera`,
                documentation: `${this.getUrn()}/documentation.tera`
            }
        }
    }
}