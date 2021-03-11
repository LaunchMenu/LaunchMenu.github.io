import {compileMarkdown} from "./compileMarkdown";
import {createIndex} from "./createIndex";

export const createStaticMdxPropsRetriever = (dir: string) => async ({
    params,
}: {
    params: {id: string[]};
}) => ({
    props: {
        source: await compileMarkdown(dir, params.id),
        index: await createIndex(dir, params.id),
    },
});
