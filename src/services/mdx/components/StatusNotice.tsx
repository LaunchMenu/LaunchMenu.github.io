import {FC} from "react";
import {
    FeatureStatusWrapper,
    IFeatureStatusData,
} from "../../../components/home/features/FeatureStatusWrapper";

export const StatusNotice: FC<{status?: IFeatureStatusData}> = ({
    status = "longTerm",
    children,
}) => (
    <div css={{marginTop: 20, fontSize: 20, fontWeight: 800}}>
        <FeatureStatusWrapper status={status}>
            {children ??
                "This applet has not yet been developed, but is on the roadmap."}
        </FeatureStatusWrapper>
    </div>
);
