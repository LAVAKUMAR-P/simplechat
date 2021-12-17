import React, { useEffect } from 'react'
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Room";
import NavbarB from "./NavbarB";
import {useNavigate} from "react-router-dom"
import Bbar from './Bbar';
import env from "./settings";



const socket = io.connect(`${env.api}`);
function Mainchat() {
  const Navigate=useNavigate()
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
   useEffect(() => {
    let name=window.localStorage.getItem("name")
    setUsername(name)
   }, [])
    const joinRoom = () => {
      
      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }else{
        window.alert("kindly Login");
        Navigate("/")
      }
    };
    return (
        <> 
        <NavbarB/>
        <div className="App">
         
          {!showChat ? (
            <div className="joinChatContainer">
              <div>HI,{window.localStorage.getItem("name")} ENTER ROOM KEY</div>
              <input
                type="text"
                placeholder="Room ID..."
                className='L-input'
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
              <button onClick={joinRoom}className='L-buttons'>JOIN A ROOM</button>
            </div>
          ) : (
            <Chat socket={socket} username={username} room={room} />
          )}
        </div>
        <Bbar/>
        </>
    )
}

export default Mainchat
