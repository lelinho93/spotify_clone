import React from "react"
import styled from "styled-components";

const Container = styled.div`
flex-grow: 1;
background: linear-gradient(rgb(91,87, 115), rgba(0, 0, 0 , 1));
padding: 2vw;
`

function Body() {
    return <Container>
        I am a Body
    </Container>
}
export default Body;