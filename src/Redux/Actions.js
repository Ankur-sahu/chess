import action_type from "./ActionType"
 export const startGame = (payload)=>{
    return {
       type :  action_type.START ,
       payload : payload
    }
}




 export function selectPiece(payload){
   return {
      type: action_type.BLOCKSELECTED,
      payload: payload
   }
}

export function makeTurn(payload){
   return {
      type: action_type.TURN,
      payload: payload
   }
}

export function unselectPiece(payload){
   return {
      type: action_type.BLOCKUNSELECTED,
      payload: payload
   }
}
export function move(payload){
   return {
      type: action_type.MOVE,
      payload: payload
   }
}
export function check(){
   return {
      type: action_type.KILLMOVE,
      // get index of both king from reducer etc
   }
}

export function sync(payload){
   return {
      type: action_type.SYNC,
      payload:payload
   }
}