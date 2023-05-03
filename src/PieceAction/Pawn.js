import opponentPiece from "./opponentPiece";
import { leftArr, rightArr } from "./sides";

function RightFunc(index, actionInitial, player) {
    if (player === 1) {
        if (index + 7 > 64) {
            return false;
        }
        if (rightArr.includes(actionInitial[index + 7])) {
            return false
        }
        return true
    } else if (player === 2) {
        if (index - 7 < 0) {
            return false;
        }
        if (leftArr.includes(actionInitial[index - 7])) {
            return false
        }
        return true
    }
}

function leftFunc(index, actionInitial, player) {
    if (player === 1) {
        if (index + 9 > 64) {
            return false;
        }
        if (leftArr.includes(actionInitial[index + 9])) {
            return false
        }
        return true
    } else if (player === 2) {
        if (index - 9 < 0) {
            return false;
        }
        if (rightArr.includes(actionInitial[index - 9])) {
            return false
        }
        return true
    }
}

function Pawn(index, actionInitial, type, check) {
    const player = actionInitial[index].piece.player === 1 ? 1 : 2
    if (RightFunc(index, actionInitial, player)) {
        if (player === 1) {
            if (Object.hasOwn(actionInitial[index + 7].piece, "pieceId")) {
                if (actionInitial[index + 7].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece((index + 7), actionInitial, type, check)
                }
            }
        } else {
            if (Object.hasOwn(actionInitial[index - 7].piece, "pieceId")) {
                if (actionInitial[index - 7].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece((index - 7), actionInitial, type, check)
                }
            }
        }

    }

    if (leftFunc(index, actionInitial, player)) {
        if (player === 1) {
            if (Object.hasOwn(actionInitial[index + 9].piece, "pieceId")) {
                if (actionInitial[index + 9].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece((index + 9), actionInitial, type, check)
                }
            }
        } else {
            if (Object.hasOwn(actionInitial[index - 9].piece, "pieceId")) {
                if (actionInitial[index - 9].piece.player !== actionInitial[index].piece.player) {
                    opponentPiece((index - 9), actionInitial, type, check)
                }
            }
        }
    }
    //finding forward route
    if (player === 1) {
        if (index + 8 < 64) {
            if (!Object.hasOwn(actionInitial[index + 8].piece, "player"))
                actionInitial[index + 8].routes = type
            if (actionInitial[index].id > actionInitial[7].id && actionInitial[index].id < actionInitial[16].id) {
                if (actionInitial[index + 16].id < 64 && !actionInitial[index + 16].piece.player) {
                    actionInitial[index + 16].routes = type
                }
            }
        }
    } else {
        if (index - 8 > 0) {
            if (!Object.hasOwn(actionInitial[index - 8].piece, "player")) {
                actionInitial[index - 8].routes = type
                if (actionInitial[index].id > actionInitial[47].id && actionInitial[index].id < actionInitial[56].id) {
                    if (actionInitial[index - 16].id < 64 && !actionInitial[index - 16].piece.player) {
                        actionInitial[index - 16].routes = type
                    }
                }
            }
        }
    }
}
export default Pawn