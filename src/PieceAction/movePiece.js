import CheckPiece from "./CheckPiece"

const movePiece = (moveArr,blockSelected,index) => {

    console.log("Move reducer", blockSelected,index)
    CheckPiece(blockSelected, moveArr, false)
    moveArr[blockSelected].active = false
    moveArr[blockSelected].previousStep = true
    moveArr[index].currentStep = true
    moveArr[index].piece = moveArr[blockSelected].piece
    moveArr[blockSelected].piece = {}
}
export default movePiece