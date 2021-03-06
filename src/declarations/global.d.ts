import {Theme as LibTheme} from "@material-ui/core";
/// <reference path="./TextFit" />

declare module "@emotion/react" {
    export interface Theme extends LibTheme {}
}
