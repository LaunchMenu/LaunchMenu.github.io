import {createContext} from "react";

export const FeatureContext = createContext<{
    selected: string;
    select: (featureID: string) => void;
}>({selected: "", select: () => {}});
