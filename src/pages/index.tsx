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
import {Link} from "../components/PlainLink";

const Home = () => (
    <Container>
        <LMVideosProvider>
            <Hero>
                <FeatureVideo
                    initVideo="videoTest4.mp4"
                    videoPlaceholder="videoTest2.png"
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
                            LaunchMenu is easy to use, free and allows you to
                            increase your productivity. Customise the
                            application to your needs with{" "}
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
                    video="videoTest2.mp4"
                    videoPlaceholder="videoTest2.png">
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
                video="videoTest3.mp4"
                videoPlaceholder="videoTest2.png">
                <Feature title="Select items" time={{start: 0, end: 1}}>
                    Use the arrow keys to navigate the menu.
                </Feature>
                <Feature
                    title="Execute item actions"
                    time={{start: 1.3, end: 2}}>
                    Hit <Key>Enter ↵</Key> to perform the primary action of the
                    selected item.
                </Feature>
                <Feature
                    title="Step in and out of menus"
                    time={{start: 2.3, end: 3}}>
                    Press the <Key>Tab ↹</Key> key to hop into a context menu
                    and <Key>Escape</Key> to exit out of it again.
                </Feature>
                <Feature
                    title="Customise any controls"
                    time={{start: 3.3, end: 4}}>
                    All controls are customisable to fit your needs! Join the
                    ijkl-master race.
                </Feature>
                <Feature
                    title="Mnemonics"
                    time={{start: 4.3, end: 5}}
                    status={"longTerm"}>
                    Navigate menus even faster by making use of Mnemonics.
                </Feature>
                <Feature
                    title="Native VIM keys mode"
                    time={{start: 5.3, end: 6}}
                    status={{
                        type: "longTerm",
                        tooltip:
                            "An applet will have to be created to manage settings in bulk.",
                    }}>
                    LaunchMenu will have toggle-able custom keyboard layouts,
                    including VIM as standard.
                </Feature>
            </FeatureCategory>

            <BackgroundSection>
                <FeatureCategory
                    category="Search anywhere"
                    video="videoTest4.mp4"
                    videoPlaceholder="videoTest2.png">
                    <Feature
                        title="All menus are searchable"
                        time={{start: 0, end: 1}}>
                        No matter where you are, simply start typing to start
                        searching!
                    </Feature>
                    <Feature
                        title="Searches are recursive"
                        time={{start: 1.3, end: 2}}>
                        Searches look through the selected menu as well as all
                        sub-menus.
                    </Feature>
                    <Feature title="Filters" time={{start: 2.3, end: 3}}>
                        Searches can use patterns to automatically filter
                        results.
                    </Feature>
                    <Feature title="Fuzzy Search" time={{start: 3.3, end: 4}}>
                        By default all searches use a fuzzy matching algorithm.
                    </Feature>
                    <Feature
                        title="Prioritised searches"
                        time={{start: 4.3, end: 5}}
                        status={{
                            type: "longTerm",
                            tooltip:
                                "This is something we ideally want, but have no infrastructure for.",
                        }}>
                        All searches will be tracked and prioritised
                        intelligently, bringing frequently used items closer to
                        the top of the list.
                    </Feature>
                </FeatureCategory>
            </BackgroundSection>

            <FeatureCategory
                category="Context menus"
                video="videoTest3.mp4"
                videoPlaceholder="videoTest2.png">
                <Feature title="Item actions" time={{start: 0, end: 1}}>
                    Items can have multiple actions, the primary action is
                    executed on <Key>Enter ↵</Key>.
                </Feature>
                <Feature title="Opening" time={{start: 1.3, end: 2}}>
                    A context menu can be opened, by pressing <Key>Tab ↹</Key>,
                    to show these actions.
                </Feature>
                <Feature title="Searching" time={{start: 2.3, end: 3}}>
                    Context menus, like all menus, can be searched in order to
                    quickly find actions.
                </Feature>
                <Feature title="Sub-menus" time={{start: 3.3, end: 4}}>
                    Context menus can contain sub-menus, which hide additional
                    actions which are rarely used.
                </Feature>
                <Feature title="UI Path" time={{start: 4.3, end: 5}}>
                    The path shows where you are in the application.
                </Feature>
            </FeatureCategory>

            <BackgroundSection>
                <FeatureCategory
                    category="Multi-select"
                    video="videoTest4.mp4"
                    videoPlaceholder="videoTest2.png">
                    <Feature
                        title="Select and execute multiple items"
                        time={{start: 0, end: 1}}>
                        You can select multiple items by pressing or holding the{" "}
                        <Key>⇧ Shift</Key>. Press <Key> Enter ↵</Key> to execute
                        the primary action.
                    </Feature>
                    <Feature
                        title="Shared context menu"
                        time={{start: 1.3, end: 2}}>
                        Opening a context menu will list actions from all the
                        selected items. Actions executed will operate on all
                        compatible items.
                    </Feature>
                </FeatureCategory>
            </BackgroundSection>

            <FeatureCategory
                category="Customise"
                video="videoTest3.mp4"
                videoPlaceholder="videoTest2.png">
                <Feature title="Settings" time={{start: 0, end: 1}}>
                    Like all other items, settings can be searched, and altered
                    easily.
                </Feature>
                <Feature title="Keyboard Shortcuts" time={{start: 1.3, end: 2}}>
                    All keyboard shortcuts / controls can be fully customised to
                    suit your needs.
                </Feature>
                <Feature title="Customise applets" time={{start: 2.3, end: 3}}>
                    Like native LaunchMenu features, all applets - including 3rd
                    party applets, will be customisable.
                </Feature>
                <Feature
                    title="Settings portability"
                    time={{start: 3.3, end: 4}}
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
                    time={{start: 4.3, end: 5}}
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
                    time={{start: 5.3, end: 6}}
                    status={{
                        type: "comingSoon",
                        tooltip:
                            "A theme infrastructure is present, but no UI yet.",
                    }}>
                    Colour and Style of the LaunchMenu app and applets will be
                    customisable through themes.
                </Feature>
            </FeatureCategory>
        </LMVideosProvider>

        <BackgroundSection>
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
        </BackgroundSection>

        <Spacer amount={200} />

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

        <Spacer amount={400} />
    </Container>
);

export default Home;
