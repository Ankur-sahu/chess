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
            const initialArr = action.payload;

            // return[...state, ...action.payload]
            return { ...state, actionInitial: [...initialArr] }

        case action_type.SYNC:
            console.log("sync reducer")
            return {
                ...state, actionInitial: [...action.payload.blocks],
                turn: action.payload.turn,
                killed: [...action.payload.killedP],
                game: action.payload.game,
                lastStep:{...action.payload.lastStep}
            }


        case action_type.BLOCKSELECTED:
            let tempAr = [...state.actionInitial];
            tempAr[action.payload].active = true;
            //console.log(tempAr[action.payload], "payload action")
            CheckPiece(action.payload, tempAr, true)

            //console.log("return route from reduser", tempAr)
            return {
                ...state, actionInitial: [...tempAr]
            }

        case action_type.TURN:

            return { ...state, turn: action.payload }

        case action_type.BLOCKUNSELECTED:
            let unTempArr = [...state.actionInitial];
            unTempArr[action.payload].active = false;
            console.log(unTempArr[action.payload], "payload action unselect")
            CheckPiece(action.payload, unTempArr, false)

            //console.log("return route from reduser", unTempArr)
            return {
                ...state, actionInitial: [...unTempArr]
            }
        case action_type.MOVE:
            let moveArr = [...state.actionInitial]
            let killedP = [...state.killed]
            if (moveArr[action.payload.index].piece.pieceId === 61 || moveArr[action.payload.index].piece.pieceId === 5) {
                console.log("game over", moveArr[action.payload.blockSelected].piece.player)
                return { ...state, game: moveArr[action.payload.blockSelected].piece.player }
            }
            if (action.payload.type === 2) {
                console.log("kill move reducer", action.payload)
                killedP.push(moveArr[action.payload.index].piece)
            }
            let tempObj = { ...state.lastStep }
            console.log("last steps not empty",tempObj.current)

            if (tempObj.current !==null) {
                console.log("last steps not empty",tempObj.current)
                moveArr[tempObj.prev].previousStep = false
                moveArr[tempObj.current].currentStep = false
            }
            tempObj.prev = action.payload.blockSelected
            tempObj.current = action.payload.index



            movePiece(moveArr, action.payload.blockSelected, action.payload.index)
            console.log("checking check or not reducer")
            CheckPiece(action.payload.index, moveArr, false,true)
            console.log(moveArr)
            return { ...state, actionInitial: [...moveArr], turn: !state.turn, killed: [...killedP], lastStep: { ...tempObj } }
        default:
            return state;

    }

}
