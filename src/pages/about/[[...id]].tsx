import {createStaticPathsCollector} from "../../services/mdx/createStaticPathsCollector";
import MarkdownPage from "../../services/mdx/MarkdownPage";
import {createStaticMdxPropsRetriever} from "../../services/mdx/createStaticMdxPropsRetriever";

export default MarkdownPage;
export const getStaticProps = createStaticMdxPropsRetriever("about");
export const getStaticPaths = createStaticPathsCollector("about");
