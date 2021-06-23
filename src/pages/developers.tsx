import {Container} from "@material-ui/core";
import {Fragment} from "react";
import {CodeBlock} from "../components/CodeBlock";
import {Hero} from "../components/developer/Hero";
import {BackgroundSection} from "../components/home/BackgroundSection";
import {FeatureCategory} from "../components/developer/features/FeatureCategory";
import {SellingPoint} from "../components/home/hero/SellingPoint";
import {HorizontalList} from "../components/home/HorizontalList";
import {Feature} from "../components/developer/features/Feature";
import {InlineCode} from "../services/mdx/components/Code";
import {Community} from "../components/developer/Community";
import {Spacer} from "../components/Spacer";
import {Link} from "../components/PlainLink";
import {Video} from "../services/mdx/components/Video";
import {AutoPlayVideo} from "../components/AutoPlayVideo";
import Head from "next/head";

const Developers = () => (
    <Container>
        <Head>
            <meta
                property="og:url"
                content="https://launchmenu.github.io/developers"
                key="og-url"
            />
            <meta
                property="og:description"
                content="Create easy and fast to use applets using LaunchMenu"
                key="og-description"
            />
            <meta
                property="description"
                content="Create easy and fast to use applets using LaunchMenu"
                key="description"
            />
            <meta
                name="keywords"
                content="Open Source, Utility, Keyboard, Applets, Development"
                key="keywords"
            />
        </Head>

        <Hero>
            <CodeBlock
                title="HelloWorld.ts"
                code={`export const info = {
    name: "HelloWorld",
    description: "A minimal example applet",
    version: "0.0.0",
    icon: <img width={30} src={Path.join(__dirname, "..", "images", "icon.png")} />,
};

export const settings = createSettings({
    version: "0.0.0",
    settings: () => createSettingsFolder({ ...info, children: {
        username: createStringSetting({name: "Username", init: "Bob"}),
    }}),
});

const items = [
    createStandardMenuItem({
        name: "Hello world",
        onExecute: ({context}) => 
            alert(\`Hello \${context.settings.get(settings).username.get()}!\`)
    }),
];

export default declare({
    info,
    settings,
    search: async (query, hook) => ({children: searchAction.get(items)}),
});`}
                language="tsx"
                source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosBasics/src/index.tsx"
                result={
                    <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosBasics/recordings/demo.webm" />
                }
            />
        </Hero>
        <HorizontalList margin={2}>
            <SellingPoint
                title="Super flexible"
                body={
                    <Fragment>
                        LaunchMenu consists of independent composable building
                        blocks, allowing you to create any experience you
                        desire. The interfaces are designed to be as flexible as
                        possible without restricting utility.
                    </Fragment>
                }
            />
            <SellingPoint
                title="Quality environment"
                body={
                    <Fragment>
                        Use common web technologies to create applets, including{" "}
                        <a href="https://www.typescriptlang.org/">TypeScript</a>{" "}
                        and <a href="https://reactjs.org/">React</a>, which
                        increase the maintainability of your code. Given
                        LaunchMenu is built with{" "}
                        <a href="https://www.electronjs.org/">Electron</a> your
                        applets will be cross-platform and able to reach a
                        larger audience.
                    </Fragment>
                }
            />
            <SellingPoint
                title="Vast API"
                body={
                    <Fragment>
                        LaunchMenu contains several systems to simplify common
                        scenarios. Applets can make use of the settings system,
                        menus and items, context menu actions, search handlers,
                        themed components and more.
                    </Fragment>
                }
            />
        </HorizontalList>

        <BackgroundSection>
            <FeatureCategory
                category="Ease of development"
                content={
                    <AutoPlayVideo
                        src="development/environment.mp4"
                        maxWidth={600}
                        css={{
                            boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.3)",
                        }}
                    />
                }>
                <Feature title="Composable approach">
                    LaunchMenu has been created as a set of independent building
                    blocks. This allows for more reuse, and more customization.
                    When no block exists for your exact use case, you can often
                    find a block that's doing something similar to what you want
                    and reuse functions,{" "}
                    <a href="https://reactjs.org/">React components</a> and
                    other structures that it uses internally.
                </Feature>
                <Feature title="Developer environment">
                    LaunchMenu is written in{" "}
                    <a href="https://www.typescriptlang.org/">TypeScript</a> and
                    all methods are documented with{" "}
                    <a href="https://tsdoc.org/">TSDoc</a>. This provides
                    excellent intellisense support in modern IDEs (e.g.{" "}
                    <a href="https://code.visualstudio.com/">VSCode</a>) which
                    helps you understand what functions are doing under the hood
                    and how to communicate with them.
                </Feature>
                <Feature title="LaunchMenu build tools">
                    LaunchMenu includes a build utility, which compiles all
                    TypeScript and resources into LaunchMenu-ready packages. A
                    system is also provided which auto-reloads applets as you
                    modify them to ease testing.
                </Feature>
                <Feature
                    title="Applet ecosystem"
                    status={{
                        type: "longTerm",
                        tooltip: "We will start working on this soon",
                    }}>
                    Simply upload your completed applet with the keyword
                    <InlineCode children="launchmenu-applet" /> to NPM in order
                    for it to load into the applet ecosystem.
                </Feature>
                <Feature title="Open source">
                    This is still a developing project, and we value your input.
                    We welcome all new suggestions and contributions! We have
                    already been through several re-designs, and we're not
                    afraid of rewriting code when better alternatives are
                    discovered.
                </Feature>
            </FeatureCategory>
        </BackgroundSection>
        <FeatureCategory
            category="Menu items"
            content={
                <Fragment>
                    <CodeBlock
                        title="Item Creation"
                        code={`const category = createStandardCategory({
    name: "Hello"
});
const items = [
    createStandardMenuItem({
        name: "Hello world",
        icon: <img width={30} src={Path.join(__dirname, "..", "images", "icon.png")} />,
        content: <Box>Hello world!</Box>,
        onExecute: () => alert(\`Hello john!\`),
    }),
    createFolderMenuItem({
        name: "Some folder",
        category,
        children: [
            createStandardMenuItem({
                name: "Bye world",
                description: "More items within this directory",
                content: <Box>Bye world!</Box>,
                onExecute: () => alert(\`Bye bob\`),
            }),
        ],
    }),
];`}
                        language="tsx"
                        source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosItems/src/index.tsx"
                        result={
                            <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosItems/recordings/demo.webm" />
                        }
                    />
                </Fragment>
            }>
            <Feature
                title="Standard items"
                docs="/docs/concepts/ui/menuitems#standard-menu-items">
                Standard factories exist for creating simple but very
                customizable items. It automatically supports functionality
                like: searching, categories, content and context-items.
            </Feature>
            <Feature
                title="Custom items"
                docs="/docs/concepts/ui/menuitems#custom-menu-items">
                Despite standardized factories being provided, menu items can be
                any react component with attached functionality. Menu-item
                sub-components can be reused to reduce duplicate code, yet allow
                you to customize whatever is necessary.
            </Feature>
            <Feature
                title="Context-menu"
                docs="/docs/concepts/interaction/common-actions#context-menu-action">
                Using the <Link href="#action-system">action system</Link> any
                additional functionality can be added to menu items.
            </Feature>
            <Feature
                title="Categories"
                docs="/docs/concepts/ui/menu#categories">
                LaunchMenu supports simple item grouping using categories, to
                neatly organize your menus.
            </Feature>
        </FeatureCategory>
        <BackgroundSection>
            <FeatureCategory
                category="Search system"
                content={
                    <Fragment>
                        <CodeBlock
                            title="Search"
                            code={`// Use a cache to keep the same items when typing
const resultCache = new SearchCache((name: string, image: string, species: string) =>
    createStandardMenuItem({
        name,
        description: species,
        content: <img width="100%" src={image} />,
        onExecute: () => alert(\`\${name}!\`),
    })
);

export default declare({
    info,
    settings,
    search: async (query, hook) => {
        const rawData = await fetch(
            \`https://rickandmortyapi.com/api/character?name=\${query.search}\`
        );
        const data: {
            results: {name: string; image: string; species: string}[];
        } = rawData.ok ? await rawData.json() : {results: []};

        const items = data.results.map(({name, image, species}) =>
            resultCache.get(name, image, species)
        );
        return {children: searchAction.get(items)};
    },
});`}
                            language="tsx"
                            source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosSearch/src/index.tsx"
                            result={
                                <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosSearch/recordings/demo.webm" />
                            }
                        />
                    </Fragment>
                }>
                <Feature
                    title="Asynchronous searches"
                    docs="/docs/concepts/interaction/search-system#searchables">
                    Searches are always asynchronous, allowing you to fetch
                    remote data.
                </Feature>
                <Feature
                    title="Recursive searches"
                    docs="/docs/concepts/interaction/search-system#recursive-searches">
                    The search system is built for performing recursive
                    searches, allowing you to add or remove a whole subtree of
                    search results at once.
                </Feature>
                <Feature
                    title="Dynamic searches"
                    docs="/docs/concepts/interaction/search-system#searchables">
                    Using{" "}
                    <a href="https://tarvk.github.io/model-react/examples/build/">
                        model-react
                    </a>{" "}
                    any search result can be added or removed after the search
                    was performed, dynamically updating the results.
                </Feature>
            </FeatureCategory>
        </BackgroundSection>

        <FeatureCategory
            category="Action system"
            content={
                <Fragment>
                    <CodeBlock
                        title="setTaskPriority.ts"
                        code={`import { createContextAction,  singlePromptExecuteHandler, promptSelectExecuteHandler, 
    Priority, createStandardMenuItem } from "@launchmenu/core";
import {Field} from "model-react";

export type ITaskPriority = "high" | "medium" | "low";
export const setTaskPriority = createContextAction({
    name: "Set priority level",
    contextItem: { priority: Priority.MEDIUM /* Not to be confused with ITaskPriority */ },
    core: (fields: Field<ITaskPriority>[]) => {
        const executeBinding = singlePromptExecuteHandler.createBinding({
            fields,
            valueRetriever: ({field}) =>
                promptSelectExecuteHandler.createBinding({
                    field,
                    options: ["low", "medium", "high"],
                    createOptionView: level => createStandardMenuItem({name: level}),
                }),
        });

        return {
            // Return the bindings for executing the action in the menu
            actionBindings: [executeBinding],
        };
    },
});`}
                        language="tsx"
                        source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosActions/src/setTaskPriority.tsx"
                    />
                    <CodeBlock
                        title="Action Usage"
                        code={`import {ITaskPriority, createStandardMenuItem} from "@launchmenu/core";
function createTaskMenuItem({name}: {name: string}) {
    const level = new Field<ITaskPriority>("medium");
    return createStandardMenuItem({
        name,
        description: hook => level.get(hook),
        onExecute: () => alert(level.get()),
        actionBindings: [setTaskPriority.createBinding(level)],
    });
}

const items = [
    createTaskMenuItem({name: "Meet Alice"}),
    createTaskMenuItem({name: "Make pancakes"}),
    createTaskMenuItem({name: "Free Hat"}),
];`}
                        language="tsx"
                        source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosActions/src/index.tsx"
                        result={
                            <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosActions/recordings/demo.webm" />
                        }
                    />
                </Fragment>
            }>
            <Feature
                title="Powerful action system"
                docs="/docs/concepts/interaction/actions">
                LaunchMenu provides a generic action system. Menu items only
                provide functionality through their action bindings. This
                includes providing items to context menus, keyboard input
                handling, search handling, execution handling, and even
                selection event handling.
            </Feature>
            <Feature title="Multiple item selection">
                The action system is especially designed to support combined
                behavior of multiple selected actions. This makes sure users
                don't have to repeat the same actions multiple times and instead
                allows them to bulk operations.
            </Feature>
            <Feature
                title="Action specialization"
                docs="/docs/concepts/interaction/actions#action-handlers">
                Actions can easily be extended in order to specialize them. This
                allows one action in the context-menu to perform different - but
                similar - tasks depending on the selected item.
            </Feature>
            <Feature
                title="Item specialization"
                docs="/docs/concepts/interaction/common-actions#item-overrides">
                When an action is specialized, the context-menu item can also be
                specialized. This way a more specific name can be displayed as
                long as all selected items perform the exact same task.
            </Feature>
            <Feature
                title="Undo/redo integration"
                docs="/docs/concepts/interaction/common-actions#execute-action">
                The primary execute action has built-in support for commands,
                allowing the user to undo and redo their performed actions.
            </Feature>
        </FeatureCategory>

        <BackgroundSection>
            <FeatureCategory
                category="Settings"
                content={
                    <Fragment>
                        <CodeBlock
                            title="Settings"
                            code={`export const settings = createSettings({
    version: "0.0.0",
    settings: () =>
        createSettingsFolder({
            ...info,
            children: {
                username: createStringSetting({name: "Username", init: "Bob"}),
            },
        }),
});

const Content: FC<{text: string}> = ({text}) => {
    const context = useIOContext();
    const [hook] = useDataHook();
    const name = context?.settings.get(settings).username.get(hook);
    return (
        <Box color="primary">
            {text} {name}!
        </Box>
    );
};

const items = [
    createStandardMenuItem({
        name: "Hello world",
        content: <Content text="Hello" />,
        onExecute: ({context}) =>
            alert(\`Hello \${context.settings.get(settings).username.get()}!\`),
    }),
];`}
                            language="tsx"
                            source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosSettings/src/index.tsx"
                            result={
                                <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosSettings/recordings/demo.webm" />
                            }
                        />
                    </Fragment>
                }>
                <Feature
                    title="Simple setting declarations"
                    docs="/docs/concepts/settings">
                    Easily create settings that users are able to alter to their
                    likings, using the same menu items as used elsewhere.
                </Feature>
                <Feature
                    title="Simple setting usage"
                    docs="/docs/concepts/settings">
                    Obtain the setting values using the IOContext in a variety
                    of places. Settings can also easily be subscribed to,
                    instantly updating whatever depends on the setting.
                </Feature>
                <Feature
                    title="Custom setting types"
                    docs="/docs/concepts/settings#custom-settings">
                    Since settings are simply menu-items, one can easily make
                    their own setting type.
                </Feature>
            </FeatureCategory>
        </BackgroundSection>

        <FeatureCategory
            category="Undo/redo system"
            content={
                <Fragment>
                    <CodeBlock
                        title="Undo/redo"
                        code={`const createTimesItem = (name: string) => {
    const times = new Field(1);
    return createStandardMenuItem({
        name: hook => \`\${name} x\${times.get(hook)}\`,
        // Use a command to allow the user to revert the change
        onExecute: () => new SetFieldCommand(times, times.get() + 1),
    });
};
const items = [createTimesItem("Hello world"), createTimesItem("Bye world")];`}
                        language="tsx"
                        source="https://github.com/LaunchMenu/LM-applet-examples/blob/main/examples/demosUndoRedo/src/index.tsx"
                        result={
                            <Video src="https://raw.github.com/LaunchMenu/LM-applet-examples/main/examples/demosUndoRedo/recordings/demo.webm" />
                        }
                    />
                </Fragment>
            }>
            <Feature
                title="Integrated undo/redo system"
                status={{
                    type: "comingSoon",
                    tooltip:
                        "No applet to control the undo/redo facility is available yet",
                }}
                docs="/docs/concepts/interaction/undo-redo">
                Easily dispatch undoable commands from throughout your apple,
                and allow users to make mistakes without any consequences.
            </Feature>
            <Feature
                title="Asynchronous command execution"
                docs="/docs/concepts/interaction/undo-redo#commands">
                Commands are allow to execute asynchronously, and perform any
                complex tasks.
            </Feature>
            <Feature
                title="Channeled command execution"
                docs="/docs/concepts/interaction/undo-redo#resources">
                Since commands may execute asynchronously, "resources" can be
                used to define different channels for unrelated commands to
                execute in parallel.
            </Feature>
        </FeatureCategory>

        <Spacer amount={100} />
        <BackgroundSection>
            <Spacer amount={100} />
            <Community
                title="Community"
                links={[
                    {
                        name: "Github",
                        url: "https://github.com/LaunchMenu/LaunchMenu/discussions",
                    },
                    {
                        name: "Matrix chat",
                        url: "https://matrix.to/#/!oKdXnjYicRtcwpbwAl:matrix.org?via=matrix.org?",
                    },
                ]}>
                As mentioned before, LaunchMenu is fully open-source! We welcome
                any contributions to the project, especially third party
                applets. In case that you want to contribute to our official
                repository, we do recommend discussing your ideas with us first
                however. This prevents you from investing a lot of time into
                something that doesn't line up with our vision. That said, we're
                open to most ideas, and definitely to any discussions! So don't
                hesitate to join the community, both as developer or as user, at
                one of the following links:
            </Community>
            <Spacer amount={100} />
        </BackgroundSection>

        <Spacer amount={400} />
    </Container>
);
export default Developers;
