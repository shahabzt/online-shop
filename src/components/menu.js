import { Group, Text , Divider, Input} from "@mantine/core"

export function MenuBar() {
    return (
      <>
      <Group mb={50} position="center">
        <Text>Home</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>Store</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>About Me</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>Contact Us</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>Guid</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>Question</Text>
      <Input placeholder="search"/>
      </Group>
      </>
    )
}