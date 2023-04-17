import { Divider } from "@mantine/core";
import { MenuBar } from "../menu";
import { Left } from "./Carousel";
import { Demo } from "./Login";
import { Grid } from "@mantine/core";

export function Login(){
    return (
        <>
         <MenuBar />
            <Divider m="lg"></Divider>
        <Grid h={"100vh"} style={{width:"100%"}}>
            <Grid.Col md={5} sm={12}  style={{ backgroundColor: "#ffffff" }}>
                    <Left  />
            </Grid.Col>
            <Grid.Col md={7} sm={12}  >
                    <Demo />
            </Grid.Col>
        </Grid>
        
        
        </>
    )
}