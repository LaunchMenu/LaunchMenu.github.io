import {compileMarkdown} from "./compileMarkdown";
import {createIndex} from "./pagesIndex/createIndex";

export const createStaticMdxPropsRetriever = (dir: string) => async ({
    params,
}: {
    params: {id: string[]};
}) => ({
    props: {
        ...(await compileMarkdown(dir, params.id)),
        index: await createIndex(dir, params.id),
    },
});
