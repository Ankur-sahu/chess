
const opponentPiece =(index,actionInitial,type,check,kingIndex)=>{
    if(check && (actionInitial[index].piece.pieceId ===61 || actionInitial[index].piece.pieceId ===5)){
        kingIndex.index = index
        actionInitial[index].check = check
        console.log("check")
        return
    }
      actionInitial[index].routes = type;
      actionInitial[index].opponentPiece = type;
      
}
export default opponentPiece