import React from "react"
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
flex-grow: 1;
background: linear-gradient(rgb(91,87, 115), rgba(0, 0, 0 , 1));
padding: 2vw;
`

function Body({ spotify }) {
    return <Container>
        <Header spotify={spotify}/>
    </Container>
}
export default Body;