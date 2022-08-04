import {AwsQ12022Factory} from "./packages/aws-q1-2022";
import {AwsQ32021Factory} from "./packages/aws-q3-2021";
import {AzureV2Factory} from "./packages/azure-4";
import {C4modelFactory} from "./packages/c4model";
import {C4nordFactory} from "./packages/c4nord";
import {DefaultPackageContext, LibraryFactory} from "../../workdir-generator/factories";
import {DomainstorytellingFactory} from "./packages/domainstorytelling";
import {Eip1Factory} from "./packages/eip-1";
import {EventstormingFactory} from "./packages/eventstorming";
import {Fontawesome6Factory} from "./packages/fontawesome-6";
import {GcpFactory} from "./packages/gcp";
import {Homecloud2Factory} from "./packages/homecloud-2";
import {Library, Package} from "../../workdir-generator/manifest";
import {Material4Factory} from "./packages/material-4";
import {Simpleicons6Factory} from "./packages/simpleicons-6";

const PACKAGE_FACTORIES = [
    new AwsQ12022Factory(),
    new AwsQ32021Factory(),
    new AzureV2Factory(),
    new C4modelFactory(),
    new C4nordFactory(),
    new DomainstorytellingFactory(),
    new Eip1Factory(),
    new EventstormingFactory(),
    new Fontawesome6Factory(),
    new GcpFactory(),
    new Homecloud2Factory(),
    new Material4Factory(),
    new Simpleicons6Factory(),
];

export const PACKAGES = PACKAGE_FACTORIES.map(d => d.getUrn());

async function emptyModule(urn): Promise<Package> {
    return new Promise(r => r({
        urn,
        modules: [],
        examples: [],
    }))
}

const create: LibraryFactory = async (context): Promise<Library> => {
    console.time("library generated")
    const packages: Array<Package> = await Promise.all(
        PACKAGE_FACTORIES.map(packageFactory => {
            if (context.packages.indexOf(packageFactory.getUrn()) >= 0) {
                const packageContext = new DefaultPackageContext(context, packageFactory.getUrn());
                packageContext.info("process the package", packageFactory.getUrn());
                const timerLabel = `package processed`;
                packageContext.time(timerLabel);
                if (context.cleanPkgTmpDir) {
                    packageContext.doCleanPackageTmpDirectory();
                }
                return packageFactory.create(packageContext).finally(() => {
                    packageContext.timeEnd(timerLabel);
                });
            }
            return emptyModule(packageFactory.getUrn());
        })
    );
    console.timeEnd("library generated")
    return {
        name: "tmorin/plantuml-libs",
        remote_url: "https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution",
        packages,
        tera_discovery_pattern: "source/templates/**/*"
    }
}

export default create;
