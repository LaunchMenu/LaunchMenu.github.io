import {FC, ReactNode} from "react";
import {CodeBlock} from "../../../components/CodeBlock";
import {createHeaderComp} from "./createHeaderComp";
import {ScreenShot} from "./ScreenShot";
import {ScreenRecording} from "./ScreenRecording";
import {Section} from "./Section";
import {Video} from "./Video";
import {StatusNotice} from "./StatusNotice";
import {Key} from "../../../components/home/Key";
import {background3} from "../../../theme";
import {PlainLink} from "../../../components/PlainLink";
import {Collaborator} from "./Collaborator";
import {LMVersion, LMVersionDefinition} from "./LMVersion";
import {Timeline, TimelineItem} from "./Timeline";

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
const codeRender: FC<{className?: string; children: string}> = ({
    className,
    children,
}) => {
    const languageData = className?.match(/language-(.*)/);
    return <CodeBlock code={children} language={languageData?.[1] ?? "text"} />;
};
const inlineCodeRenderer: FC<{children: string}> = ({children}) => (
    <code
        css={{display: "inline-block", backgroundColor: background3}}
        dangerouslySetInnerHTML={{
            __html: children
                .replace(/[\x26\x0A\<>'"]/g, r => "&#" + r.charCodeAt(0) + ";")
                .replace(/\s/g, "&nbsp;"),
        }}
    />
);

export const markdownComponents = {
    // Standard
    code: codeRender,
    inlineCode: inlineCodeRenderer,
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
};
