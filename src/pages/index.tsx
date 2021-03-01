import {Box, Container, Grid, Button} from "@material-ui/core";
import {FC, useContext, useState} from "react";
import {Hero} from "../components/home/Hero";
import {SellingPoint} from "../components/home/SellingPoint";
import {LMVideoContext} from "../components/videoService/LMVideoContext";
import {LMVideoProvider} from "../components/videoService/LMVideoProvider";
import {LMVideos} from "../components/videoService/LMVideos";
import {LMVideosProvider} from "../components/videoService/LMVideosProvider";

export default function Home() {
    const [video2Enabled, setVideo2Enabled] = useState(false);
    return (
        <Grid container direction="column" justify="center">
            <Hero />
            <LMVideosProvider>
                <LMVideos width={300} />
                <LMVideos width={300} />

                <LMVideoProvider
                    src="videoTest2.mp4"
                    enabled={true}
                    autoPlay={false}>
                    <VideoControls />
                </LMVideoProvider>
                <LMVideoProvider
                    src="videoTest3.mp4"
                    enabled={video2Enabled}
                    autoPlay={false}>
                    <VideoControls />
                </LMVideoProvider>

                <Button
                    variant="contained"
                    onClick={() => setVideo2Enabled(e => !e)}>
                    Toggle video
                </Button>
            </LMVideosProvider>

            <Container
                css={{
                    marginTop: 50,
                }}>
                <Grid container direction="row" justify="space-between">
                    <SellingPoint
                        title="Easy to use"
                        body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."></SellingPoint>
                    <SellingPoint
                        title="Customizable"
                        body="With the custom applet system, you can easily customize your LaunchMenu."></SellingPoint>
                    <SellingPoint
                        title="Easy to use"
                        body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."></SellingPoint>
                </Grid>
            </Container>
        </Grid>
    );
}

const VideoControls: FC = () => {
    const {controls} = useContext(LMVideoContext);
    return (
        <div>
            <Button variant="contained" onClick={() => controls?.play()}>
                play
            </Button>
            <Button variant="contained" onClick={() => controls?.pause()}>
                pause
            </Button>
            <Button variant="contained" onClick={() => controls?.setTime(5)}>
                set time 5
            </Button>
        </div>
    );
};
