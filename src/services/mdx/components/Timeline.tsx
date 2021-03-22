import {ReactNode} from "react";
import {FC} from "react";

import MUITimeline from "@material-ui/lab/Timeline";
import MUITimelineItem from "@material-ui/lab/TimelineItem";
import MUITimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import MUITimelineSeparator from "@material-ui/lab/TimelineSeparator";
import MUITimelineConnector from "@material-ui/lab/TimelineConnector";
import MUITimelineContent from "@material-ui/lab/TimelineContent";
import MUITimelineDot from "@material-ui/lab/TimelineDot";
import {Typography} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const Timeline: FC = ({children}) => (
    // <div css={{maxHeight: 700, overflow: "auto"}}>
    <MUITimeline align="left" css={{padding: 0}}>
        {children}
    </MUITimeline>
    // </div>
);

export const TimelineItem: FC<{
    date?: string;
    name?: ReactNode;
    description?: ReactNode;
    link?: string;
    separator?: boolean;
    now?: boolean;
    last?: boolean;
}> = ({name, last, now, date, description, link, separator}) => (
    <MUITimelineItem css={{":before": {flex: 0, padding: 0}}}>
        <MUITimelineOppositeContent css={{flex: 0, minWidth: 85}}>
            <Typography color="textSecondary">{date}</Typography>
        </MUITimelineOppositeContent>

        <MUITimelineSeparator>
            {separator ? (
                <span
                    css={theme => ({
                        fontSize: 30,
                        marginTop: -15,
                        width: 12,
                        color: theme.palette.grey[400],
                        display: "flex",
                        justifyContent: "center",
                    })}>
                    ...
                </span>
            ) : now ? (
                <span
                    css={theme => ({
                        ">*": {backgroundColor: theme.palette.primary.main},
                    })}>
                    <MUITimelineDot />
                </span>
            ) : (
                <MUITimelineDot />
            )}
            {!last && <MUITimelineConnector />}
        </MUITimelineSeparator>
        <MUITimelineContent>
            <Typography>
                <span
                    css={theme => ({
                        fontWeight: 800,
                        marginRight: theme.spacing(2),
                    })}>
                    {name}
                    {link && (
                        <a href={link} target="_blank">
                            <OpenInNewIcon
                                css={theme => ({
                                    verticalAlign: "middle",
                                    marginLeft: theme.spacing(0.5),
                                    fontSize: 20,
                                })}
                            />
                        </a>
                    )}
                </span>
                {description}
            </Typography>
        </MUITimelineContent>
    </MUITimelineItem>
);
