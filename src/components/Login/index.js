import { Divider } from "@mantine/core";
import { MenuBar } from "../menu";
import { Left } from "./Carousel";
import { Demo } from "./Login";
import { Grid } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";

export function Login(){
    // const mediaQuery = useMediaQuery('(min-width: 17em)')
    return (
        <>
         <MenuBar />
            <Divider m="lg"></Divider>
        <Grid h={"100vh"} style={{width:"100%"}}>
            <Grid.Col
            sx={{
                '@media (max-width: 17em)': {order: 1}
            }}
            md={5} sm={12} orderMd={1} orderXs={2} style={{ backgroundColor: "#ffffff" }}>
                    <Left  />
            </Grid.Col>
            <Grid.Col
            sx={{
                '@media (max-width: 17em)': {order: 1}
            }}
            md={7} sm={12} orderMd={2} orderXs={1} >
                    <Demo />
            </Grid.Col>
        </Grid>
        
        
        </>
    )
}