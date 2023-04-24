import opponentPiece from "./opponentPiece"
import { leftArr, rightArr } from "./sides";

const Hathi = (index, actionInitial, type, check) => {
    //checking for left block
    let templeftindex = index
    while (!leftArr.includes(templeftindex)) {
        templeftindex--
        if (templeftindex < 0) {
            break
        }
        if (!Object.hasOwn(actionInitial[templeftindex].piece, "pieceId")) {
            actionInitial[templeftindex].routes = type
        } else {
            if (actionInitial[templeftindex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(templeftindex, actionInitial, type, check)
                break
            }
        }
    }
    // checking for right block
    let tempRightIndex = index
    while (!rightArr.includes(tempRightIndex)) {
        tempRightIndex++
        if (tempRightIndex > 63) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempRightIndex].piece, "pieceId")) {
            actionInitial[tempRightIndex].routes = type
        } else {
            if (actionInitial[tempRightIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempRightIndex, actionInitial, type, check)
                break
            }
        }
    }

    // cheking for top block
    let tempTopIndex = index
    while (tempTopIndex > 0) {
        tempTopIndex = tempTopIndex - 8
        if (tempTopIndex < 0) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempTopIndex].piece, "pieceId")) {
            actionInitial[tempTopIndex].routes = type
        } else {
            if (actionInitial[tempTopIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempTopIndex, actionInitial, type, check)
                break
            }
        }
    }

    // cheking for bottom
    let tempBottomIndex = index
    while (tempBottomIndex < 63) {
        tempBottomIndex = tempBottomIndex + 8
        if (tempBottomIndex > 63) {
            break
        }
        if (!Object.hasOwn(actionInitial[tempBottomIndex].piece, "pieceId")) {
            actionInitial[tempBottomIndex].routes = type
        } else {
            if (actionInitial[tempBottomIndex].piece.player !== actionInitial[index].piece.player) {
                opponentPiece(tempBottomIndex, actionInitial, type, check)
                break
            }
        }
    }
}

export default Hathi