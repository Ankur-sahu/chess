import React from 'react'
import { selectPiece, unselectPiece } from '../Redux/Actions';
import bgColor from '../PieceAction/BgColor';
import ACTIONS from "../Actions";

function ChessBlock({ checkTurn, setBlockSelected, dispatch, blockSelected, data, index, socketRef, roomId,blocks }) {


  const sendMsg= (blockSelected,index,type)=>{
    
    socketRef.current.emit(ACTIONS.CODE_CHANGE,{
        roomId,
        blockSelected,
        index,
        type
    })
    console.log("send")
}





  const pieceSelected = (index) => {
    console.log("Clicking", blockSelected)
    if (checkTurn(data.piece.player)) {
      console.log("pieceexist activestatus", data)
      //make selection
      if (Object.hasOwn(data.piece, "pieceId") && !blockSelected) {

        dispatch(selectPiece(index))
        if(blockSelected ===0){
          dispatch(unselectPiece(blockSelected))
        }
        setBlockSelected(index);
        console.warn("first from chessBlock")
        return

      }
      //remove selection and selct another
      if (Object.hasOwn(data.piece, "pieceId") && blockSelected && !data.opponentPiece) {

        dispatch(unselectPiece(blockSelected))
        dispatch(selectPiece(index))
        console.warn("remove selection and selecting another")
        setBlockSelected(index);
        return
      }
      //make move if piece not exist
      if (!Object.hasOwn(data.piece, "pieceId") && blockSelected && data.routes) {
        
        sendMsg(blockSelected,index,1)
        
        console.warn("Making move")
        setBlockSelected(null);
        return
      }
      
      //remove selection
      if (!Object.hasOwn(data.piece, "pieceId")  && !data.routes) {
        console.log("test..............")
        if(blockSelected ===0 || blockSelected){

          dispatch(unselectPiece(blockSelected))
          setBlockSelected(null);
          console.warn("remove selection")
        }
        return
      }
    }
    //kill move
    if (Object.hasOwn(data.piece, "pieceId") && blockSelected && data.routes && data.piece.player !==blocks[blockSelected].piece.player) {
      sendMsg(blockSelected,index,2)
      console.warn("Making Kill move")
      setBlockSelected(null);
      return
    }


  }
  return (
    <>

      <div onClick={() => pieceSelected(index)} id="container" className={bgColor(data)}>
        {data.check && alert("Check")}
        {data.piece.img && <img alt="pieceImg" src={data.piece.img} />}
        <span className='spandiv'>{data.id}</span>
      </div>

    </>
  )
}

export default ChessBlock