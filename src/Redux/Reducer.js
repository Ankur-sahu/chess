import action_type from "./ActionType"
import CheckPiece from "../PieceAction/CheckPiece";
import movePiece from "../PieceAction/movePiece"

const initialState = {
    actionInitial: [],
    turn: true,
    killed: [],
    lastStep: {
        prev: null,
        current: null
    },
    game: 0
}

export const chessReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.START:
            const initialArr = action.payload
            return { ...state, actionInitial: [...initialArr], turn: true, killed: [], game: 0, lastStep: { prev: null, current: null } }

        case action_type.RESETGAME:
            return { ...state, game: 0 }

        case action_type.SYNC:
            return {
                ...state, actionInitial: [...action.payload.blocks],
                turn: action.payload.turn,
                killed: [...action.payload.killedP],
                game: action.payload.game,
                lastStep: { ...action.payload.lastStep }
            }

        case action_type.BLOCKSELECTED:
            let tempAr = [...state.actionInitial];
            tempAr[action.payload].active = true;
            CheckPiece(action.payload, tempAr, true)
            return {
                ...state, actionInitial: [...tempAr]
            }

        case action_type.TURN:
            return { ...state, turn: action.payload }

        case action_type.BLOCKUNSELECTED:
            let unTempArr = [...state.actionInitial];
            unTempArr[action.payload].active = false;
            CheckPiece(action.payload, unTempArr, false)
            return {
                ...state, actionInitial: [...unTempArr]
            }
        case action_type.TIMEUP:
            if (state.turn) {
                return { ...state, game: 2 }
            }
            return { ...state, game: 1 }
        case action_type.MOVE:
            let moveArr = [...state.actionInitial]
            let killedP = [...state.killed]
            if (moveArr[action.payload.index].piece.pieceId === 61 || moveArr[action.payload.index].piece.pieceId === 5) {
                return { ...state, game: moveArr[action.payload.blockSelected].piece.player }
            }
            if (action.payload.type === 2) {
                killedP.push(moveArr[action.payload.index].piece)
            }
            let tempObj = { ...state.lastStep }
            if (tempObj.current !== null) {
                moveArr[tempObj.prev].previousStep = false
                moveArr[tempObj.current].currentStep = false
            }
            tempObj.prev = action.payload.blockSelected
            tempObj.current = action.payload.index
            movePiece(moveArr, action.payload.blockSelected, action.payload.index)
            CheckPiece(action.payload.index, moveArr, false, true)
            return { ...state, actionInitial: [...moveArr], turn: !state.turn, killed: [...killedP], lastStep: { ...tempObj } }

        default:
            return state;
    }
}
