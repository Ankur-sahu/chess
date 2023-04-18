import Horse from './Horse'
import Hathi from './Hathi'
import Pawn from './Pawn'
import Camel from './Camel'
import King from './King'


const CheckPiece = (index, actionInitial,type) => {

    
    let piece = actionInitial[index].piece.pieceId
    if(piece === 1 ||piece === 8 ||piece === 57 ||piece === 64){
        console.log("hathi..")
        Hathi(index, actionInitial,type)
    }
    else if(piece === 2 ||piece === 7 ||piece === 58 ||piece === 63){
        console.log("horse..")
        Horse(index, actionInitial,type)
    }
    else if(piece === 3 ||piece === 6 ||piece === 59 ||piece === 62){
        console.log("camel..")
        Camel(index, actionInitial,type)
    }
    else if(piece === 4 ||piece === 60){
        console.log("wazir..")
        Camel(index, actionInitial,type)
        Hathi(index, actionInitial,type)

    }else if(piece === 5 ||piece === 61){

        King(index,actionInitial,type)
    }
    else{
        Pawn(index, actionInitial, type)

    }

}

export default CheckPiece