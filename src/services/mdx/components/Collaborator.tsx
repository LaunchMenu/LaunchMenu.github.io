import {FC} from "react";
import Typography from "@material-ui/core/Typography";
import {PlainLink} from "../../../components/PlainLink";
import CopyToClipboard from "react-copy-to-clipboard";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedinIcon from "@material-ui/icons/Linkedin";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import BirthDateIcon from "@material-ui/icons/Cake";
import PositionIcon from "@material-ui/icons/Work";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import {Fragment} from "react";
import {createHeaderComp} from "./createHeaderComp";
import {useHashPos} from "../../../hooks/useHashPos";
import {CopyText} from "../../../components/CopyText";

const H3 = createHeaderComp(3);

export const Collaborator: FC<{
    name: string;
    role?: string;
    alias?: string;
    youtube?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    inline?: boolean;
}> = ({
    name,
    alias,
    dateOfBirth,
    role,
    youtube,
    twitter,
    github,
    linkedin,
    instagram,
    email,
    phone,
    inline,
}) => {
    const ref = useHashPos(name);
    return (
        <section ref={ref}>
            <div
                css={theme => ({
                    marginTop: inline ? undefined : theme.spacing(3),
                    display: "flex",
                    alignItems: "center",

                    // boxShadow: theme.shadows[1],
                    ".MuiButtonBase-root": {
                        padding: 12,
                        borderRadius: "50%",
                    },
                    ".MuiSvgIcon-root": {
                        fontSize: "1.3em",
                        verticalAlign: "sub",
                    },
                    flexWrap: "wrap",
                })}>
                <div
                    css={theme => ({
                        display: "flex",
                        alignItems: "center",
                        [theme.breakpoints.down("sm")]: {
                            flexDirection: "column",
                            alignItems: "flex-start",
                        },
                    })}>
                    <div
                        css={theme => ({
                            marginRight: theme.spacing(1),
                            "h3, p": {
                                margin: 0,
                                display: "inline",
                                whiteSpace: "break-spaces",
                            },
                            display: "flex",
                            alignItems: "baseline",
                        })}>
                        <Typography gutterBottom variant="h5" component={H3}>
                            {name}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p">
                            {alias && <Fragment> Aka {alias}</Fragment>}
                        </Typography>
                    </div>
                    <Typography variant="body2" component="p">
                        {dateOfBirth && (
                            <Fragment>
                                <BirthDateIcon /> {dateOfBirth}
                                <div
                                    css={{display: "inline-block", width: 16}}
                                />{" "}
                            </Fragment>
                        )}
                        {role && (
                            <Fragment>
                                <PositionIcon /> {role}
                            </Fragment>
                        )}
                    </Typography>
                </div>
                <div css={{flexGrow: 1}} />
                <div css={{display: "flex"}}>
                    {youtube && (
                        <PlainLink href={youtube}>
                            <IconButton aria-label="youtube">
                                <YouTubeIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {twitter && (
                        <PlainLink href={twitter}>
                            <IconButton aria-label="twitter">
                                <TwitterIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {github && (
                        <PlainLink href={github}>
                            <IconButton aria-label="github">
                                <GithubIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {linkedin && (
                        <PlainLink href={linkedin}>
                            <IconButton aria-label="linkedin">
                                <LinkedinIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {instagram && (
                        <PlainLink href={instagram}>
                            <IconButton aria-label="instagram">
                                <InstagramIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {email && (
                        <PlainLink href={`mailto:${email}`}>
                            <IconButton aria-label="email">
                                <MailIcon />
                            </IconButton>
                        </PlainLink>
                    )}
                    {phone && (
                        <CopyText
                            text={phone}
                            copyMessage={`Phone number ${phone} copied to clipboard`}>
                            <IconButton aria-label="phone">
                                <PhoneIcon />
                            </IconButton>
                        </CopyText>
                    )}
                </div>
            </div>
        </section>
    );
};
