import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from "../store/product.action"
import { ProductPaint } from './product.paint';
import { Card, Image, Text, Badge, Button, Group, Grid, Flex, Spoiler, Anchor, Divider } from '@mantine/core';
import { Loading } from './loader';
import { MenuBar } from './menu';
import { Link } from 'react-router-dom';
//counterStore
import { decreaseCount, increaseCount, addedProduct } from '../store/Cart/Cart.action';



export function ShowProductData() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    const counter = useSelector(state => state.counter.count)
    const ppp = useSelector(state => state.counter)
    // console.log(product)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    console.log(products)
    function handleOnAdd(product) {
        dispatch(increaseCount())
        dispatch(addedProduct(product))
        // console.log(e)
    }
    console.log(ppp)

    return (
        <>
            <MenuBar />
            <Divider m="md"></Divider>
            <Grid>


                {products.isLoading ? <Loading /> : products.error ? <h1>{products.error}</h1> :
                    products.product.map((product) => {
                        return (
                            // <ProductPaint  image= {product.image} description = {product.description} price = {product.price} title = {product.title} />                            
                            <Grid.Col span={4} key={product.id}>
                                <Flex

                                    justify="center"
                                    align="center"
                                    direction="row"
                                    wrap="wrap"
                                >
                                    <Card withBorder>
                                        <Card.Section style={{ weight: "500px", height: "450px" }}
                                        >
                                            <Badge color={product.rating.rate > 3.5 ? "green" : "red"} radius="md" variant="filled" >
                                                {product.rating.rate} / 5
                                            </Badge>
                                            <Anchor href={product.image}>
                                                <Image
                                                    src={product.image}
                                                    width={200}
                                                    height={200}
                                                    fit="fill"
                                                    alt="Production"
                                                />
                                            </Anchor>

                                            <Group position="apart" mt="md" mb="xs">

                                            </Group>
                                            <Text weight={500} truncate>{product.title}</Text>
                                            <Badge color="pink" variant="light">
                                                price:   $  {product.price}
                                            </Badge>
                                            <Link to={`/${product.title}`}>

                                                <Spoiler maxHeight={20} showLabel="Show More..." hideLabel="Hide"

                                                >
                                                    {product.description}
                                                </Spoiler>
                                            </Link>

                                            <Badge variant="gradient" radius="md" gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                                                stock: {product.rating.count}
                                            </Badge>
                                        </Card.Section>
                                        {/* <Anchor href={product.image}> */}
                                        <Button variant="light" color="blue" fullWidth mt="md" mb="xs" radius="md" onClick={() => handleOnAdd(product)}>
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