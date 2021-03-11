import {Container} from "@material-ui/core";
import {MdxRemote} from "next-mdx-remote/types";
import {markdownComponents} from "./markdownComponents";
import hydrate from "next-mdx-remote/hydrate";
import {Fragment} from "react";

export default function MarkdownPage({source}: {source: MdxRemote.Source}) {
    const content = hydrate(source, {components: markdownComponents});
    return (
        <Container>
            <Fragment>{content}</Fragment>
        </Container>
    );
}
