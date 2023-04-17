//components
import { Left } from "./Carousel";
import { Demo } from "./Login";
//mantineComponents
import { Grid } from "@mantine/core";

export function FinoticLogin() {
    return (


        <Grid h={"100vh"} style={{width:"100%"}}>
            <Grid.Col span={5} style={{ backgroundColor: "#ffffff" }}>
                    <Left  />
            </Grid.Col>
            <Grid.Col span={7} >
                    <Demo />
            </Grid.Col>
        </Grid>



    )
}