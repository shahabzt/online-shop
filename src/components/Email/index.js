import { Button, Divider, Grid, Group, Input, TextInput , Text} from "@mantine/core";
import { MenuBar } from "../menu";
import EmailImage from "./assets/best-website-to-find-email-addresses-1.png"
import { Icon123, IconLocation, IconMail, IconMap, IconPhoneCalling, IconPhoneIncoming, IconRecordMail, IconSend } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
export function ContactUs() {
    return (
        <>
            <MenuBar />
            <Divider m="lg"></Divider>
            <Grid justify="center" align="center">
                <Grid.Col span={6}>Critics and Suggestions:
                    <Group m={5} position="center" grow>
                        <TextInput radius={9} placeholder="Enter Your Full Name..." label="Your Name" />
                        <TextInput radius={9} placeholder="Enter Your Email..." label="Email" />
                    </Group>
                    <Group m={5} position="center" grow>
                        <TextInput radius={9} placeholder="Topic" label="Topic" />
                        <TextInput radius={9} placeholder="Enter Your Phone Number..." label="Phone Number" />
                    </Group>
                    <Group m={5} position="center" grow>
                        <Button leftIcon={<IconSend/>} mt={20}  radius={10} fullWidth color="teal">Send</Button>
                    </Group>

                </Grid.Col>


                <Grid.Col span={6}>
                        Contact US:
                    <Group m={20}>
                    <IconPhoneIncoming size={25} color="teal"/><Text> +989123456789 </Text>
                    </Group>

                    <Group m={20}>
                        <IconMail size={25} color="teal"/> <Text > Shahab.Banijamali94@gmail.com</Text>
                    </Group>

                    <Group m={20}>
                        <IconMapPin size={25} color="teal"/> <Text >Tehran, Sheikh Bahaei Street, Emdad Gharbi, MapsaHR</Text>
                    </Group>
                </Grid.Col>
            </Grid>
        </>
    )
}