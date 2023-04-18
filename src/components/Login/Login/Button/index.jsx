//mantineComponents
import { Group, Button  } from "@mantine/core"
//Icons
import { IconBrandFacebook , IconBrandGoogle } from "@tabler/icons-react"

export function GroupButton(){
   


    return (
        <Group style={{ margin: "10px" }}>
        <Button color={"cyan"}
            style={{ borderColor: "lightgray" }}
            px={35}
            leftIcon={<IconBrandFacebook size={20} />}
            variant="outline"
            type="submit"
        >Facebook</Button>
        <Button
            color={"cyan"}
            style={{ borderColor: "lightgray" }}
            px={35}
            leftIcon={<IconBrandGoogle size={20}  />}
            variant="outline"
            type="submit"
        >
            Google</Button>
    </Group>
    )
}