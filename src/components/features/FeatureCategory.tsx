import {FC, ReactNode} from "react";
import {IFeatureStatusData} from "./FeatureStatusWrapper";

export const FeatureCategory: FC<{
    category: string;
    features: IFeature[];
    video: string;
}> = ({category, features, video}) => {
    return <div>hoi</div>;
};

export type IFeature = {
    feature: ReactNode;
    time: number;
    status: IFeatureStatusData;
};
