import {Container} from "@material-ui/core";
import {Fragment} from "react";
import {CodeBlock} from "../components/CodeBlock";
import {Hero} from "../components/developer/Hero";
import {BackgroundSection} from "../components/home/BackgroundSection";
import {FeatureCategory} from "../components/developer/features/FeatureCategory";
import {SellingPoint} from "../components/home/hero/SellingPoint";
import {HorizontalList} from "../components/home/HorizontalList";
import {Link} from "../components/PlainLink";
import {Feature} from "../components/developer/features/Feature";
import {ScreenRecording} from "../services/mdx/components/ScreenRecording";
import {InlineCode} from "../services/mdx/components/Code";

const Developers = () => (
    <Container>
        <Hero>
            <CodeBlock
                title="HelloWorld.ts"
                code={`export const info = {
    name: "HelloWorld",
    description: "A minimal example applet",
    version: "0.0.0",
    icon: <MyIcon />,
};

export const settings = createSettings({
    version: "0.0.0",
    settings: () => createSettingsFolder({ ...info, children: {
        name: createStringSetting({name: "Username", init: "Bob"}),
    }}),
});

const items = [
    createStandardMenuItem({
        name: "Hello world",
        onExecute: ({context}) => 
            alert(\`Hello \${context.settings.get(settings).name.get()}!\`)
    }),
];

export default declare({
    info,
    settings,
    async search: (query, hook) => 
        ({ children: searchAction.get(items) })
});`}
                language="tsx"
                // TODO: add the real URL
                source="https://github.com/search"
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
                content={<Fragment></Fragment>}>
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

        <BackgroundSection>
            <FeatureCategory
                category="Action system"
                content={
                    <Fragment>
                        <CodeBlock
                            title="setTaskPriority.ts"
                            code={`import { createContextAction,  singlePromptExecuteHandler, promptSelectExecuteHandler, 
    Priority, createStandardMenuItem } from "@launchmenu/core";
import {Field} from "model-react";

type ITaskPriority = "high" | "medium" | "low";
export const setTaskPriority = createContextAction({
    name: "Set priority level",
    contextItem: { priority: Priority.MEDIUM /* Not to be confused with ITaskPriority */ },
    core: (fields: Field<ITaskPriority>[]) => {
        const getExecuteBinding = () => 
            singlePromptExecuteHandler.createBinding({
                fields, 
                valueRetriever: field=>promptSelectExecuteHandler.createBinding({
                    field,
                    options: ["low", "medium", "high"],
                    createOptionView: level => createStandardMenuItem({ name: level }),
                })
            });

        return {
            // Return the bindings for executing the action in the menu
            actionBindings: getExecuteBindings,
            // As well as some result for programmatic access for extension
            result: { getExecuteBindings },
        };
    },
});`}
                            language="tsx"
                            // TODO: add the real URL
                            source="https://github.com/search"
                        />
                        <CodeBlock
                            title="Action Usage"
                            code={`import {createStandardMenuItem} from "@launchmenu/core";
import {Field} from "model-react";
import {setTaskPriority} from "./setTaskPriority";

function createTaskMenuItem({name}: {name: string}) {
    const level = new Field("medium");
    return createStandardMenuItem({
        name,
        description: hook => level.get(hook),
        actionBindings: [setTaskPriority.createBinding(level)]
    });
}

const items = [
    createTaskMenuItem({name: "Meet Alice"}),
    createTaskMenuItem({name: "Make pancakes"}),
    createTaskMenuItem({name: "Free Hat"})
]`}
                            language="tsx"
                            // TODO: add the real URL
                            source="https://github.com/search"
                            result={<ScreenRecording src="/videoTest2.mp4" />}
                        />
                    </Fragment>
                }>
                <Feature title="Powerful action system">
                    LaunchMenu provides a generic action system. Menu items only
                    provide functionality through their action. This includes
                    providing items to context menus, keyboard input handling,
                    search handling, execution handling, and even selection
                    event handling.
                </Feature>
                <Feature title="Multiple item selection"></Feature>
                <Feature title="Behavior bundling"></Feature>
                <Feature title="Action extensions"></Feature>
                <Feature title="Item specialization"></Feature>
                <Feature title="Undo/redo integration"></Feature>
            </FeatureCategory>
        </BackgroundSection>
    </Container>
);
export default Developers;
