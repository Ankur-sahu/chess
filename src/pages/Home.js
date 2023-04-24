import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import createBoard from '../general_fn/CreateBoard';
import { startGame } from '../Redux/Actions';
function Home() {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState()
    const dispatch = useDispatch()

    function chesStart() {
        const tempArr = createBoard()
        dispatch(startGame(tempArr))
    }

    const createNewRoom = (e) => {
        e.preventDefault()
        const roomId = Math.floor(Math.random() * 10000)
        setRoomId(roomId)
        chesStart()
        navigate(`/editor/${roomId}`, {
            state: {
                userName: 1,
                roomId
            }
        })
        localStorage.setItem("player", 1)
    }
    const joinRoom = (e) => {
        e.preventDefault()
        if (!roomId) {
            toast.error("Room ID required!", { autoClose: 3000 })
            return
        }
        chesStart()
        navigate(`/editor/${roomId}`, {
            state: {
                userName: 2,
                roomId
            }
        })
        localStorage.setItem("player", 2)
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
