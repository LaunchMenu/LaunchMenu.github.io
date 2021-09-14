import {createStaticPathsCollector} from "../../services/mdx/pagesIndex/createStaticPathsCollector";
import {createMarkdownPageComponent} from "../../services/mdx/page/MarkdownPage";
import {createStaticMdxPropsRetriever} from "../../services/mdx/createStaticMdxPropsRetriever";
import Head from "next/head";

const MarkdownPage = createMarkdownPageComponent(
    <Head>
        <meta
            property="og:description"
            content="LaunchMenu provides functionality in the form of applets"
            key="og-description"
        />
        <meta
            property="description"
            content="LaunchMenu provides functionality in the form of applets"
            key="description"
        />
        <meta
            name="keywords"
            content="Open Source, Utility, Keyboard, Applets, Official"
            key="keyword"
        />
    </Head>
);
export default MarkdownPage;
export const getStaticProps = createStaticMdxPropsRetriever("applets", true);
export const getStaticPaths = createStaticPathsCollector("applets", true);
