// store
import { useSelector, useDispatch } from "react-redux"
import { decreaseCount, increaseCount } from "../store/Cart/Cart.action"

// Styles Mantine

import { Group, Text, Divider, Input, Badge } from "@mantine/core"


// Icons
import {
  IconSearch, IconHome2, IconShoppingBag, IconPhoneCalling, IconQuestionCircle, IconQuestionMark
  , IconMail, IconLogin
} from "@tabler/icons-react"

// React router Dom
import { Link } from "react-router-dom"


export function MenuBar() {

  const counter = useSelector(state => state.counter)
  return (
    <>
      <Group mb={50} position="center">
        <Link style={{ textDecoration: "none" }} to="/Home">

          <Text style={{ color: "black" }} > {<IconHome2  size={25} color="teal" stroke={2}/>} Home</Text>
        </Link>
        <Divider size="md" orientation="vertical" />
        <Link style={{ textDecoration: "none" }} to="/store" >
          <Text style={{ color: "black" }}> <Badge color="red" radius="md" variant="filled" >
            {counter.count}
          </Badge> {<IconShoppingBag size={25} color="teal" stroke={2} />} Store</Text>
        </Link>
        <Divider  size="md" orientation="vertical" />
        <Text align="right" >{<IconLogin size={25} color="teal" stroke={2} />} Login </Text>
        <Divider size="md" orientation="vertical" />
        <Link style={{ textDecoration: "none" }} to="/contact-us" >
        
        <Text style={{color:"black"}} > {<IconPhoneCalling size={25} color="teal" stroke={2} />}Contact Us</Text>
        </Link>
        <Divider size="md" orientation="vertical" />
        <Text>{<IconQuestionMark size={25} color="teal" stroke={2} />} Guid</Text>
        <Divider size="md" orientation="vertical" />
        <Text> {<IconQuestionCircle size={25} color="teal" stroke={2} />}Question</Text>
        <Input type="text" placeholder="Search..." radius="lg" icon={<IconSearch />} />
      </Group>
    </>
  )
}