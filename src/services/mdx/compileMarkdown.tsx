import {promises as FS} from "fs";
import Path from "path";
import {FC} from "react";
import {MdxRemote} from "next-mdx-remote/types";
import sectionize from "remark-sectionize";
import renderToString from "next-mdx-remote/render-to-string";
import {cleanupPath} from "./pagesIndex/createStaticPathsCollector";
import {getPagesDir} from "./pagesIndex/getPagesDir";
import {markdownComponents} from "./components/markdownComponents";
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../../theme";
import {ThemeProvider} from "@emotion/react";
import {TOCRemarkPlugin, ITOC} from "./TOCremarkPlugin";
import {PageIndexProvider} from "./page/PageIndexContext";

const Provider: FC = ({children}) => (
    <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
            <PageIndexProvider>{children}</PageIndexProvider>
        </MuiThemeProvider>
    </ThemeProvider>
);
const provider = {
    component: Provider,
    props: {},
};

export async function compileMarkdown(
    dir: string,
    urlPath?: string[]
): Promise<{source: MdxRemote.Source; ToC: ITOC}> {
    let dirPath = getPagesDir(dir);

    if (urlPath) {
        // Obtain the actual file path given the url path
        const pathSections = [...urlPath];

        do {
            const fileNames = await FS.readdir(dirPath);
            const part = pathSections.shift();

            const fileName = fileNames.find(
                fileName => cleanupPath(fileName) == part
            );
            if (!fileName)
                throw new Error(`${part} of ${urlPath} could not be found.`);
            dirPath = Path.join(dirPath, fileName);
        } while (pathSections.length > 0);
    }

    // Obtain and render the source
    let source: string;
    try {
        source = await FS.readFile(dirPath, "utf-8");
    } catch (e) {
        source = await FS.readFile(Path.join(dirPath, "index.mdx"), "utf-8");
    }

    const ToC = [] as ITOC;
    return {
        source: await renderToString(source, {
            components: markdownComponents,
            provider,
            mdxOptions: {
                remarkPlugins: [sectionize, [TOCRemarkPlugin, {output: ToC}]],
            },
        }),
        ToC,
    };
}
