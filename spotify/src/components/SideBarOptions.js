import React from "react";
import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;
transition: 200ms color ease-in;
&:hover{color: white}
height: 40px;
`
const Title = styled.h4`
padding-left: 10px;
font-size: 14px;
`

function SidebarOption({title, Icon}) {
    return <Container>
    {Icon && <Icon/>}
    {Icon ? <Title>{title}</Title> : <p>{title}</p>}
    </Container>
}
export default SidebarOption;