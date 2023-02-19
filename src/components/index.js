import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from "../store/product.action"
import { ProductPaint } from './product.paint';
import { Card, Image, Text, Badge, Button, Group, Grid, Flex,Spoiler } from '@mantine/core';


export function ShowProductData() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    console.log(product)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    return (
        <>
        <h1>   ZARA  </h1>
            <Grid>


            {product.isLoading ? <h1>Is Loading</h1> : product.error ? <h1>{product.error}</h1> :
                product.product.map((product) => {
                    return (
                        // <ProductPaint  image= {product.image} description = {product.description} price = {product.price} title = {product.title} />                            
                        <Grid.Col span={4} key={product.id}>

                            <Card withBorder>
                                <Card.Section style={{ weight: "500px", height: "500px" }}
                                >
                                        <Badge color={product.rating.rate > 3.5 ? "green" : "red"} radius="md" variant="filled" >
                                         {product.rating.rate} / 5
                                    </Badge>
                                    <Image
                                        src={product.image}
                                        width={200}
                                        height={200}
                                        fit="fill"
                                        alt="Production" />


                                    <Group position="apart" mt="md" mb="xs">
                                        <Text weight={500} truncate>{product.title}</Text>

                                    </Group>
                                    <Badge color="pink" variant="light">
                                     price:   $  {product.price}
                                    </Badge>
                                    <Spoiler maxHeight={20} showLabel="Show More..." hideLabel="Hide"
                                    
                                    >
                                        {product.description}
                                    </Spoiler>
                                    
                                    <Badge variant="gradient" radius="md"  gradient={{ from: 'teal', to: 'blue', deg: 60 }} >
                                         stock: {product.rating.count}
                                    </Badge>
                                    <Button variant="light" color="blue" fullWidth mt="md" mb="xs" radius="md">
                                        Add
                                    </Button>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    );
                })}
        </Grid></>
    )

}