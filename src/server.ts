import {createServer} from "http";
import next from "next";
import express from "express";
import Path from "path";
import {setupRemoteFilesSymlink} from "./services/remoteFiles/setupRemoteFilesSymlink";

const dev = process.env.NODE_ENV !== "production";
const expressApp = express();
const app = next({dev});
const handle = app.getRequestHandler();

expressApp.use(
    express.static(Path.join(process.cwd(), "tempRemoteDocs", "resources"))
);
expressApp.use(
    "/examples",
    express.static(Path.join(process.cwd(), "tempRemoteExamples"))
);
expressApp.all("*", (req, res) => {
    return handle(req, res);
});

(async () => {
    await setupRemoteFilesSymlink();
    await app.prepare();

    createServer(expressApp).listen(3000, () => {
        console.log("> Ready on http://localhost:3000");
    });
})();
