import { Grid,  } from '@mantine/core';
import { GridCard } from './grid.components';




export function ProductPaint(props) {
    return (
     
        
        <Grid>
            <Grid.Col span={4}>
                <GridCard image={props.image} description={props.description} title={props.title}
                    price={props.price}
                />
            </Grid.Col>
        </Grid>
    )
}