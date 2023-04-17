import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from "../store/product.action"
import { ProductPaint } from './product.paint';
import { Card, Image, Text, Badge, Button, Group, Grid, Flex, Spoiler, Anchor, Divider } from '@mantine/core';
import { Loading } from './loader';
import { MenuBar } from './menu';
import { Link } from 'react-router-dom';
//counterStore
import { decreaseCount, increaseCount, addedProduct, paymentProduct } from '../store/Cart/Cart.action';



export function ShowProductData() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    const counter = useSelector(state => state.counter.count)
    
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    function handleOnAdd(product) {
        dispatch(increaseCount())
        dispatch(addedProduct(product))
        dispatch(paymentProduct(product.price))
    }

    return (
        <>
            <MenuBar />
            <Divider m="md"></Divider>
            <Grid >


                {products.isLoading ? <Loading /> : products.error ? <h1>{products.error}</h1> :
                    products.product.map((product) => {
                        return (
                            <Grid.Col md={4} sm={12} key={product.id}>
                                <Flex

                                    justify="center"
                                    align="center"
                                    direction="row"
                                    wrap="wrap"
                                >
                                    <Card withBorder>
                                        <Card.Section  style={{ weight: "500px", height: "350px" }}
                                        >
                                            <Badge color={product.rating.rate > 3.5 ? "green" : "red"} radius="md" variant="filled" >
                                                {product.rating.rate} / 5
                                            </Badge>
                                            <Anchor href={product.image}>
                                                <Image
                                                    src={product.image}
                                                    width={150}
                                                    height={150}
                                                    fit="fill"
                                                    alt="Production"
                                                    m={10}
                                                />
                                            </Anchor>

                                            <Group position="apart" mt="md" mb="xs">

                                            </Group>
                                            <Text m={5} weight={500} truncate>{product.title}</Text>
                                            <Badge m={5} color="pink" variant="light">
                                                price:   $  {product.price}
                                            </Badge>
                                            <Link  style={{textDecoration:"none" , margin:"5px"}} to={`/${product.title}`}>

                                                <Spoiler  maxHeight={25} showLabel="Show More..." hideLabel="Hide"

                                                >
                                                   <Text  color='dark'> {product.description} </Text> 
                                                </Spoiler>
                                            </Link>

                                            <Badge variant="gradient" radius="md" gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                                                stock: {product.rating.count}
                                            </Badge>
                                        </Card.Section>
                                        {/* <Anchor href={product.image}> */}
                                        <Button variant="dark" color="teal" fullWidth mt="md" mb="xs" radius="md" onClick={() => handleOnAdd(product)}>
                                            Add
                                        </Button>
                                        {/* </Anchor> */}
                                    </Card>
                                </Flex>
                            </Grid.Col>
                        );
                    })}
            </Grid>
            <Divider my="xs" label="shahab online shop" labelPosition="center" size={2} />
        </>
    )

}