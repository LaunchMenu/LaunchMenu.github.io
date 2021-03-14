import {FC} from "react";

export function createHeaderComp(depth: number) {
    const Header: FC = ({children}) => {
        const Tag = `h${depth}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        return <Tag>{children}</Tag>;
    };

    return Header;
}
