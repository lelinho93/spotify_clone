import React, { useState } from "react";
import styled from "styled-components";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import LoopIcon from '@material-ui/icons/Loop';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
bottom: 0;
height: 10vh;
width: 100%;
background-color: rgb(24,24,24);
`
const LeftFooter = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 1vw;
width: 15vw;
color: white;
`
const MiddleFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
cursor: pointer;
color: white;
width: 20vw;
&:hover .buttonIcon {
transition: transform 0.2s ease-in-out;
transform: scale(1.2) !important;
}
`
const RightFooter = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
margin: 1vw;
color: white;
width: 15vw;
`
const FooterAlbum = styled.div`
display: flex;
flex-direction: column;
padding: 1vw;
color: white;
`

function Footer() {
    const [playing, setPlaying] = useState(false)

    const handlePlaying = () => {
        if(playing === false) {
            setPlaying(true)
        } 
        if(playing === true) {
            setPlaying(false)
        }
    }
    console.log(playing);
    return <Container>
        <LeftFooter>            
            <img src="https://picsum.photos/50/50"></img>
            <FooterAlbum>
                <a>Back in Black</a>
                <a>AC DC</a>
            </FooterAlbum>
            <FavoriteBorderIcon />
        </LeftFooter>
        <MiddleFooter>
            <ShuffleIcon className='buttonIcon'/>
            <SkipPreviousIcon className='buttonIcon'/>
             <div onClick={handlePlaying}>
                 {playing ? <PlayCircleFilledIcon style={{ fontSize: 45 }} className='buttonIcon'/> : <PauseCircleFilledIcon style={{ fontSize: 45 }} className='buttonIcon'/>} 
             </div> 
            <SkipNextIcon className='buttonIcon'/>
            <LoopIcon className='buttonIcon'/>
        </MiddleFooter>            
        <RightFooter>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider />
                </Grid>                
            </Grid>
        </RightFooter>
    </Container>
}
export default Footer;