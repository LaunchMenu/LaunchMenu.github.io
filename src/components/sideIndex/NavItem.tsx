import {
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import React, {FC, useCallback, useState} from "react";
import {PlainLink} from "../PlainLink";

export const NavItem: FC<{
    item: INavItem;
    path?: string;
    depth?: number;
}> = ({item, path = "", depth = 0}) => {
    if ("divider" in item) return <Divider />;

    path += "/" + item.name.replace(/ /g, "-");

    const [opened, setOpened] = useState(true);

    const expandable = item.children && !item.link;
    const onClickCallback = useCallback(() => {
        if (expandable) setOpened(o => !o);
    }, [item.children]);
    const theme = useTheme();

    const titleEl = (
        <ListItem
            button
            onClick={onClickCallback}
            style={{
                padding: 0,
                paddingLeft: depth * theme.spacing(3),
            }}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            {expandable && (opened ? <ExpandLess /> : <ExpandMore />)}
            <ListItemText
                primary={
                    item.selected ? (
                        <span
                            css={{
                                fontWeight: 800,
                                color: theme.palette.primary.main,
                            }}>
                            {item.name}
                        </span>
                    ) : (
                        item.name
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
                    <PlainLink href={item.link ?? path}>{titleEl}</PlainLink>
                    {children}
                </>
            );
    }

    return <PlainLink href={item.link ?? path}>{titleEl}</PlainLink>;
};

export type INavItem =
    | {
          name: string;
          selected?: boolean;
          icon?: JSX.Element;
          children?: INavItem[];
          link?: string;
      }
    | {divider: true};
