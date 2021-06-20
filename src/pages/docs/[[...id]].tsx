import {createStaticPathsCollector} from "../../services/mdx/pagesIndex/createStaticPathsCollector";
import {createMarkdownPageComponent} from "../../services/mdx/page/MarkdownPage";
import {createStaticMdxPropsRetriever} from "../../services/mdx/createStaticMdxPropsRetriever";
import Head from "next/head";

const MarkdownPage = createMarkdownPageComponent(
    <Head>
        <meta
            property="og:description"
            content="Use these LaunchMenu docs to create your own advanced applets"
            key="og-description"
        />
        <meta
            property="description"
            content="Use these LaunchMenu docs to create your own advanced applets"
            key="description"
        />
        <meta
            name="keywords"
            content="Open Source, Utility, Keyboard, Applets, Development"
            key="keyword"
        />
    </Head>
);
export default MarkdownPage;
export const getStaticProps = createStaticMdxPropsRetriever("docs");
export const getStaticPaths = createStaticPathsCollector("docs");
