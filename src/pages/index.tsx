import {Box, Container, Grid, Button} from "@material-ui/core";
import {FC, useContext, useEffect, useState} from "react";
import TrackVisibility from "react-on-screen";
import {Feature} from "../components/features/Feature";
import {FeatureCategory} from "../components/features/FeatureCategory";
import {FeatureVideo} from "../components/features/FeatureVideo";
import {Hero} from "../components/home/Hero";
import {SellingPoint} from "../components/home/SellingPoint";
import {LMVideoContext} from "../components/videoService/LMVideoContext";
import {LMVideoProvider} from "../components/videoService/LMVideoProvider";
import {LMVideos} from "../components/videoService/LMVideos";
import {LMVideosProvider} from "../components/videoService/LMVideosProvider";

// Don't auto scroll to position, since it messes with the hash
try {
    history.scrollRestoration = "manual";
} catch (e) {}

export default function Home() {
    return (
        <Container>
            <LMVideosProvider>
                <Hero>
                    <FeatureVideo
                        initVideo="videoTest4.mp4"
                        background="videoTest2.jpg"
                    />
                </Hero>

                <Grid container direction="column" justify="center">
                    <Container
                        css={{
                            marginTop: 50,
                        }}>
                        <Grid container direction="row" justify="space-between">
                            <SellingPoint
                                title="Easy to use"
                                body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."
                            />
                            <SellingPoint
                                title="Customizable"
                                body="With the custom applet system, you can easily customize your LaunchMenu."
                            />
                            <SellingPoint
                                title="Easy to use"
                                body="It's opens with the press of a hotkey and the navigation is quick and simple with the keyboard."
                            />
                        </Grid>
                    </Container>
                </Grid>

                <FeatureCategory category="Some shit" video="videoTest2.mp4">
                    <Feature title="stuff" time={{start: 0, end: 3}}>
                        doShit
                    </Feature>
                    <Feature title="orange" time={{start: 4, end: 8}}>
                        doShitYes
                    </Feature>
                </FeatureCategory>

                <FeatureCategory category="Some stuff" video="videoTest3.mp4">
                    <Feature title="pop" time={{start: 0, end: 3}}>
                        orange
                    </Feature>
                    <Feature title="smth" time={{start: 4, end: 8}}>
                        craps
                    </Feature>
                </FeatureCategory>

                <div css={{height: 500}} />
            </LMVideosProvider>
        </Container>
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
