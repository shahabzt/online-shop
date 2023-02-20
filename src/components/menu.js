import { Group, Text , Divider, Input} from "@mantine/core"

import {IconSearch , IconHome2 , IconShoppingBag , IconPhoneCalling , IconQuestionCircle , IconQuestionMark
,IconMail
} from "@tabler/icons-react"
export function MenuBar() {
    return (
      <>
      <Group mb={50} position="center">
        <Text > {<IconHome2/>} Home</Text>
        <Divider size="lg" orientation="vertical" />
        <Text> {<IconShoppingBag/>} Store</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>{<IconMail size={30}/>} Email</Text>
        <Divider size="lg" orientation="vertical" />
        <Text> {<IconPhoneCalling/>}Contact Us</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>{<IconQuestionMark/>} Guid</Text>
        <Divider size="lg" orientation="vertical" />
        <Text> {<IconQuestionCircle/>}Question</Text>
      <Input type="text" placeholder="Search..." radius="lg" icon= {<IconSearch/>}  />
      </Group>
      </>
    )
}