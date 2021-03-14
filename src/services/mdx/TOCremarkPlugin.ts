import {Transformer} from "unified";

export type ITOC = {
    name: string;
    children: ITOC;
}[];

type Node = {
    type: string;
    children?: Node[];
    value?: string;
    depth?: number;
    props?: Object;
    data?: Record<string, unknown>;
};

/**
 * A plugin to extract TOC data
 */
export function TOCRemarkPlugin(options: {output: ITOC}): Transformer {
    let stack = [options.output];

    function mapTree(node: Node): Node {
        let props: Object | undefined;
        if (node.type == "section") {
            const header = node.children?.[0];
            if (header && header.type == "heading" && header.children) {
                const name = header.children[0].value ?? "";
                const depth = header.depth ?? 1;
                while (depth < stack.length) stack.pop();
                if (depth == stack.length) {
                    const item = {
                        name,
                        children: [],
                    };
                    stack[stack.length - 1].push(item);
                    stack.push(item.children);
                }

                props = {name, depth};
            } else {
                throw Error("Error parsing section");
            }
        }

        const data = props ? {...node.data, hProperties: props} : node.data;
        return {
            ...node,
            children: node.children?.map(mapTree),
            ...(data && {data}),
        };
    }

    return mapTree;
}
