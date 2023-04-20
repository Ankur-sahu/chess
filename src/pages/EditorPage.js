import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom'
import ACTIONS from '../Actions'
import { initSocket } from '../socket'
import { useDispatch, useSelector } from 'react-redux'
import { startGame, sync } from '../Redux/Actions'
import ChessBlock from '../components/ChessBlock'
import createBoard from '../general_fn/CreateBoard'
import { move } from '../Redux/Actions'


function EditorPage() {
    //initializing socket connection
    const getFromNavigate = useLocation()
    const socketRef = useRef(null)//it ll not re render component
    const reactNavigator = useNavigate()
    const { roomId } = useParams()

    const [blockSelected, setBlockSelected] = useState(null);
    const [otherSocketP, setOtherSocketP] = useState(null)
    const blocks = useSelector((state) => state.chess.actionInitial);
    const turn = useSelector((state) => state.chess.turn);
    const killedP = useSelector((state) => state.chess.killed);
    const game = useSelector((state) => state.chess.game);
    const lastStep = useSelector((state) => state.chess.lastStep);


    const dispatch = useDispatch()
    const player = localStorage.getItem("player")

    function chesStart(player) {
        console.warn("lets start the game", player)
        const tempArr = createBoard()
        if (blocks.length === 0) {
            dispatch(startGame(tempArr))
            // if(Number(player) ===2){
            //     dispatch(makeTurn(false))
            // }
        }

    }
    useEffect(() => {
        if (game) {
            if (Number(player) === game) {
                alert("You Won!")
            } else {
                alert("You Lost")
            }
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
                console.log('socket error', e)
                reactNavigator('/')
            }
            console.log(getFromNavigate.state.userName, "from editor")
            //sending join req to socket server    
            socketRef.current.emit(ACTIONS.JOIN, {// join request that must be recieved by server
                roomId,
                username: getFromNavigate.state?.userName,//? new sentex in js it ll check if exist

            })
            //check if room has already two players
            socketRef.current.on(ACTIONS.NOSPACE, ({ space, length }) => {
                if (!space) {
                    alert(`Can't join game ${length}`)
                    reactNavigator('/')
                }
            })
            //listening code sync

            //listening from socket server on joined user
            socketRef.current.on(ACTIONS.JOINED, ({ clients, username, socketId }) => {

                console.log("JOINED", clients)
                if (username !== getFromNavigate.state.userName) {
                    setOtherSocketP(socketId)
                    alert(`new user joined ${username}`)
                }
                setClient(clients)
            })
            //listening for disconnection of user
            socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
                setClient((prev) => {//prev from react default fn to get previous state snapshot
                    return prev.filter(client => client.socketId !== socketId)
                })
                alert(`${username} left chat`)

            })


        }
        init()
        chesStart(player);
        console.log(player, " s turn", turn)
        return () => {//cleaning all connection when we leave page so that we can prevent memory leak
            if (socketRef.current?.disconnect()) {
                socketRef.current.disconnect()
                socketRef.current.off(ACTIONS.JOINED)//unsubscribing to socket
                socketRef.current.off(ACTIONS.DISCONNECTED)//unsubscribing to socket
                socketRef.current.off(ACTIONS.NOSPACE)//unsubscribing to socket


            }

        }
    }, [])

    useEffect(() => {
        console.log("last step", lastStep.prev,otherSocketP)
        if (lastStep.prev) {
            console.log("sending something", blocks, turn, killedP)
            socketRef.current?.emit(ACTIONS.SYNC_CODE, {// join request that must be recieved by server
                blocks,
                turn,
                killedP,
                game,
                lastStep,
                socketId:otherSocketP
            })
        }
        return ()=>{
            socketRef.current.off(ACTIONS.SYNC_CODE)//unsubscribing to socket

        }
    }, [otherSocketP])
    useEffect(() => {
        // console.log("getting from server")
        //listening from server
        socketRef.current?.on(ACTIONS.CODE_CHANGE, ({ blockSelected,
            index,
            type }) => {
            dispatch(move({ blockSelected, index, type }))
            console.log(blockSelected, "code change msg reieved", type)
        })

        return () => {
            socketRef.current?.off(ACTIONS.CODE_CHANGE)
            socketRef.current?.off(ACTIONS.SYNC_CODE)

        }
    }, [socketRef.current])

    useEffect(()=>{
        socketRef.current?.on(ACTIONS.SYNC_CODE, ({ blocks, turn, game, killedP, lastStep }) => {
            dispatch(sync({ blocks, turn, game, killedP, lastStep }))
            console.log("code sync msg reieved")
        })

        return () => {
            socketRef.current?.off(ACTIONS.SYNC_CODE)

        }
    },[socketRef.current])

    console.log(player, " s turn", turn)
    const [client, setClient] = useState([
        { socketId: 1, username: "ankur" },
        { socketId: 2, username: "ankur's friend" }
    ])
    const copyRoomId = async () => {
        try {
            await navigator.clipboard.writeText(roomId)
            console.log('room id copied')
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
        console.log("check turn")
        if (Number(player) === playerPiece) {
            console.log(player, turn, "in check turn")
            if (Number(player) === 1 && turn) {
                //console.log(player,turn,"in check turn player 1")
                return true
            }
            if (Number(player) === 2 && !turn) {
                //console.log(player,turn,"in check turn player 2")
                return true
            }
        }
        if (turn && playerPiece === 4) {
            console.log("4")
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
                    <button onClick={copyRoomId}>Copy Room ID</button>
                    <button onClick={leaveRoom}>Leave</button>
                </div>
                {localStorage.getItem("player")}
                <br />
                <span>
                    {roomId}
                </span>
            </div>
        </div>
    );
}

export default EditorPage;