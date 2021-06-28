import {compileMarkdown} from "./compileMarkdown";
import {createIndex} from "./pagesIndex/createIndex";

export const createStaticMdxPropsRetriever =
    (dir: string) =>
    async ({params}: {params: {id: string[]; path: string[]}}) => ({
        props: {
            url: `https://launchmenu.github.io/${dir}/${(params.id ?? []).join(
                "/"
            )}`,
            ...(await compileMarkdown(dir, params.id)),
            index: await createIndex(dir, params.id),
        },
    });
