import {FC, createContext, useContext, useMemo} from "react";
import type FSImport from "fs";
import type PathImport from "path";
import {CodeBlock} from "../../../components/CodeBlock";
import {ScreenRecording} from "./ScreenRecording";
import {ScreenShot} from "./ScreenShot";
import {Video} from "./Video";

export const CodeReference: FC<{
    source: string;
    language?: string;
    spoiler?: boolean;
    showHeader?: boolean;
    sections?: [number, number][];
    highlight: [number, number][];
    screenRecording?: string;
    screenShot?: string;
    video?: string;
}> = ({
    source,
    language = "tsx",
    sections,
    highlight,
    showHeader,
    spoiler,
    screenRecording,
    screenShot,
    video,
    ...rest
}) => {
    const {getCode, getUrl} = useContext(CodeReferenceContext);
    const code = useMemo(() => {
        const rawCode = getCode(source);
        let prev: number | undefined = undefined;
        if (!sections) return rawCode;

        let lines = rawCode.split("\n");

        let code = "";
        for (let [start, end] of sections) {
            if (prev != undefined && prev < start) code += "\n...\n";
            code += lines.slice(start - 1, end).join("\n");
            prev = end;
        }
        return code;
    }, [source]);

    return (
        <CodeBlock
            code={code}
            language={language}
            showHeader={
                showHeader == undefined ? language != "text" : showHeader
            }
            spoiler={spoiler}
            result={
                screenRecording ? (
                    <ScreenRecording src={getUrl(screenRecording)} />
                ) : screenShot ? (
                    <ScreenShot src={getUrl(screenShot)} />
                ) : video ? (
                    <Video src={getUrl(video)} />
                ) : undefined
            }
            highlight={highlight}
            source={`https://github.com/LaunchMenu/LaunchMenu/tree/master/${source}`}
            {...rest}
        />
    );
};

export const CodeReferenceContext = createContext<{
    getCode(path: string): string;
    getUrl(path: string): string;
}>({getCode: name => "", getUrl: name => ""});

export type ICodeRefCollection = Record<string, string>;

/**
 * A code reference provider, which code references can obtain their code from client side
 */
export const CodeReferenceProvider: FC<{code: ICodeRefCollection}> = ({
    code,
    children,
}) => {
    const getValue = useMemo(() => {
        const get = (name: string) => {
            if (!(name in code)) {
                console.error(
                    `"${name}" was not specified in the available code reference bundle"`
                );
                return "";
            }
            return code[name];
        };
        return {getCode: get, getUrl: get};
    }, [code]);

    return (
        <CodeReferenceContext.Provider value={getValue}>
            {children}
        </CodeReferenceContext.Provider>
    );
};

/**
 * A code reference provider to be used server side, which will obtain the referenced code locally, and store it it in the provided `code` map as output
 */
export const ServerSideCodeReferenceProvider: FC<{
    code: ICodeRefCollection;
}> = ({code, children}) => {
    const getValue = useMemo(
        () => ({
            getCode: (name: string) => {
                try {
                    const Path = require("path") as typeof PathImport;
                    const FS = require("fs") as typeof FSImport;
                    if (!(name in code)) {
                        const path = Path.join(
                            process.cwd(),
                            "tempRemoteExamples",
                            ...name.split("/").slice(1)
                        );
                        const codeFile = FS.readFileSync(
                            Path.join(path, ""),
                            "utf-8"
                        );
                        code[name] = codeFile;
                    }
                    return code[name];
                } catch (e) {
                    // Despite tree shaking, the require still errors during build...
                    // Additionally we can just get errors if the file doesn't exist
                    console.error(e);
                    return "";
                }
            },
            getUrl: (name: string) => {
                let fullPath: string;
                if (process.env.NODE_ENV == "production") {
                    fullPath = `https://raw.github.com/LaunchMenu/LaunchMenu/master/${name}`;
                } else {
                    fullPath = `/${name}`;
                }
                code[name] = fullPath;
                return fullPath;
            },
        }),
        [code]
    );

    return (
        <CodeReferenceContext.Provider value={getValue}>
            {children}
        </CodeReferenceContext.Provider>
    );
};
