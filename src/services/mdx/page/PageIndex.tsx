import {List} from "@material-ui/core";
import {FC, useMemo} from "react";
import {INavItem, NavItem} from "../../../components/sideIndex/NavItem";
import {Text} from "../../../components/textStyles/Text";
import {getUrlHash} from "../../getUrlHash";
import {ITOC} from "../TOCremarkPlugin";
import {usePageIndex} from "./PageIndexContext";

export const PageIndex: FC<{ToC: ITOC}> = ({ToC}) => {
    const {section} = usePageIndex();
    const navItems = useMemo(() => {
        const createNav = (ToC: ITOC): INavItem[] =>
            ToC.map(({name, children}) => ({
                name: name.replace(/\-/g, " "),
                selected: name == section,
                children: createNav(children),
                link: `#${getUrlHash(name)}`,
            }));

        const items = createNav(ToC);
        if (items.length == 1 && "children" in items[0] && items[0].children)
            return items[0].children;
        return items;
    }, [section, ToC]);

    return (
        <div css={{flexBasis: 240, flexShrink: 0}}>
            <div
                css={theme => ({
                    top: theme.mixins.toolbar.height,
                    position: "sticky",
                    paddingTop: theme.spacing(2),
                    overflowY: "auto",
                    [theme.breakpoints.up("md")]: {
                        maxHeight: `calc(100vh - ${theme.mixins.toolbar.height}px)`,
                    },
                })}>
                <Text css={{fontWeight: 800}}>Table of Contents</Text>
                <List>
                    {navItems.map((item, i) => (
                        <NavItem key={i} item={item} />
                    ))}
                </List>
            </div>
        </div>
    );
};
