//mantineComponents
import { Center, Divider, TextInput, Button, Title, Flex, Text, PasswordInput } from '@mantine/core';
//utils
import { AnchorElement } from '../../../utils';
//components
import { GroupButton } from "./Button"
//Icons
import { IconLock, IconMail, IconNoCopyright } from "@tabler/icons-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Demo() {
    const [userName, setUserName] = useState("");
    const [Password , setPassword] = useState("");
    function handleOnUserName(e){
        setUserName(e.target.value)
    }
    function handleOnPassword(e){
        setPassword(e.target.value)
    }
    console.log(userName)
    console.log(Password)
    function handleOnLogin(){
        localStorage.setItem("username:", userName)
        localStorage.setItem("password:", Password)
    }
    const inputStyles={
        backgroundColor:"white",
        color: "#00c0fa",
        borderRadius:"5px",
        width:"30px",
        heigth:"32px",
        margin:"5px"
    }

    return (
        <><Flex h={"100%"} direction={"column"} justify="space-between" >
            <Center my={"auto"} >
                <div style={{ width: "50%" }}>
                    <Title ta="left" >Welcome Back!</Title>
                    <Text ta="left" mb={"md"} c="dimmed">
                        Login 
                    </Text>
                    <div >
                        <TextInput
                        type='email'
                            style={{ backgroundColor: "#f2f2f2", borderRadius: "10px", marginTop: "10px" }}
                            variant="unstyled"
                            icon={<IconMail size={20} style={inputStyles} />}
                            placeholder="you@example.com" 
                            onChange={handleOnUserName}
                            />
                        <PasswordInput
                            style={{ backgroundColor: "#f2f2f2", borderRadius: "10px", marginTop: "10px" }}
                            radius="md"
                            variant="unstyled"
                            icon={<IconLock size={20} style={inputStyles} />}
                            placeholder="At least 8 characters"
                            onChange={handleOnPassword}
                            />
                    </div>
                    <Link to={"/home"} style={{textDecoration:"none"}}>
                    
                    <AnchorElement description={"Forgot Password?"} fw={"bold"} />
                    </Link>
                    <Button
                        style={{ width: "100%", marginBottom:"30px"}}
                        variant="gradient"
                        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                        onClick={handleOnLogin}
                    >
                        Login
                    </Button>
                    <Divider my="xs" label="Or" labelPosition="center" />
                    <GroupButton />
                    <Text mb={"md"} c="dimmed">
                        Don't you have an account? <Link style={{textDecoration:"none"}}>
                        <AnchorElement description={"Sign Up"} fw={"bold"} />
                        </Link> 
                    </Text>
                </div>
            </Center>
            <Text c="dimmed" fz="xs" ta="center">
                <IconNoCopyright size={10} /> 2023 ALL RIGHTS RESERVED
            </Text>
        </Flex>
        </>
    )
}