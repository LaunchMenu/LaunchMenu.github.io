import {ReactNode} from "react";

export type IFeatureStatus = "supported" | "comingSoon" | "longTerm";
export type IFeatureStatusData =
    | IFeatureStatus
    | {
          type: IFeatureStatus;
          tooltip: ReactNode;
      };
