import {Box, Container, Grid} from "@material-ui/core";
import {Hero} from "../components/home/Hero";
import {SellingPoint} from "../components/home/SellingPoint";

export default function Home() {
    return (
        <Grid container direction="column" justify="center">
            <Hero />

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
