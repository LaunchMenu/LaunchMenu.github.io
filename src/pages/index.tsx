import {Container} from "@material-ui/core";
import {Fragment} from "react";
import {AppletBlock} from "../components/home/applets/AppletBlock";
import {Applets} from "../components/home/applets/Applets";
import {BackgroundSection} from "../components/home/BackgroundSection";
import {DownloadBlock} from "../components/home/downloads/DownloadBlock";
import {Downloads} from "../components/home/downloads/Downloads";
import {Feature} from "../components/home/features/Feature";
import {FeatureCategory} from "../components/home/features/FeatureCategory";
import {FeatureStatusWrapper} from "../components/home/features/FeatureStatusWrapper";
import {FeatureVideo} from "../components/home/features/FeatureVideo";
import {Hero} from "../components/home/hero/Hero";
import {HorizontalList} from "../components/home/HorizontalList";
import {Key} from "../components/home/Key";
import {RecommendationBlock} from "../components/home/recommendations/RecommendationBlock";
import {Recommendations} from "../components/home/recommendations/Recommendations";
import {SellingPoint} from "../components/home/hero/SellingPoint";
import {LMVideosProvider} from "../components/home/videoService/LMVideosProvider";
import {Spacer} from "../components/Spacer";
import {Text} from "../components/textStyles/Text";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import HelpIcon from "@material-ui/icons/Help";
import NoteIcon from "@material-ui/icons/Note";
import WindowIcon from "@material-ui/icons/WebAsset";
import SettingsIcon from "@material-ui/icons/Settings";
import AppletsIcon from "@material-ui/icons/ViewModule";
import SessionsIcon from "@material-ui/icons/DynamicFeed";
import FileIcon from "@material-ui/icons/InsertDriveFile";
import InternetSearchIcon from "@material-ui/icons/Search";
import MathIcon from "@material-ui/icons/Functions";
import TranslateIcon from "@material-ui/icons/Translate";
import SnippetIcon from "@material-ui/icons/TextFormat";
import TimeIcon from "@material-ui/icons/Schedule";
import CalendarIcon from "@material-ui/icons/Event";
import UndoIcon from "@material-ui/icons/Undo";
import ThemeIcon from "@material-ui/icons/Palette";
import CodeIcon from "@material-ui/icons/Code";
import VideoIcon from "@material-ui/icons/Videocam";
import {Link} from "../components/PlainLink";
import {promises as FS} from "fs";
import Path from "path";
import {FC} from "react";

