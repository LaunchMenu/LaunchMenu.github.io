import {createStaticPathsCollector} from "../../services/mdx/pagesIndex/createStaticPathsCollector";
import {createMarkdownPageComponent} from "../../services/mdx/page/MarkdownPage";
import {createStaticMdxPropsRetriever} from "../../services/mdx/createStaticMdxPropsRetriever";
import Head from "next/head";

const MarkdownPage = createMarkdownPageComponent(
    <Head>
        <meta
            property="og:description"
            content="LaunchMenu's history and creators"
            key="og-description"
        />
        <meta
            property="description"
            content="LaunchMenu's history and creators"
            key="description"
        />
        <meta
            name="keywords"
            content="Open Source, About, Timeline"
            key="keyword"
        />
    </Head>
);
export default MarkdownPage;
export const getStaticProps = createStaticMdxPropsRetriever("about");
export const getStaticPaths = createStaticPathsCollector("about");
