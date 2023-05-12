import opponentPiece from "./opponentPiece"
import { leftArr, rightArr } from "./sides"

const Horse = (index, actionInitial, type, check,kingIndex) => {
    //checking for top left block
    let tempTopLeftIndex = index
    tempTopLeftIndex = tempTopLeftIndex - 17
    if (tempTopLeftIndex > 0) {
        if (!rightArr.includes(tempTopLeftIndex)) {
            if (!Object.hasOwn(actionInitial[tempTopLeftIndex].piece, "pieceId")) {
                actionInitial[tempTopLeftIndex].routes = type
            } else {
                if (actionInitial[tempTopLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempTopLeftIndex, actionInitial, type, check,kingIndex)
                }
            }
        }
    }

    // cheking top right block
    let tempTopRightIndex = index
    tempTopRightIndex = tempTopRightIndex - 15
    if (tempTopRightIndex > 0) {
        if (!leftArr.includes(tempTopRightIndex)) {
            if (!Object.hasOwn(actionInitial[tempTopRightIndex].piece, "pieceId")) {
                actionInitial[tempTopRightIndex].routes = type
            } else {
                if (actionInitial[tempTopRightIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempTopRightIndex, actionInitial, type, check,kingIndex)
                }
            }
        }
    }

    // cheking bottom left Block
    let tempBottomLeftIndex = index
    tempBottomLeftIndex = tempBottomLeftIndex + 15
    if (tempBottomLeftIndex < 63) {
        if (!rightArr.includes(tempBottomLeftIndex)) {
            if (!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece, "pieceId")) {
                actionInitial[tempBottomLeftIndex].routes = type
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempBottomLeftIndex, actionInitial, type, check,kingIndex)
                }
            }
        }
    }

    // cheking bottom right Block

    let tempBottomRightIndex = index
    tempBottomRightIndex = tempBottomRightIndex + 17
    if (tempBottomRightIndex < 63) {
        if (!leftArr.includes(tempBottomRightIndex)) {
            if (!Object.hasOwn(actionInitial[tempBottomRightIndex].piece, "pieceId")) {
                actionInitial[tempBottomRightIndex].routes = type
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempBottomRightIndex, actionInitial, type, check,kingIndex)
                }
            }
        }
    }

    // cheking left Bottom Block

    let tempLeftBottomIndex = index
    if (!leftArr.includes(index)) {
        tempLeftBottomIndex = tempLeftBottomIndex + 6
        if (tempLeftBottomIndex < 63) {
            if (!rightArr.includes(tempLeftBottomIndex)) {
                if (!Object.hasOwn(actionInitial[tempLeftBottomIndex].piece, "pieceId")) {
                    actionInitial[tempLeftBottomIndex].routes = type
                } else {
                    if (actionInitial[tempLeftBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        opponentPiece(tempLeftBottomIndex, actionInitial, type, check,kingIndex)
                    }
                }
            }
        }
    }

    // cheking left Bottom Block
    let tempLeftTopIndex = index
    if (!leftArr.includes(index)) {
        tempLeftTopIndex = tempLeftTopIndex - 10
        if (tempLeftTopIndex > 0) {
            if (!rightArr.includes(tempLeftTopIndex)) {
                if (!Object.hasOwn(actionInitial[tempLeftTopIndex].piece, "pieceId")) {
                    actionInitial[tempLeftTopIndex].routes = type
                } else {
                    if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                        opponentPiece(tempLeftTopIndex, actionInitial, type, check,kingIndex)
                    }
                }
            }
        }
    }

    // cheking right Bottom Block
    let tempRightBottomIndex = index
    if (!rightArr.includes(index)) {
        tempRightBottomIndex = tempRightBottomIndex + 10
        if (tempRightBottomIndex < 63) {
            if (!leftArr.includes(tempRightBottomIndex)) {
                if (!Object.hasOwn(actionInitial[tempRightBottomIndex].piece, "pieceId")) {
                    actionInitial[tempRightBottomIndex].routes = type
                } else {
                    if (actionInitial[tempRightBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        opponentPiece(tempRightBottomIndex, actionInitial, type, check,kingIndex)
                    }
                }
            }
        }
    }

    // cheking rightTop side
    let tempRightTopIndex = index
    if (!rightArr.includes(index)) {
        tempRightTopIndex = tempRightTopIndex - 6
        if (tempRightTopIndex > 0) {
            if (!leftArr.includes(tempRightTopIndex)) {
                if (!Object.hasOwn(actionInitial[tempRightTopIndex].piece, "pieceId")) {
                    actionInitial[tempRightTopIndex].routes = type
                } else {
                    if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                        opponentPiece(tempRightTopIndex, actionInitial, type, check,kingIndex)
                    }
                }
            }
        }
    }
}

export default Horse