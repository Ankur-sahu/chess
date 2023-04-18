import React, { useEffect, useRef, useState } from "react";
import ACTIONS from "../Actions";


const Chat = ({socketRef, roomId})=>{
    const chatRef = useRef(null)
    const [inputMsg, setInputMsg] = useState("")

    const sendMsg= ()=>{
        if(!inputMsg){
            return
        }
        socketRef.current.emit(ACTIONS.CODE_CHANGE,{
            roomId,
            inputMsg,
        })
        console.log("send")
    }
    useEffect(()=>{
        // console.log("getting from server")
        //listening from server
        socketRef.current?.on(ACTIONS.CODE_CHANGE,({inputMsg})=>{
            console.log(inputMsg,"getting from server")
            chatRef.current.value +=inputMsg +" "
        })

        return () =>{
            socketRef.current?.off(ACTIONS.CODE_CHANGE)
        }
    },[socketRef.current])


    
    return(
        <>
            <h4>Chat box</h4>
            <textarea ref={chatRef} name="" id="" cols="30" rows="10"></textarea> <br />
            <input type="text" value={inputMsg} onChange={(e)=>setInputMsg(e.target.value)} />
            <button onClick={sendMsg}>Send</button>
        </>
    )
}
export default Chat