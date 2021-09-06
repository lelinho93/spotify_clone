import React from "react";
import styled from "styled-components";
import spotifyLogo from "../assets/spotifyLogo.png"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from "./SideBarOptions";
import AddBoxIcon from '@material-ui/icons/AddBox';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDataLayerValue } from "../DataLayer";

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: left;
background-color: #040404;
width: 200px;
height: 90vh;
color: grey;
padding-left: 15px;
`

const Logo = styled.img`
width: 150px;
padding: 10px;
`
const Text = styled.strong`
padding: 20px 20px 10px 20px;
color: white;
font-size: 12px
`


function SideBar() {
    const [{ playlists }, dispatch] = useDataLayerValue()
    console.log(playlists)

    return <div >
        <Container>
            <Logo src={spotifyLogo}/>            
            <SidebarOption Icon={HomeIcon} title="Home" /> 
            <SidebarOption Icon={SearchIcon} title="Buscar" />  
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <Text>PLAYLISTS</Text>         

            <SidebarOption Icon={AddBoxIcon} title="Criar playlist" /> 
            <SidebarOption Icon={ThumbUpAltIcon} title="Músicas Curtidas" />
            {playlists?.items?.map(playlist => <SidebarOption title={playlist.name}/>)}         
        </Container>
    </div>
}
export default SideBar;