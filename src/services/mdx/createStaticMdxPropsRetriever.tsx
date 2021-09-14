import {compileMarkdown} from "./compileMarkdown";
import {createIndex} from "./pagesIndex/createIndex";

/**
 * Creates the function that obtains the props for MDX pages
 * @param dir The directory path relative to the src/pages directory (or remoteFiles)
 * @param remote Whether to obtain the files from the remote directory
 * @returns The function to compute the props
 */
export const createStaticMdxPropsRetriever =
    (dir: string, remote?: boolean) =>
    async ({params}: {params: {id: string[]; path: string[]}}) => ({
        props: {
            url: `https://launchmenu.github.io/${dir}/${(params.id ?? []).join(
                "/"
            )}`,
            ...(await compileMarkdown(dir, params.id, remote)),
            index: await createIndex(dir, params.id, remote),
        },
    });
