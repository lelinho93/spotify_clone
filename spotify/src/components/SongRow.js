import React from 'react'
import styled from 'styled-components'

const SongRow = styled.div`
margin-left: 20px;
padding: 20px;
display: flex;
align-items: center;
z-index: 100;
color: white;
`
const Img = styled.img`
height: 50px;
width: 50px;
`
const SongRowInfo = styled.div`
margin-left: 20px;
`
const H1 = styled.h1`
font-size: 16px;
`
const P = styled.p`
font-size: 14px;
margin-top: 3px;
color: gray;
`

function SongRowComponent({ track = "test" }) {
    return (
        <SongRow>
            <Img src={track.album.images[0].url} alt="image" />
            <SongRowInfo>
                <H1>{track.name}</H1>
                <P>
                    {track.artists.map((artist) => artist.name).join(", ")}
                    {track.album.name}
                </P>
            </SongRowInfo>
        </SongRow>
    )
}
export default SongRowComponent