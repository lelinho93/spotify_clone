import React, { useState } from "react"
import styled from "styled-components";
import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Container = styled.div`
flex-grow: 1;
background: linear-gradient(rgb(91,87, 115), rgba(0, 0, 0 , 1));
padding: 2vw;
color: white;
height: 82vh;
width: 80vw;
overflow-y: overlay;
`
const BodyInfo = styled.div`
display: flex;
align-items: flex-end;
padding: 10px;
color: white;
`
const Img = styled.img`
height: 30vh;
margin: 0 20px;
box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`
const InfoText = styled.div`
flex: 1;
font-size: 3vh;
`
const H2 = styled.h2`
font-size: 4vh;
margin-bottom: 10px;
`
const P = styled.p`
font-size: 14px;
`
const BodySongs = styled.div`

`
const BodyIcons = styled.div`
display: flex;
width: 10vw;
justify-content: space-between;
margin: 1vw;
align-items: center;
`

function Body({ spotify }) {
    const [{discover_weekly}, dispatch] = useDataLayerValue()
    const [favorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        if(favorite === false) {
            setFavorite(true)
        } 
        if(favorite) {
            setFavorite(false)
        }
    }
    return <Container>
        <Header spotify={spotify}/>
        <BodyInfo>
            <Img 
                src={discover_weekly?.images[0].url} 
                alt={true} 
            />
            <InfoText>
                <strong>Playlists</strong>
                <H2>{discover_weekly?.description}</H2>
                <P>Info...</P>
            </InfoText>
        </BodyInfo>
        <BodySongs>
            <BodyIcons>
                <PlayCircleFilledIcon fontSize="large"/>
                <div onClick={handleFavorite}>
                {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon/>}
                </div>
                <MoreHorizIcon/>
            </BodyIcons>
            {/* {List of songs} */}
            {discover_weekly?.tracks.items.map(item => 
                 <SongRow track={item.track}/>
                )}
        </BodySongs>
    </Container>
}
export default Body;