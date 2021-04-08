import {FC, ReactNode, Fragment} from "react";
import {CodeBlock} from "../../../components/CodeBlock";
import {createHeaderComp} from "./createHeaderComp";
import {ScreenShot} from "./ScreenShot";
import {ScreenRecording} from "./ScreenRecording";
import {Section} from "./Section";
import {Video} from "./Video";
import {StatusNotice} from "./StatusNotice";
import {Key} from "../../../components/home/Key";
import {PlainLink} from "../../../components/PlainLink";
import {Collaborator} from "./Collaborator";
import {LMVersion, LMVersionDefinition} from "./LMVersion";
import {Timeline, TimelineItem} from "./Timeline";
import {YTPlayer} from "./YTPlayer";
import {InlineCode} from "./Code";
import {ComponentReference} from "./ComponentReference";
import {GuideNav} from "./GuideNav";

const autoFitImageRenderer: FC<{
    alt?: string;
    src?: string;
    title?: string;
    width?: number;
}> = ({alt, src, title, width}) => (
    <img
        alt={alt}
        src={src}
        title={title}
        style={{maxWidth: "100%"}}
        width={width}
    />
);
const codeRender: FC<{
    className?: string;
    children: string;
    showHeader?: string;
    spoiler?: string;
    highlight?: string;
    screenRecording?: string;
    screenShot?: string;
    video?: string;
}> = ({
    className,
    children,
    showHeader,
    spoiler,
    highlight,
    screenRecording,
    screenShot,
    video,
    ...rest
}) => {
    const languageData = className?.match(/language-(.*)/);
    const language = languageData?.[1] || "text";
    return (
        <CodeBlock
            code={children.trimEnd()}
            language={language}
            showHeader={
                showHeader == undefined
                    ? language != "text"
                    : showHeader != "false"
            }
            spoiler={spoiler ? spoiler != "false" : false}
            result={
                screenRecording ? (
                    <ScreenRecording src={screenRecording} />
                ) : screenShot ? (
                    <ScreenShot src={screenShot} />
                ) : video ? (
                    <Video src={video} />
                ) : undefined
            }
            highlight={highlight
                ?.split(",")
                .map(p => p.split(":").map(n => Number(n)) as [number, number])}
            {...rest}
        />
    );
};

export const markdownComponents = {
    // Standard
    code: codeRender,
    inlineCode: InlineCode,
    img: autoFitImageRenderer,
    section: Section,
    a: (props: {href: string; children: ReactNode}) => (
        <PlainLink styled {...props} />
    ),
    h1: createHeaderComp(1),
    h2: createHeaderComp(2),
    h3: createHeaderComp(3),
    h4: createHeaderComp(4),
    h5: createHeaderComp(5),
    h6: createHeaderComp(6),
    pre: (props: any) => <Fragment {...props} />,

    // Custom
    ScreenShot,
    ScreenRecording,
    Video,
    Key,
    StatusNotice,
    Collaborator,
    LMVersion,
    LMVersionDefinition,
    Timeline,
    TimelineItem,
    YTPlayer,
    ComponentReference,
    GuideNav,
};
