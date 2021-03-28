import {useTheme} from "@emotion/react";
import {Backdrop, Box, IconButton} from "@material-ui/core";
import {Field, useDataHook} from "model-react";
import {FC, useCallback, cloneElement, ReactNode, useState} from "react";
import SyntaxHighlighter, {Prism} from "react-syntax-highlighter";
import {vs} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {background2, background3} from "../theme";
import {PlainLink} from "./PlainLink";

import GithubIcon from "@material-ui/icons/GitHub";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import PlayIcon from "@material-ui/icons/PlayArrow";
import CopyIcon from "@material-ui/icons/FilterNone";
import {CopyText} from "./CopyText";
import {Tooltip} from "@material-ui/core";
import {isClient} from "../services/isClient";

const showLineNumbers = new Field(false);
export const CodeBlock: FC<{
    code: string;
    language?: string;
    title?: string;
    className?: string;
    fontSize?: number;
    result?: ReactNode;
    source?: string;
    showHeader?: boolean;
}> = ({
    code,
    language = "tsx",
    fontSize = 11,
    title,
    className,
    result,
    source,
    showHeader = language != "text",
    ...rest
}) => {
    const theme = useTheme();
    const [h] = useDataHook();
    const InlineCodeWrapper = useCallback(
        ({children}: {children: JSX.Element}) =>
            cloneElement(children, {
                className: children.props?.className + " " + className,
                style: {
                    ...children.props.style,
                    ...(fontSize && {
                        fontSize,
                        lineHeight: `${Math.floor(1.3 * fontSize)}px`,
                    }),
                    display: "block",
                    backgroundColor: background2,
                    padding: theme.spacing(1),
                },
            }),
        []
    );

    return (
        <div
            css={{
                boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.3)",
                borderRadius: 10,
                overflow: "hidden",
                ".linenumber": {
                    minWidth: `30px !important`,
                    color: `#AAA !important`,
                },
                marginBottom: 8,
                span: {
                    wordBreak: "break-all",
                },
            }}
            {...rest}>
            {showHeader && (
                <Header
                    title={title}
                    code={code}
                    source={source}
                    result={result}
                />
            )}
            <Prism
                PreTag={InlineCodeWrapper}
                style={vs}
                language={language}
                children={code}
                wrapLongLines={true}
                lineProps={{style: {flexWrap: "wrap"}}}
                showLineNumbers={showLineNumbers.get(h)}
                {...rest}
            />
        </div>
    );
};

const showDemoTooltip = new Field(
    isClient() ? localStorage.getItem("showTooltip") != "false" : false
);

const Header: FC<{
    code: string;
    title?: string;
    result?: ReactNode;
    source?: string;
}> = ({code, title, result, source}) => {
    const toggleLineNumbers = useCallback(
        () => showLineNumbers.set(!showLineNumbers.get()),
        []
    );
    const [openedResult, setOpenedResult] = useState(false);
    const closeDemoTooltip = useCallback(() => {
        showDemoTooltip.set(false);
        localStorage.setItem("showTooltip", "false");
    }, []);
    const [h] = useDataHook();
    const demoTooltipOpened = showDemoTooltip.get(h);

    return (
        <div
            css={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                backgroundColor: background3,
                // borderBottomLeftRadius: 10,
                // borderBottomRightRadius: 10,
                ".MuiButtonBase-root": {
                    padding: 8,
                    borderRadius: "50%",
                },
            }}>
            {title && (
                <div css={theme => ({paddingLeft: theme.spacing(1)})}>
                    {title}
                </div>
            )}
            {source && (
                <PlainLink href={source}>
                    <Tooltip title="View source">
                        <IconButton aria-label="view source">
                            <GithubIcon />
                        </IconButton>
                    </Tooltip>
                </PlainLink>
            )}
            <Box flex={1} />
            {result && (
                <Tooltip
                    key={demoTooltipOpened ? "attention" : "normal"}
                    onClose={closeDemoTooltip}
                    open={demoTooltipOpened ? true : undefined}
                    arrow={demoTooltipOpened}
                    disableFocusListener={demoTooltipOpened}
                    disableHoverListener={demoTooltipOpened}
                    disableTouchListener={demoTooltipOpened}
                    title={
                        demoTooltipOpened ? (
                            <Box css={{fontSize: 14, margin: 4}}>Show demo</Box>
                        ) : (
                            "Show demo"
                        )
                    }>
                    <IconButton
                        aria-label="Show demo"
                        onClick={() => {
                            setOpenedResult(true);
                            closeDemoTooltip();
                        }}>
                        <PlayIcon />
                    </IconButton>
                </Tooltip>
            )}
            <CopyText text={code}>
                <Tooltip title="Copy code">
                    <IconButton aria-label="Copy code to clipboard">
                        <CopyIcon />
                    </IconButton>
                </Tooltip>
            </CopyText>
            <Tooltip title="Toggle line numbers">
                <IconButton
                    aria-label="Toggle line numbers"
                    onClick={toggleLineNumbers}>
                    <FormatListNumberedIcon />
                </IconButton>
            </Tooltip>

            <Backdrop
                css={{zIndex: 1}}
                open={openedResult}
                onClick={() => setOpenedResult(false)}>
                <div
                    onClick={e => {
                        e.stopPropagation();
                    }}>
                    {result}
                </div>
            </Backdrop>
        </div>
    );
};
