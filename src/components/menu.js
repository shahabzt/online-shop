// store
import { useSelector , useDispatch } from "react-redux"
import { decreaseCount , increaseCount } from "../store/Cart/Cart.action"

// Styles Mantine

import { Group, Text, Divider, Input, Badge } from "@mantine/core"


// Icons
import {
  IconSearch, IconHome2, IconShoppingBag, IconPhoneCalling, IconQuestionCircle, IconQuestionMark
  , IconMail
} from "@tabler/icons-react"

// React router Dom
import { Link } from "react-router-dom"


export function MenuBar() {

  const counter = useSelector(state => state.counter)
  return (
    <>
      <Group mb={50} position="center">
        <Link style={{textDecoration : "none" }} to="/Home">

          <Text style={{color: "black"}} > {<IconHome2 />} Home</Text>
        </Link>
        <Divider size="lg" orientation="vertical" />
        <Link style={{textDecoration : "none" }} to="/store" >
        <Text style={{color: "black"}}> <Badge color="red" radius="md" variant="filled" >
          {counter.count}
        </Badge> {<IconShoppingBag />} Store</Text>
        </Link>
        <Divider size="lg" orientation="vertical" />
        <Text>{<IconMail size={30} />} Email</Text>
        <Divider size="lg" orientation="vertical" />
        <Text> {<IconPhoneCalling />}Contact Us</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>{<IconQuestionMark />} Guid</Text>
        <Divider size="lg" orientation="vertical" />
        <Text> {<IconQuestionCircle />}Question</Text>
        <Input type="text" placeholder="Search..." radius="lg" icon={<IconSearch />} />
      </Group>
    </>
  )
}