
const opponentPiece =(index,actionInitial,type,check)=>{
    if(check && (actionInitial[index].piece.pieceId ===61 || actionInitial[index].piece.pieceId ===5)){
        actionInitial[index].check = check
        return
    }
      actionInitial[index].routes = type;
      actionInitial[index].opponentPiece = type;
      
}
export default opponentPiece