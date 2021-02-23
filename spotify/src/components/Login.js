import React from "react";
import spotifyLogo from "../assets/spotifyLogo.png"
import styled from "styled-components";
import { loginUrl } from "../spotify";

const Container = styled.div`
display: grid;
place-items: center;
background-color: black;
height: 100vh;
width: 100vw;
`
const Logo = styled.img`
width: 20vw;
`
const Button = styled.a`
padding: 20px;
border-radius: 99px;
background-color: #1db954;
font-weight: 800;
color: white;
text-decoration: none;
`

function Login() {
    return <Container>
        <Logo src={spotifyLogo}/>
        <Button href={loginUrl}>LOGIN WITH SPOTIFY</Button>
    </Container>
}
export default Login;