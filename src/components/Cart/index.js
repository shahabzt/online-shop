//mantine styles

import { Button, Divider, Stack } from "@mantine/core"

//components

import { MenuBar } from "../menu"
//store

import { useSelector, useDispatch } from "react-redux"
import { decreaseCount } from "../../store/Cart/Cart.action";

export function Cart() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.counter)

    function handleOnDelete() {
        dispatch(decreaseCount())
    }
    return (
        <>
            <MenuBar />
            <Divider m="lg"></Divider>
            <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                
                <Button variant="light" color="blue" fullWidth mt="md" mb="xs" radius="md" onClick={handleOnDelete}>Delete This Product</Button>

            </Stack>
        </>
    )
}