
import opponentPiece from "./opponentPiece"
import { leftArr, rightArr } from "./sides"

const King = (index, actionInitial, type, check) => {
    //checking for left top block
    let tempLeftTopIndex = index
    if (!leftArr.includes(tempLeftTopIndex)) {
        tempLeftTopIndex = tempLeftTopIndex - 9
        if (tempLeftTopIndex > 0) {
            if (!Object.hasOwn(actionInitial[tempLeftTopIndex].piece, "pieceId")) {
                actionInitial[tempLeftTopIndex].routes = type
            } else {
                if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempLeftTopIndex, actionInitial, type, check)
                }
            }
        }
    }

    //checking for left block
    let templeftindex = index
    if (!leftArr.includes(templeftindex)) {
        templeftindex = templeftindex - 1
        if (templeftindex > 0) {
            if (!Object.hasOwn(actionInitial[templeftindex].piece, "pieceId")) {
                actionInitial[templeftindex].routes = type
            } else {
                if (actionInitial[templeftindex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(templeftindex, actionInitial, type, check)
                }
            }
        }

    }

    // cheking right block
    let tempRightIndex = index
    if (!rightArr.includes(tempRightIndex)) {
        tempRightIndex = tempRightIndex + 1
        if (tempRightIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempRightIndex].piece, "pieceId")) {
                actionInitial[tempRightIndex].routes = type
            } else {
                if (actionInitial[tempRightIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempRightIndex, actionInitial, type, check)
                }
            }
        }

    }

    // cheking for top block
    let tempTopIndex = index
    tempTopIndex = tempTopIndex - 8
    if (tempTopIndex > 0) {
        if (!Object.hasOwn(actionInitial[tempTopIndex].piece, "pieceId")) {
            actionInitial[tempTopIndex].routes = type
        } else {
            if (actionInitial[tempTopIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempTopIndex, actionInitial, type, check)

            }
        }

    }

    // cheking for bottom block
    let tempBottomIndex = index
    tempBottomIndex = tempBottomIndex + 8;
    if (tempBottomIndex < 63) {
        if (!Object.hasOwn(actionInitial[tempBottomIndex].piece, "pieceId")) {
            actionInitial[tempBottomIndex].routes = type
        } else {
            if (actionInitial[tempBottomIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempBottomIndex, actionInitial, type, check)
            }
        }
    }

    // cheecking for Right Top Block
    let tempRightTopIndex = index
    if (!rightArr.includes(tempRightTopIndex)) {
        tempRightTopIndex = tempRightTopIndex - 7
        if (tempRightTopIndex > 0) {
            if (!Object.hasOwn(actionInitial[tempRightTopIndex].piece, "pieceId")) {
                actionInitial[tempRightTopIndex].routes = type
            } else {
                if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempRightTopIndex, actionInitial, type, check)
                }
            }
        }
    }

    // checking for BottomLeft
    let tempBottomRightIndex = index
    if (!rightArr.includes(tempBottomRightIndex)) {
        tempBottomRightIndex = tempBottomRightIndex + 9
        if (tempBottomRightIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempBottomRightIndex].piece, "pieceId")) {
                actionInitial[tempBottomRightIndex].routes = type
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempBottomRightIndex, actionInitial, type, check)
                }
            }
        }

    }

    // checking for Bottom Right block
    let tempBottomLeftIndex = index
    if (!leftArr.includes(tempBottomLeftIndex)) {
        tempBottomLeftIndex = tempBottomLeftIndex + 7;
        if (tempBottomLeftIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece, "pieceId")) {
                actionInitial[tempBottomLeftIndex].routes = type
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece(tempBottomLeftIndex, actionInitial, type, check)
                }
            }
        }
    }
}

export default King