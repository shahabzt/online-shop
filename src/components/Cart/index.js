//mantine styles

import { Button, Divider, Stack } from "@mantine/core"

//components

import { MenuBar } from "../menu"
//store

import { useSelector, useDispatch } from "react-redux"
import { decreaseCount , increaseCount , addedProduct, deleteProduvt } from "../../store/Cart/Cart.action";

export function Cart() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.counter.result)

    console.log(product)

    function handleOnDelete(pro) {
        dispatch(decreaseCount())
        dispatch(deleteProduvt(pro))
    }
    return (
        <>
            <MenuBar />
            <Divider m="lg"></Divider>
            {product.length?
            
            <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                {product.map((pro)=>{
                    return (
                        <>
                        <div key={pro.id}>


                        <div >{pro.title}</div>
                        <Button variant="light" color="blue" fullWidth mt="md" mb="xs" radius="md" onClick={()=> handleOnDelete(pro)}>Delete This Product</Button>
                        </div>
                        
                        </>
                    )
                })}


            </Stack>
         : <div>kirrrrrrrr</div>} 
        </>
    )
}