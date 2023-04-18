import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState()
    let first = false


    const createNewRoom =(e)=>{
        e.preventDefault()
        const roomId = Math.floor(Math.random()*10000)
        setRoomId(roomId)
        first = true
        console.log(roomId)
        navigate(`/editor/${roomId}`,{
            state:{
                userName:1,
                roomId,
                first
            }
        })
        localStorage.setItem("player",1)
    }
    const joinRoom =(e)=>{
        e.preventDefault()
        if(!roomId ){
            alert("Game Id required")
            return
        }
        navigate(`/editor/${roomId}`,{
            state:{
                userName:2,
                roomId,
                first
            }
        })
        localStorage.setItem("player",2)
    }
  return (
    <div className='starting-page'>
        <form action="" method="post">
        <input type="number" placeholder='Game Id'
        onChange={(e) => setRoomId(e.target.value)} 
        value={roomId} 
        />
        
        
        <button type="submit" onClick={joinRoom}>Join Game</button>
        <span>Or</span>
        <button onClick={createNewRoom}>New Game</button>
    </form>
    </div>
  );
}

export default Home;
