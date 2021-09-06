import SideBar from "./components/SideBar"
import styled from "styled-components";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi()


function App() {
  const [token, setToken] = useState(null);
  const[{ user }, dispatch] = useDataLayerValue();

useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const _token = hash.access_token;

  if(_token) {

    dispatch({
      type: "SET_TOKEN",
      token: _token,
    })
    setToken(_token)

    spotify.setAccessToken(_token)

    spotify.getMe().then(user => {
      console.log(user)


      dispatch({
        type: "SET_USER",
        user: user
      })
    })

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      })
    })

    spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then(response => 
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
      )
  }

}, [])

  return  <div>      
            {token ? <Player spotify={spotify }/> : <Login/>}      
          </div>
  
}
export default App;
