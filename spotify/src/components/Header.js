import React from 'react'
import Search from '@material-ui/icons/Search'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../DataLayer'

const Container = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`

const HeaderLeft = styled.div`
flex: 0.5;
background-color: white;
color: gray;
border-radius: 30px;
display: flex;
align-items: center;
padding: 10px;
min-width: 70px;
`
const HeaderRight = styled.div`
display: flex;
align-items: center;
`
const Input = styled.input`
border: none;
width: 100%;
height: 100%;
`
const H4 = styled.h4`
margin-left: 10px;
color: white;
`

function Header() {
    const [{user}, dispatch] = useDataLayerValue()

    return(
        <div>
            <Container>
            <HeaderLeft>
                <Search/>
                <Input placeholder="Search for artists, songs or albuns"></Input>
            </HeaderLeft>
            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt="RQ"/>
                <H4>{user?.display_name}</H4>
            </HeaderRight>
            </Container>
        </div>
    )
}
export default Header