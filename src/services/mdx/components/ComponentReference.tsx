import {Tooltip} from "@material-ui/core";
import {FC, Fragment, ReactNode} from "react";
import {Text} from "../../../components/textStyles/Text";
import {Link} from "../../../components/PlainLink";

export const ComponentReference: FC<{
    name: string;
    link: string;
    docs?: string;
    description?: ReactNode;
}> = ({name, link, docs, description, children}) => {
    if (!link?.match(/^https?:\/\//i))
        link = `https://github.com/LaunchMenu/LaunchMenu/blob/master/packages/${link}`;
    const content = (
        <span>
            <a href={link}>{name}</a>{" "}
            {docs && (
                <Fragment>
                    (<Link href={docs}>Docs</Link>)
                </Fragment>
            )}
        </span>
    );

    return (
        <li>
            {description ? (
                <Tooltip
                    title={<Text css={{color: "white"}}>{description}</Text>}>
                    {content}
                </Tooltip>
            ) : (
                content
            )}
            <ul>{children}</ul>
        </li>
    );
};
