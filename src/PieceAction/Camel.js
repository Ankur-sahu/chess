import opponentPiece from "./opponentPiece"
import { leftArr, rightArr } from "./sides"

const Camel = (index, actionInitial, type, check) => {
    let tempLeftTopIndex = index
    //checking for left top blocks
    while (!leftArr.includes(tempLeftTopIndex)) {
        tempLeftTopIndex = tempLeftTopIndex - 9
        if (tempLeftTopIndex < 0) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempLeftTopIndex].piece, "pieceId")) {
            actionInitial[tempLeftTopIndex].routes = type
        } else {
            if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempLeftTopIndex, actionInitial, type, check)
                break
            } else {
                break
            }
        }
    }
    // cheecking for RightTopIndex
    let tempRightTopIndex = index
    while (!rightArr.includes(tempRightTopIndex)) {
        tempRightTopIndex = tempRightTopIndex - 7
        if (tempRightTopIndex < 0) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempRightTopIndex].piece, "pieceId")) {
            actionInitial[tempRightTopIndex].routes = type
        } else {
            if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempRightTopIndex, actionInitial, type, check)
                break
            } else {
                break
            }
        }
    }
    // checking for BottomLeft
    let tempBottomRightIndex = index
    while (!rightArr.includes(tempBottomRightIndex)) {
        tempBottomRightIndex = tempBottomRightIndex + 9
        if (tempBottomRightIndex > 63) {
            break;
        }
        if (!Object.hasOwn(actionInitial[tempBottomRightIndex].piece, "pieceId")) {
            actionInitial[tempBottomRightIndex].routes = type
        } else {
            if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempBottomRightIndex, actionInitial, type, check)
                break
            } else {
                break
            }
        }
    }
    // checking for Bottom
    let tempBottomLeftIndex = index
    while (!leftArr.includes(tempBottomLeftIndex)) {
        tempBottomLeftIndex = tempBottomLeftIndex + 7
        if (tempBottomLeftIndex > 63) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece, "pieceId")) {
            actionInitial[tempBottomLeftIndex].routes = type
        } else {
            if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempBottomLeftIndex, actionInitial, type, check)
                break
            } else {
                break
            }
        }
    }
}

export default Camel