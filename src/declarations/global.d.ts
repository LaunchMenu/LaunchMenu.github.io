import {Theme as LibTheme} from "@material-ui/core";

declare module "@emotion/react" {
    export interface Theme extends LibTheme {}
}
