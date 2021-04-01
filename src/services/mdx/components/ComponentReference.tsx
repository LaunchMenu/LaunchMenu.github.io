import {Tooltip} from "@material-ui/core";
import {FC, Fragment, ReactNode} from "react";
import {Text} from "../../../components/textStyles/Text";

export const ComponentReference: FC<{
    name: string;
    link: string;
    guide?: string;
    description?: ReactNode;
}> = ({name, link, guide, description, children}) => {
    if (!link?.match(/^https?:\/\//i))
        link = `https://github.com/LaunchMenu/LaunchMenu/blob/master/packages/${link}`;
    const content = (
        <span>
            <a href={link}>{name}</a>{" "}
            {guide && (
                <Fragment>
                    (<a href={guide}>Guide</a>)
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
