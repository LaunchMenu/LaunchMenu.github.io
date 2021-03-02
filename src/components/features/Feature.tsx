import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@material-ui/core";
import {FC, useCallback, useContext, useEffect, useRef} from "react";
import {useLMVideoFragment} from "../videoService/useLMVideoFragment";
import {FeatureContext} from "./FeatureContext";
import {IFeatureStatus} from "./FeatureStatusWrapper";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Feature: FC<{
    /** The id of the feature, used as url hash */
    ID?: string;
    /** The title of this feature */
    title: string;
    /** The time of the fragment for this feature */
    time: {
        start: number;
        end: number;
    };
    /** The implementation status of this feature, defaults to supported */
    status?: IFeatureStatus;
}> = ({
    title,
    ID = title.replace(/\s/, "_"),
    time,
    children,
    status = "supported",
}) => {
    // Setup the corresponding section of the video
    const {inSection, play} = useLMVideoFragment({
        startTime: time.start,
        endTime: time.end,
    });

    // When the feature is clicked, set the hash and play from here
    const onSelect = useCallback(() => {
        try {
            history.replaceState(null, null as any, `#${ID}`);
        } catch (e) {
            window.location.hash = ID;
        }
        play();
    }, [play]);

    // Select this feature when we're at the section in the video
    const {selected, select} = useContext(FeatureContext);
    useEffect(() => {
        if (inSection) select(ID);
    }, [inSection]);

    // Start playing on page reload if this feature was linked
    const init = useRef(Date.now());
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const justLoaded = init.current + 1000 > Date.now();
        if (justLoaded && window.location.hash == `#${ID}`) {
            play();

            if (elRef.current) {
                const y =
                    elRef.current.getBoundingClientRect().top +
                    window.pageYOffset -
                    300;
                window.scrollTo({top: y, behavior: "smooth"});
            }
        }
    }, [play]);

    return (
        <div
            ref={elRef}
            css={{
                ":target:before": {
                    content: '""',
                    display: "block",
                    height: 500,
                    marginTop: -500,
                },
            }}>
            <Accordion square expanded={selected == ID} onChange={onSelect}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header">
                    <Typography
                        variant="h3"
                        css={theme => ({
                            fontSize: theme.typography.pxToRem(15),
                        })}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </Accordion>
        </div>
    );
};
