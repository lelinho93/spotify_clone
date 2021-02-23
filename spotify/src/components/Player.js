import React from "react"
import Body from "./Body";
import Footer from "./Footer";
import SideBar from "./SideBar";
import styled from "styled-components";

const BodyContainer = styled.div`
display: flex;
`

function Player({ spotify }) {
    return( 
    <div>
        <BodyContainer>        
            <SideBar/>
            <Body/>
        </BodyContainer>
        <Footer/>        
    </div>
    )
}
export default Player;