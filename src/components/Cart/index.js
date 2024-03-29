//mantine styles

import { Button, Divider, Grid, Stack, Card, Text, Image, Badge, Anchor, Notification, Alert } from "@mantine/core"
import { showNotification } from "@mantine/notifications";
//components

import { MenuBar } from "../menu"
//store

import { useSelector, useDispatch } from "react-redux"
import { decreaseCount,  deleteProduct,  } from "../../store/Cart/Cart.action";
//utilities
import { sum } from "../../utils/sum.utilities";
import { useHover } from "@mantine/hooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Cart() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.counter.result)
    const prices = product.map((pro) => {
        return pro.price

    })
    const sumPrices = sum(prices)
    function handleOnDelete(pro) {
        dispatch(deleteProduct(pro))
        showNotification({
            title: 'َDelete Product',
            message: 'The desired product has been deleted to the shopping cart',
            autoClose:3000,
            color: "red"
          })
    }
    const { hovered, ref } = useHover()

    
    return (
        <>
            <MenuBar />
            <Divider m="lg"></Divider>
            {hovered? <Alert>Clicked to see standard photo size</Alert> : ""}
            <Grid justify="center" align="center" grow gutter="sm">

                <Grid.Col  span={2} >
                    <Text align="center"> Number on Your Cart : {product.length}  </Text>
                    <Button fullWidth color="teal" radius="lg" size="md">Payment : $ {sumPrices} </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                    {product.length ?

                        <Stack  spacing="lg" style={{ marginRight: "30px" }} sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                            {product.map((pro) => {
                                return (
                                    <>



                                        <Grid.Col  span={1} style={{ marginRight: "20px" }} >
                                            <Card shadow="sm" padding="lg" radius="md" withBorder  >
                                                <Card.Section ref={ref}>
                                                    
                                                    <Anchor  href={pro.image} target="_blank">
                                                        
                                                        <Image src={pro.image}
                                                            width={75}
                                                            height={75}
                                                            fit="fill"
                                                            alt="Production"

                                                        />
                                                    </Anchor>
                                                </Card.Section>
                                                <Text weight={700}> {pro.title} </Text>

                                                    <Badge color={pro.rating.count > 100 ? "green" : "red"} variant="light">Number Ramining:{pro.rating.count - 1} </Badge>
                                                <Badge color="pink" variant="light">
                                                    price:   $  {pro.price}
                                                </Badge>

                                            </Card>
                                            <Button fullWidth variant="black" color="red" mt="md" mb="xs" radius="md" onClick={() => handleOnDelete(pro)}>Delete This Product</Button>

                                        </Grid.Col>


                                    

                                    

                                </>
                            )
                        })}


                </Stack>
                : <><Notification disallowClose color="red" title="Your Shopping Cart Is Empty!!">
                            Back to <Link style={{ textDecoration: "none" }} to={"/"}> Home Page</Link>  and Select a Product.
                        </Notification></>
                }
                </Grid.Col>
            </Grid>
        </>
    )
}