import {createStaticPathsCollector} from "../../services/mdx/pagesIndex/createStaticPathsCollector";
import MarkdownPage from "../../services/mdx/page/MarkdownPage";
import {createStaticMdxPropsRetriever} from "../../services/mdx/createStaticMdxPropsRetriever";

export default MarkdownPage;
export const getStaticProps = createStaticMdxPropsRetriever("applets");
export const getStaticPaths = createStaticPathsCollector("applets");