const Home: FC<{timestamps: ITimestamps}> = ({
    timestamps: {
        contextMenus,
        customize,
        keyboardCentric,
        multiSelect,
        searchAnywhere,
    },
}) => (
    <Container>
        <LMVideosProvider>
            <Hero>
                <FeatureVideo
                    initVideo="demoVideos/introduction.webm"
                    videoPlaceholder="demoVideos/home.png"
                />
            </Hero>

            <HorizontalList margin={2}>
                <SellingPoint
                    title="What is LaunchMenu?"
                    body={
                        <Fragment>
                            LaunchMenu is an Open Source, cross-platform
                            application which brings utilities (applets) to your
                            fingertips. Open it at a press of a button, with
                            LaunchMenu's keyboard centric design!
                        </Fragment>
                    }
                />
                <SellingPoint
                    title="Why LaunchMenu?"
                    body={
                        <Fragment>
                            LaunchMenu is an easy to use and free application
                            that allows you to increase your productivity.
                            Customize the application to your needs with{" "}
                            <Link href="#Themes">advanced theming</Link> and{" "}
                            <Link href="#Settings">applet settings</Link>.
                        </Fragment>
                    }
                />
                <SellingPoint
                    title="Extendable with Applets"
                    body={
                        <Fragment>
                            <Link href="#utility-applets">Some applets</Link>{" "}
                            come preinstalled but additional 3rd party applets
                            will be available. LaunchMenu relies on applets to
                            serve users, and doesn't limit developers in
                            providing their desired user experience.
                        </Fragment>
                    }
                />
            </HorizontalList>

            <BackgroundSection>
                <FeatureCategory
                    category="Actively developed"
                    video="demoVideos/activelyDeveloped.webm"
                    videoPlaceholder="demoVideos/home.png">
                    <Text>
                        LaunchMenu is actively developed. Some features are only
                        partially supported, we will use this legend to indicate
                        what features are supported and what features are
                        planned. You can hover your mouse over the symbol for
                        more information:
                        <ul
                            css={theme => ({
                                listStyleType: "none",
                                paddingLeft: 0,
                                ">*": {
                                    marginBottom: theme.spacing(1),
                                },
                            })}>
                            <li>
                                <FeatureStatusWrapper
                                    status="supported"
                                    childrenInTooltip>
                                    Supported
                                </FeatureStatusWrapper>
                            </li>
                            <li>
                                <FeatureStatusWrapper
                                    status="comingSoon"
                                    childrenInTooltip>
                                    Coming Soon
                                </FeatureStatusWrapper>
                            </li>
                            <li>
                                <FeatureStatusWrapper
                                    status="longTerm"
                                    childrenInTooltip>
                                    Long Term
                                </FeatureStatusWrapper>
                            </li>
                        </ul>
                    </Text>
                </FeatureCategory>
            </BackgroundSection>

            <FeatureCategory
                category="Keyboard centric"
                video="demoVideos/keyboardCentric.webm"
                videoPlaceholder="demoVideos/home.png">
                <Feature title="Select items" time={keyboardCentric.select}>
                    Use the arrow keys to navigate the menu.
                </Feature>
                <Feature
                    title="Execute item actions"
                    time={keyboardCentric.execute}>
                    Hit <Key>Enter ↵</Key> to perform the primary action of the
                    selected item.
                </Feature>
                <Feature
                    title="Step in and out of menus"
                    time={keyboardCentric.navigateMenus}>
                    Press the <Key>Tab ↹</Key> key to hop into a context menu
                    and <Key>Escape</Key> to exit out of it again.
                </Feature>
                <Feature
                    title="Customise any controls"
                    time={keyboardCentric.customize}>
                    All controls are customizable to fit your needs! Join the
                    ijkl-master race.
                </Feature>
                <Feature
                    title="Mnemonics"
                    time={keyboardCentric.mnemonics}
                    status={"longTerm"}>
                    Navigate menus even faster by making use of Mnemonics.
                </Feature>
                <Feature
                    title="Different key modes"
                    time={keyboardCentric.keyboardModes}
                    status={{
                        type: "longTerm",
                        tooltip:
                            "An applet will have to be created to manage settings in bulk.",
                    }}>
                    LaunchMenu will have toggle-able custom keyboard layouts,
                    including a standard VIM-like layout.
                </Feature>
            </FeatureCategory>

            <BackgroundSection>
                <FeatureCategory
                    category="Search anywhere"
                    video="demoVideos/searchAnywhere.webm"
                    videoPlaceholder="demoVideos/home.png">
                    <Feature
                        title="All menus are searchable"
                        time={searchAnywhere.allMenus}>
                        No matter where you are, simply start typing to start
                        searching!
                    </Feature>
                    <Feature
                        title="Searches are recursive"
                        time={searchAnywhere.recursive}>
                        Searches look through the selected menu as well as all
                        sub-menus.
                    </Feature>
                    <Feature title="Filters" time={searchAnywhere.pattern}>
                        Searches can use patterns to automatically filter
                        results.
                    </Feature>
                    <Feature title="Fuzzy Search" time={searchAnywhere.fuzzy}>
                        By default all searches use a fuzzy matching algorithm.
                    </Feature>
                    <Feature
                        title="Prioritized searches"
                        time={searchAnywhere.prioritized}
                        status={{
                            type: "longTerm",
                            tooltip:
                                "This is something we ideally want, but have no infrastructure for.",
                        }}>
                        All searches will be tracked and prioritized
                        intelligently, bringing frequently used items closer to
                        the top of the list.
                    </Feature>
                </FeatureCategory>
            </BackgroundSection>

            <FeatureCategory
                category="Context menus"
                video="demoVideos/contextMenus.webm"
                videoPlaceholder="demoVideos/home.png">
                <Feature title="Item actions" time={contextMenus.itemActions}>
                    Items can have multiple actions, the primary action is
                    executed on <Key>Enter ↵</Key>.
                </Feature>
                <Feature title="Opening" time={contextMenus.contextMenu}>
                    A context menu can be opened, by pressing <Key>Tab ↹</Key>,
                    to show these actions.
                </Feature>
                <Feature title="Searching" time={contextMenus.search}>
                    Context menus, like all menus, can be searched in order to
                    quickly find actions.
                </Feature>
                <Feature title="Sub-menus" time={contextMenus.subMenus}>
                    Context menus can contain sub-menus, which hide additional
                    actions which are rarely used.
                </Feature>
                <Feature title="UI Path" time={contextMenus.path}>
                    The path shows where you are in the application.
                </Feature>
            </FeatureCategory>

            <BackgroundSection>
                <FeatureCategory
                    category="Multi-select"
                    video="demoVideos/multiSelect.webm"
                    videoPlaceholder="demoVideos/home.png">
                    <Feature
                        title="Select and execute multiple items"
                        time={multiSelect.select}>
                        You can select multiple items by pressing or holding the{" "}
                        <Key>⇧ Shift</Key>. Press <Key> Enter ↵</Key> to execute
                        the primary action.
                    </Feature>
                    <Feature
                        title="Shared context menu"
                        time={multiSelect.menu}>
                        Opening a context menu will list actions from all the
                        selected items. Actions executed will operate on all
                        compatible items.
                    </Feature>
                </FeatureCategory>
            </BackgroundSection>

            <FeatureCategory
                category="Customize"
                video="demoVideos/customize.webm"
                videoPlaceholder="demoVideos/home.png">
                <Feature title="Settings" time={customize.settings}>
                    Like all other items, settings can be searched, and altered
                    easily.
                </Feature>
                <Feature title="Keyboard Shortcuts" time={customize.shortcuts}>
                    All keyboard shortcuts / controls can be fully customized to
                    suit your needs.
                </Feature>
                <Feature title="Customize applets" time={customize.customize}>
                    Like native LaunchMenu features, all applets - including 3rd
                    party applets, will be customizable.
                </Feature>
                <Feature
                    title="Settings portability"
                    time={customize.export}
                    status={{
                        type: "comingSoon",
                        tooltip:
                            "Settings are saved as json, but no UI is present yet.",
                    }}>
                    Settings will be portable, allowing you to import and export
                    settings.
                </Feature>
                <Feature
                    title="Applets"
                    time={customize.applets}
                    status={{
                        type: "comingSoon",
                        tooltip:
                            "An applet infrastructure is present, but no UI yet.",
                    }}>
                    LaunchMenu will have an applet manager, which allows the
                    installation and removal of both official and 3rd party
                    applets.
                </Feature>
                <Feature
                    title="Themes"
                    time={customize.theme}
                    status={{
                        type: "comingSoon",
                        tooltip:
                            "A theme infrastructure is present, but no UI yet.",
                    }}>
                    Colour and Style of the LaunchMenu app and applets will be
                    customizable through themes.
                </Feature>
            </FeatureCategory>
        </LMVideosProvider>

        <Spacer amount={200} />

        <BackgroundSection>
            <Applets title="Utility applets">
                <AppletBlock
                    name="Dictionary"
                    description="A dictionary powered by Wiktionary, to quickly lookup word definitions"
                    status="supported"
                    icon={<MenuBookIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Notes"
                    description="A simple notes manager that supports markdown content rendering"
                    status="supported"
                    icon={<NoteIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="File manager"
                    description="An advanced file manager to find and manipulate files"
                    status="longTerm"
                    icon={<FileIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Internet search"
                    description="A general purpose internet search to quickly lookup facts"
                    status="longTerm"
                    icon={<InternetSearchIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Calculator"
                    description="A simple calculator for quick arithmetic"
                    status="longTerm"
                    icon={<MathIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Translator"
                    description="A basic translator"
                    status="longTerm"
                    icon={<TranslateIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Snippets"
                    description="An applet to easily insert often used text sequences"
                    status="longTerm"
                    icon={<SnippetIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Time tracker"
                    description="An applet to keep track of how much time you spend on certain tasks"
                    status="longTerm"
                    icon={<TimeIcon />}
                    category="utility"
                />
                <AppletBlock
                    name="Calendar"
                    description="An advanced calendar to show and plan events"
                    status="longTerm"
                    icon={<CalendarIcon />}
                    category="utility"
                />
            </Applets>

            <Applets
                title="Core applets"
                description="LaunchMenu itself doesn't contain any menus or items. Instead, dedicated 'core-applets' are used to manage the core functionalities.">
                <AppletBlock
                    name="Help"
                    description="Provides simple quickstart information"
                    status="supported"
                    icon={<HelpIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Applet manager"
                    description="Used to manage other applets"
                    status={{
                        type: "comingSoon",
                        tooltip: "Installation of applets isn't yet supported",
                    }}
                    icon={<AppletsIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Settings manager"
                    description="Used to change any settings within LaunchMenu and applets"
                    status="supported"
                    icon={<SettingsIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Window manager"
                    description="Takes care of launching, opening and positioning LaunchMenu"
                    status={{
                        type: "comingSoon",
                        tooltip: "Doesn't support all planned OSes yet",
                    }}
                    icon={<WindowIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Session manager"
                    description="Used to create new parallel sessions within LaunchMenu"
                    status="supported"
                    icon={<SessionsIcon />}
                    category="core"
                />
                <AppletBlock
                    name="LM Recorder"
                    description="Used to create promotional videos"
                    status="supported"
                    icon={<VideoIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Theme manager"
                    description="Used to customize the appearance of LaunchMenu"
                    status="longTerm"
                    icon={<ThemeIcon />}
                    category="core"
                />
                <AppletBlock
                    name="Undo-redo manager"
                    description="Used to control and visualize the undo facility"
                    status="longTerm"
                    icon={<UndoIcon />}
                    category="core"
                />
                <AppletBlock
                    name="User Scripts"
                    description="Used for simple LaunchMenu automation"
                    status={{
                        type: "longTerm",
                        tooltip:
                            "This applet could however be developed rather quickly",
                    }}
                    icon={<CodeIcon />}
                    category="core"
                />
            </Applets>
        </BackgroundSection>

        <Downloads>
            <DownloadBlock
                title="Windows"
                status="supported"
                icon={<img src="/icons/windows.svg" />}
                description="LaunchMenu is primarily being developed and tested on Windows, so this platform has smallest chance of containing bugs."
                download="https://google.com" // TODO: add real URL
            />
            <DownloadBlock
                title="Linux"
                status="longTerm"
                icon={<img src="/icons/linux.svg" />}
                description="Linux support is planned, but not yet worked on. Help from Linux users will be needed to test the software, and fix OS specific issues."
                download="https://google.com" // TODO: add real URL
            />
            <DownloadBlock
                title="Mac"
                status="comingSoon"
                icon={<img src="/icons/apple.svg" />}
                description="Most features have been tested and adjusted to work on Mac, but this testing has been less extensive than on Windows."
                download="https://google.com" // TODO: add real URL
            />
        </Downloads>

        <Spacer amount={200} />

        <BackgroundSection>
            <Recommendations>
                <RecommendationBlock
                    quote="LaunchMenu is very convenient to use, and super fast to interact with. It unfortunately doesn't have many applets yet, but there's a lot of potential!"
                    name="Tar van Krieken"
                    role="Cofounder of LaunchMenu"
                />
                <RecommendationBlock
                    quote="Exactly what I wanted."
                    name="Sancarn"
                    role="Founder of LaunchMenu"
                />
                <RecommendationBlock
                    quote="We don't really have any users yet."
                    name="Tar van Krieken"
                    role="Cofounder of LaunchMenu"
                />
            </Recommendations>
        </BackgroundSection>

        <Spacer amount={200} />
    </Container>
);

export default Home;

// Timestamp props retrieval and typing
type ITimestamp = {start: number; end: number};
type ITimestamps = {
    keyboardCentric: {
        select: ITimestamp;
        execute: ITimestamp;
        navigateMenus: ITimestamp;
        customize: ITimestamp;
        mnemonics: ITimestamp;
        keyboardModes: ITimestamp;
    };
    searchAnywhere: {
        allMenus: ITimestamp;
        recursive: ITimestamp;
        pattern: ITimestamp;
        fuzzy: ITimestamp;
        prioritized: ITimestamp;
    };
    contextMenus: {
        itemActions: ITimestamp;
        contextMenu: ITimestamp;
        search: ITimestamp;
        subMenus: ITimestamp;
        path: ITimestamp;
    };
    multiSelect: {
        select: ITimestamp;
        menu: ITimestamp;
    };
    customize: {
        settings: ITimestamp;
        shortcuts: ITimestamp;
        customize: ITimestamp;
        export: ITimestamp;
        applets: ITimestamp;
        theme: ITimestamp;
    };
};
export const getStaticProps = async (): Promise<{
    props: {timestamps: ITimestamps};
}> => {
    async function getJSON(name: string) {
        const file = await FS.readFile(
            Path.join(
                process.cwd(),
                "public",
                "demoVideos",
                `${name} timestamps.json`
            ),
            "utf-8"
        );
        return JSON.parse(file);
    }
    return {
        props: {
            timestamps: {
                keyboardCentric: await getJSON("keyboardCentric"),
                contextMenus: await getJSON("contextMenus"),
                multiSelect: await getJSON("multiSelect"),
                searchAnywhere: await getJSON("searchAnywhere"),
                customize: await getJSON("customize"),
            },
        },
    };
};
