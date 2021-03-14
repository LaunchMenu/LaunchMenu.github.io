import {Theme as LibTheme} from "@material-ui/core";
/// <reference path="./TextFit" />
/// <reference path="./remark-sectionize" />

declare module "@emotion/react" {
    export interface Theme extends LibTheme {}
}
