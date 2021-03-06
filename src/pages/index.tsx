import {Container} from "@material-ui/core";
import Link from "next/link";
import {Fragment} from "react";
import {BackgroundSection} from "../components/home/BackgroundSection";
import {Downloads} from "../components/home/downloads/Downloads";
import {Feature} from "../components/home/features/Feature";
import {FeatureCategory} from "../components/home/features/FeatureCategory";
import {FeatureStatusWrapper} from "../components/home/features/FeatureStatusWrapper";
import {FeatureVideo} from "../components/home/features/FeatureVideo";
import {Hero} from "../components/home/Hero";
import {HorizontalList} from "../components/home/HorizontalList";
import {Key} from "../components/home/Key";
import {SellingPoint} from "../components/home/SellingPoint";
import {LMVideosProvider} from "../components/home/videoService/LMVideosProvider";
import {Text} from "../components/textStyles/Text";

// Don't auto scroll to position, since it messes with the hash
try {
    history.scrollRestoration = "manual";
} catch (e) {}

export default function Home() {
    return (
        <Container>
            <LMVideosProvider>
                <Hero>
                    <FeatureVideo
                        initVideo="videoTest4.mp4"
                        background="videoTest2.jpg"
                    />
                </Hero>

                <HorizontalList margin={2}>
                    <SellingPoint
                        title="What is LaunchMenu?"
                        body={
                            <Fragment>
                                LaunchMenu is an Open Source, cross-platform
                                application which brings utilities (applets) to
                                your fingertips. Open it at a press of a button,
                                with LaunchMenu's keyboard centric design!
                            </Fragment>
                        }
                    />
                    <SellingPoint
                        title="Why LaunchMenu?"
                        body={
                            <Fragment>
                                LaunchMenu is easy to use, free and allows you
                                to increase your productivity. Customise the
                                application to your needs with{" "}
                                <Link href="#theming">advanced theming</Link>{" "}
                                and{" "}
                                <Link href="#settings">applet settings</Link>.
                            </Fragment>
                        }
                    />
                    <SellingPoint
                        title="Extendable with Applets"
                        body={
                            <Fragment>
                                <Link href="#applets">Some applets</Link> come
                                preinstalled but additional 3rd party applets{" "}
                                <Link href="#thirdPartyApplets">
                                    will be available
                                </Link>
                                . LaunchMenu relies on applets to serve users,
                                and doesn't limit developers in providing their
                                desired user experience.
                            </Fragment>
                        }
                    />
                </HorizontalList>

                <BackgroundSection>
                    <FeatureCategory
                        category="Actively developed"
                        video="videoTest2.mp4">
                        <Text>
                            LaunchMenu is actively developed. Some features are
                            only partially supported, we will use this legend to
                            indicate what features are supported and what
                            features are planned. You can hover your mouse over
                            the symbol for more information:
                            <ul
                                css={theme => ({
                                    listStyleType: "none",
                                    paddingLeft: theme.spacing(2),
                                })}>
                                <li>
                                    <FeatureStatusWrapper status="supported">
                                        Supported
                                    </FeatureStatusWrapper>
                                </li>
                                <li>
                                    <FeatureStatusWrapper status="comingSoon">
                                        Coming Soon
                                    </FeatureStatusWrapper>
                                </li>
                                <li>
                                    <FeatureStatusWrapper status="longTerm">
                                        Long Term
                                    </FeatureStatusWrapper>
                                </li>
                            </ul>
                        </Text>
                    </FeatureCategory>
                </BackgroundSection>

                <FeatureCategory
                    category="Keyboard centric"
                    video="videoTest3.mp4">
                    <Feature title="Select items" time={{start: 0, end: 1}}>
                        Use the arrow keys to navigate the menu.
                    </Feature>
                    <Feature
                        title="Execute item actions"
                        time={{start: 1.3, end: 2}}>
                        Hit <Key>Enter ↵</Key> to perform the primary action of
                        the selected item.
                    </Feature>
                    <Feature
                        title="Step in and out of menus"
                        time={{start: 2.3, end: 3}}>
                        Press the <Key>Tab ↹</Key> key to hop into a context
                        menu and <Key>Escape</Key> to exit out of it again.
                    </Feature>
                    <Feature
                        title="Customise any controls"
                        time={{start: 3.3, end: 4}}>
                        All controls are customisable to fit your needs! Join
                        the ijkl-master race.
                    </Feature>
                    <Feature
                        title="Native VIM keys mode"
                        time={{start: 4.3, end: 5}}
                        status={{
                            type: "longTerm",
                            tooltip:
                                "An applet will have to be created to manage settings in bulk.",
                        }}>
                        LaunchMenu will have toggle-able custom keyboard
                        layouts, including VIM as standard.
                    </Feature>
                </FeatureCategory>

                <BackgroundSection>
                    <FeatureCategory
                        category="Search anywhere"
                        video="videoTest4.mp4">
                        <Feature
                            title="All menus are searchable"
                            time={{start: 0, end: 1}}>
                            No matter where you are, simply start typing to
                            start searching!
                        </Feature>
                        <Feature
                            title="Searches are recursive"
                            time={{start: 1.3, end: 2}}>
                            Searches look through the selected menu as well as
                            all sub-menus.
                        </Feature>
                        <Feature title="Filters" time={{start: 2.3, end: 3}}>
                            Searches can use patterns to automatically filter
                            results.
                        </Feature>
                        <Feature
                            title="Fuzzy Search"
                            time={{start: 3.3, end: 4}}>
                            By default all searches use a fuzzy matching
                            algorithm.
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
                            intelligently, bringing frequently used items closer
                            to the top of the list.
                        </Feature>
                    </FeatureCategory>
                </BackgroundSection>

                <FeatureCategory
                    category="Context menus"
                    video="videoTest3.mp4">
                    <Feature title="Item actions" time={{start: 0, end: 1}}>
                        Items can have multiple actions, the primary action is
                        executed on <Key>Enter ↵</Key>.
                    </Feature>
                    <Feature title="Opening" time={{start: 1.3, end: 2}}>
                        A context menu can be opened, by pressing{" "}
                        <Key>Tab ↹</Key>, to show these actions.
                    </Feature>
                    <Feature title="Searching" time={{start: 2.3, end: 3}}>
                        Context menus, like all menus, can be searched in order
                        to quickly find actions.
                    </Feature>
                    <Feature title="Sub-menus" time={{start: 3.3, end: 4}}>
                        Context menus can contain sub-menus, which hide
                        additional actions which are rarely used.
                    </Feature>
                    <Feature title="UI Path" time={{start: 4.3, end: 5}}>
                        The path shows where you are in the application.
                    </Feature>
                </FeatureCategory>

                <BackgroundSection>
                    <FeatureCategory
                        category="Multi-select"
                        video="videoTest4.mp4">
                        <Feature
                            title="Select and execute multiple items"
                            time={{start: 0, end: 1}}>
                            You can select multiple items by pressing or holding
                            the <Key>⇧ Shift</Key>. Press <Key> Enter ↵</Key> to
                            execute the primary action.
                        </Feature>
                        <Feature
                            title="Shared context menu"
                            time={{start: 1.3, end: 2}}>
                            Opening a context menu will list actions from all
                            the selected items. Actions executed will operate on
                            all compatible items.
                        </Feature>
                    </FeatureCategory>
                </BackgroundSection>

                <FeatureCategory category="Customise" video="videoTest3.mp4">
                    <Feature title="Settings" time={{start: 0, end: 1}}>
                        Like all other items, settings can be searched, and
                        altered easily.
                    </Feature>
                    <Feature
                        title="Keyboard Shortcuts"
                        time={{start: 1.3, end: 2}}>
                        All keyboard shortcuts / controls can be fully
                        customised to suit your needs.
                    </Feature>
                    <Feature
                        title="Customise applets"
                        time={{start: 2.3, end: 3}}>
                        Like native LaunchMenu features, all applets - including
                        3rd party applets, will be customisable.
                    </Feature>
                    <Feature
                        title="Settings portability"
                        time={{start: 3.3, end: 4}}
                        status={{
                            type: "comingSoon",
                            tooltip:
                                "Settings are saved as json, but no UI is present yet.",
                        }}>
                        Settings will be portable, allowing you to import and
                        export settings.
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
                        Colour and Style of the LaunchMenu app and applets will
                        be customisable through themes.
                    </Feature>
                </FeatureCategory>
            </LMVideosProvider>

            <BackgroundSection>
                <Downloads />
            </BackgroundSection>
        </Container>
    );
}
