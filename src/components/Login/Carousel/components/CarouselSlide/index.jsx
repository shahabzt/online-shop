//mantineComponents

import { Carousel } from "@mantine/carousel"

import { Text, Title, Image, } from "@mantine/core"

export function CarouselSlide(props) {
    return (

        <Carousel.Slide>

            <Image height={250} src={props.src}></Image>
            <Title m="lg" >Welcome Back!</Title>
            <Text m="lg" c="dimmed">
                Start managing your finance faster and better
                <br />
                Start managing your finance faster and better
            </Text>

        </Carousel.Slide>
    )
}