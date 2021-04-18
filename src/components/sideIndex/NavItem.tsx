import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import React, {FC, useCallback, useState} from "react";
import {PlainLink} from "../PlainLink";

export const NavItem: FC<{
    item: INavItem;
    path?: string;
    depth?: number;
}> = ({item, path = "", depth = 0}) => {
    if ("divider" in item) return <Divider />;

    path += "/" + item.name.replace(/ /g, "-");

    const [opened, setOpened] = useState(item.opened ?? true);

    const expandable = item.children && !item.link;
    const onClickCallback = useCallback(() => {
        if (expandable) setOpened(o => !o);
    }, [item.children]);
    const theme = useTheme();

    const name = item.name.replace(/\-/g, " ");
    const titleEl = (
        <ListItem
            button
            onClick={onClickCallback}
            style={{
                padding: 0,
                paddingLeft: depth * theme.spacing(3),
            }}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {expandable &&
                (opened ? (
                    <KeyboardArrowDownIcon />
                ) : (
                    <KeyboardArrowRightIcon />
                ))}
            <ListItemText
                primary={
                    item.selected ? (
                        <span
                            css={{
                                fontWeight: 800,
                                color: theme.palette.primary.main,
                            }}>
                            {name}
                        </span>
                    ) : (
                        name
                    )
                }
            />
        </ListItem>
    );

    if (item.children) {
        const children = (
            <List component="div" disablePadding>
                {item.children.map((item, i) => (
                    <NavItem
                        key={i}
                        item={item}
                        depth={depth + 1}
                        path={path}
                    />
                ))}
            </List>
        );
        if (expandable)
            return (
                <>
                    {titleEl}
                    <Collapse in={opened} timeout="auto" unmountOnExit>
                        {children}
                    </Collapse>
                </>
            );
        else
            return (
                <>
                    <PlainLink href={item.link ?? path.toLowerCase()}>
                        {titleEl}
                    </PlainLink>
                    {children}
                </>
            );
    }

    return (
        <PlainLink href={item.link ?? path.toLowerCase()}>{titleEl}</PlainLink>
    );
};

export type INavItem =
    | {
          name: string;
          selected?: boolean;
          icon?: JSX.Element;
          children?: INavItem[];
          link?: string;
          opened?: boolean;
      }
    | {divider: true};
