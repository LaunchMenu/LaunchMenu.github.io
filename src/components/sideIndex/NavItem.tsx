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
    path: string;
    depth?: number;
}> = ({item, path, depth = 0}) => {
    if ("divider" in item) return <Divider />;

    path += "/" + item.name.replace(/ /g, "-");

    const [opened, setOpened] = useState(true);
    const onClickCallback = useCallback(() => {
        if (item.children) setOpened(o => !o);
    }, [item.children]);
    const theme = useTheme();

    const titleEl = (
        <ListItem
            button
            onClick={onClickCallback}
            style={{
                padding: 0,
                paddingLeft: theme.spacing(2) + depth * theme.spacing(2),
                paddingRight: theme.spacing(1),
            }}>
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText
                primary={
                    item.selected ? (
                        <span css={{fontWeight: 800}}>{item.name}</span>
                    ) : (
                        item.name
                    )
                }
            />
            {item.children && (opened ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
    );

    if (item.children)
        return (
            <>
                {titleEl}
                <Collapse in={opened} timeout="auto" unmountOnExit>
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
                </Collapse>
            </>
        );

    return <PlainLink href={path}>{titleEl}</PlainLink>;
};

export type INavItem =
    | {
          name: string;
          selected?: boolean;
          icon?: JSX.Element;
          children?: INavItem[];
      }
    | {divider: true};
