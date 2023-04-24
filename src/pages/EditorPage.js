import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom'
import ACTIONS from '../Actions'
import { initSocket } from '../socket'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { resetGame, sync } from '../Redux/Actions'
import ChessBlock from '../components/ChessBlock'
import { move } from '../Redux/Actions'

function EditorPage() {
    //initializing socket connection
    const getFromNavigate = useLocation()
    const socketRef = useRef(null)
    const reactNavigator = useNavigate()
    const { roomId } = useParams()
    const [blockSelected, setBlockSelected] = useState(null)
    const [otherSocketP, setOtherSocketP] = useState(null)
    const blocks = useSelector((state) => state.chess.actionInitial)
    const turn = useSelector((state) => state.chess.turn)
    const killedP = useSelector((state) => state.chess.killed)
    const game = useSelector((state) => state.chess.game)
    const lastStep = useSelector((state) => state.chess.lastStep)
    const dispatch = useDispatch()
    const player = localStorage.getItem("player")
    useEffect(() => {
        if (game) {
            if (Number(player) === game) {
                toast.success('You Won!', {
                    position: "top-center",
                    autoClose: 3000,
                });
            } else {
                toast.error('You Lost!', {
                    position: "top-center",
                    autoClose: 3000,

                });
            }
            localStorage.removeItem("player")
            dispatch(resetGame())
            reactNavigator("/")
        }
    }, [game])

    useEffect(() => {
        const init = async () => {
            console.log("1st useEffect")
            socketRef.current = await initSocket() // initalized connection
            socketRef.current.on('connection_error', (err) => handleErrors(err))
            socketRef.current.on('connection_failde', (err) => handleErrors(err))
            const handleErrors = (e) => {
                reactNavigator('/')
            }
            //sending join req to socket server    
            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                username: getFromNavigate.state?.userName,
            })
            //check if room has already two players
            socketRef.current.on(ACTIONS.NOSPACE, ({ space, length }) => {
                if (!space) {
                    toast.error(`Can't join game ${length}`, {
                        position: "top-center",
                        autoClose: 3000,
                    });
                    reactNavigator('/')
                }
            })
            //listening from socket server on joined user
            socketRef.current.on(ACTIONS.JOINED, ({ clients, username, socketId }) => {
                if (username !== getFromNavigate.state.userName) {
                    setOtherSocketP(socketId)
                    toast.success(`new user joined ${username}`, {
                        position: "top-center",
                        autoClose: 3000,
                    });
                }
                setClient(clients)
            })
            //listening for disconnection of user
            socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
                setClient((prev) => {
                    return prev.filter(client => client.socketId !== socketId)
                })
                toast.info(`${username} left chat`, {
                    position: "top-center",
                    autoClose: 3000,
                });
            })
        }
        init()
        return () => {//cleaning all connection when we leave page so that we can prevent memory leak
            if (socketRef.current?.disconnect()) {
                socketRef.current.disconnect()
                socketRef.current.off(ACTIONS.JOINED)
                socketRef.current.off(ACTIONS.DISCONNECTED)
                socketRef.current.off(ACTIONS.NOSPACE)
            }
        }
    }, [])

    useEffect(() => {
        console.log("last step", lastStep.prev, otherSocketP)
        if (lastStep.prev) {
            console.log("sending something", blocks, turn, killedP)
            socketRef.current?.emit(ACTIONS.SYNC_CODE, {
                blocks,
                turn,
                killedP,
                game,
                lastStep,
                socketId: otherSocketP
            })
        }
        return () => {
            socketRef.current.off(ACTIONS.SYNC_CODE)

        }
    }, [otherSocketP])
    useEffect(() => {
        socketRef.current?.on(ACTIONS.CODE_CHANGE, ({ blockSelected,
            index,
            type }) => {
            dispatch(move({ blockSelected, index, type }))
        })
        return () => {
            socketRef.current?.off(ACTIONS.CODE_CHANGE)
            socketRef.current?.off(ACTIONS.SYNC_CODE)
        }
    }, [socketRef.current])

    useEffect(() => {
        socketRef.current?.on(ACTIONS.SYNC_CODE, ({ blocks, turn, game, killedP, lastStep }) => {
            dispatch(sync({ blocks, turn, game, killedP, lastStep }))
        })

        return () => {
            socketRef.current?.off(ACTIONS.SYNC_CODE)
        }
    }, [socketRef.current])
    const [client, setClient] = useState([
        { socketId: 1, username: "ankur" },
        { socketId: 2, username: "ankur's friend" }
    ])
    console.log(client)
    const copyRoomId = async () => {
        try {
            await navigator.clipboard.writeText(roomId)
        } catch (error) {
            console.log('room id copy failed')
        }
    }
    const leaveRoom = () => {
        reactNavigator('/')
    }
    if (!getFromNavigate.state) {
        return <Navigate to='/' />
    }
    const checkTurn = (playerPiece = 4) => {
        if (Number(player) === playerPiece) {
            if (Number(player) === 1 && turn) {
                return true
            }
            if (Number(player) === 2 && !turn) {
                return true
            }
        }
        if (turn && playerPiece === 4) {
            return true
        }
        if (!turn && playerPiece === 4) {
            return true
        }
        return false
    }
    return (
        <div className='main-container'>
            <div className='player-Info'>
                {killedP.map((piece, index) => (
                    <img alt="pieceImg" src={piece.img} key={index} />
                ))}
            </div>
            <div className={Number(player) === 2 ? "App" : "rotate-App"}>
                {blocks.map((data, index) => <ChessBlock blocks={blocks} checkTurn={checkTurn} socketRef={socketRef} roomId={roomId} key={index} dispatch={dispatch} setBlockSelected={setBlockSelected}
                    blockSelected={blockSelected} data={data} index={index} />)}
            </div>
            <div className='killed-piece-container' >
                <div>
                    Share this id to your friend<span> {roomId}</span>
                    <button onClick={copyRoomId}>Copy Room ID</button>
                    <button onClick={leaveRoom}>Leave</button>
                </div>
                <span>
                    {turn ? `Player : 1's trun` : `Player : 2's trun`}
                </span>
            </div>
        </div>
    );
}

export default EditorPage;