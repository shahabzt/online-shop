import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from "../store/product.action"
import { ProductPaint } from './product.paint';
import { Card, Image, Text, Badge, Button, Group, Grid, Flex,Spoiler } from '@mantine/core';
import { Loading } from './loader';



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


            {product.isLoading ? <Loading/> : product.error ? <h1>{product.error}</h1> :
                product.product.map((product) => {
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
                                    <Image
                                        src={product.image}
                                        width={200}
                                        height={200}
                                        fit="fill"
                                        alt="Production"
                                    
                                         />


                                    <Group position="apart" mt="md" mb="xs">

                                    </Group>
                                        <Text weight={500} truncate>{product.title}</Text>
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
                                </Card.Section>
                                    <Button variant="light" color="blue" fullWidth mt="md" mb="xs" radius="md">
                                        Add
                                    </Button>
                            </Card>
                            </Flex>
                        </Grid.Col>
                    );
                })}
        </Grid></>
    )

}