import {FC} from "react";
import {PlainLink} from "../../../components/PlainLink";
import {getUrlHash} from "../../getUrlHash";

export function createHeaderComp(depth: number) {
    const Header: FC = ({children}) => {
        const name = children?.toString() ?? "";
        const Tag = `h${depth}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        return (
            <PlainLink href={`#${getUrlHash(name)}`}>
                <Tag>{children}</Tag>
            </PlainLink>
        );
    };

    return Header;
}

// https://www.npmjs.com/package/react-innertext
