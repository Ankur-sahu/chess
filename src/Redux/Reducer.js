import action_type from "./ActionType"
import CheckPiece from "../PieceAction/CheckPiece";
import movePiece from "../PieceAction/movePiece"

const initialState = {
    actionInitial: [],
    turn: true,
    killed: []
}

export const chessReducer = (state = initialState, action) => {

    switch (action.type) {
        case action_type.START:
            const initialArr = action.payload;

            // return[...state, ...action.payload]
            return { ...state, actionInitial: [...initialArr] }

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
            if (action.payload.type === 2) {
                console.log("kill move reducer", action.payload)
                killedP.push(moveArr[action.payload.index].piece)
            }
            movePiece(moveArr, action.payload.blockSelected, action.payload.index)
            return { ...state, actionInitial: [...moveArr], turn: !state.turn, killed: [...killedP] }
        
        default:
            return state;

    }

}
