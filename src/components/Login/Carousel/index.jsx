//mantine components
import { Carousel } from "@mantine/carousel"
import { Flex, Text, Grid, } from "@mantine/core"
//components
import { CarouselSlide } from "./components/CarouselSlide"
//Icons
import { IconBrandBinance } from "@tabler/icons-react"


export function Left() {

    const indicator = {
        backgroundColor: "#919191",
        width: 15,
        height: 6,
    }

    
    return (
        <>
            <Flex
                mih={50}
                bg="#f7f5f5"
                gap="md"
                justify="flex-start"
                direction="column"
                style={{ height: "100vh" }}
            >

                <Grid style={{ margin: "40px" }}>
                    <IconBrandBinance />
                    <Text>Online Shop</Text>
                </Grid>
                <Carousel
                    sx={{ width: "85%" }}
                    mx="auto"
                    styles={{
                        indicator,
                    }}
                    withIndicators
                    dragFree
                    slideGap="md"
                    align="end"
                    style={{ height: "100%" }}
                >
                    <CarouselSlide src={"https://s2.uupload.ir/files/build-your-pages_1ovb.png"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/download_r3lh.jpg"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/build-your-pages_j4xg.png"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/images_qzig.png"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/images_6f4g.jpg"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/images_(1)_7ips.jpg"} />
                    <CarouselSlide src={"https://s2.uupload.ir/files/download_(1)_5b0d.jpg"} />
                </Carousel>
            </Flex>
        </>
    )
}