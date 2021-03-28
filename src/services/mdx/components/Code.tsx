import {FC, useContext} from "react";
import {BackgroundContext} from "../../../components/home/BackgroundSection";
import {background2, background3} from "../../../theme";

export const InlineCode: FC<{children: string}> = ({children}) => {
    const bg = useContext(BackgroundContext);
    return (
        <code
            css={theme => ({
                display: "inline-block",
                backgroundColor:
                    bg == background3
                        ? theme.palette.background.default
                        : background3,
            })}
            dangerouslySetInnerHTML={{
                __html: children
                    .replace(
                        /[\x26\x0A\<>'"]/g,
                        r => "&#" + r.charCodeAt(0) + ";"
                    )
                    .replace(/\s/g, "&nbsp;"),
            }}
        />
    );
};
