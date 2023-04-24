import React from 'react'
import { selectPiece, unselectPiece } from '../Redux/Actions'
import bgColor from '../PieceAction/BgColor'
import ACTIONS from "../Actions"
function ChessBlock({ checkTurn, setBlockSelected, dispatch, blockSelected, data, index, socketRef, roomId, blocks }) {
  const sendMsg = (blockSelected, index, type) => {
    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
      roomId,
      blockSelected,
      index,
      type
    })
  }
  const pieceSelected = (index) => {
    if (checkTurn(data.piece.player)) {
      //make selection
      if (Object.hasOwn(data.piece, "pieceId") && !(blockSelected === 0 || blockSelected)) {
        dispatch(selectPiece(index))
        if (blockSelected === 0) {
          dispatch(unselectPiece(blockSelected))
        }
        setBlockSelected(index);
        return
      }
      //remove selection and selct another
      if (Object.hasOwn(data.piece, "pieceId") && (blockSelected === 0 || blockSelected) && !data.opponentPiece) {
        dispatch(unselectPiece(blockSelected))
        dispatch(selectPiece(index))
        setBlockSelected(index);
        return
      }
      //make move if piece not exist
      if (!Object.hasOwn(data.piece, "pieceId") && (blockSelected === 0 || blockSelected) && data.routes) {
        sendMsg(blockSelected, index, 1)
        setBlockSelected(null);
        return
      }
      //remove selection
      if (!Object.hasOwn(data.piece, "pieceId") && !data.routes) {
        if (blockSelected === 0 || blockSelected) {
          dispatch(unselectPiece(blockSelected))
          setBlockSelected(null)
        }
        return
      }
    }
    //kill move
    if (Object.hasOwn(data.piece, "pieceId") && (blockSelected === 0 || blockSelected) && data.routes && data.piece.player !== blocks[blockSelected].piece.player) {
      sendMsg(blockSelected, index, 2)
      setBlockSelected(null)
      return
    }
  }
  return (
    <>
      <div onClick={() => pieceSelected(index)} id="container" className={bgColor(data)}>
        {data.piece.img && <img alt="pieceImg" src={data.piece.img} />}
        <span className='spandiv'>{data.id}</span>
      </div>
    </>
  )
}
export default ChessBlock 