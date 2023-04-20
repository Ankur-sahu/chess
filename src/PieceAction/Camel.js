
const Camel = (index , actionInitial,type,check) => {
    console.log("check in check camel",check)
    const leftArr = [0,8,16,24,32,40,48,56]
    const rightArr = [7,15,23,31,39,47,55,63]
    let tempLeftTopIndex = index
    while(!leftArr.includes(tempLeftTopIndex) ){

        tempLeftTopIndex = tempLeftTopIndex - 9;
        if(tempLeftTopIndex < 0){
            break;
        }
        console.log(actionInitial[tempLeftTopIndex].piece)
        if(!Object.hasOwn(actionInitial[tempLeftTopIndex].piece,"pieceId")){
            actionInitial[tempLeftTopIndex].routes = type;
            console.log('actionInitial[tempLeftTopIndex].piece.left',actionInitial[tempLeftTopIndex].id)
        }else{
            if(actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player){
                if(check && (actionInitial[tempLeftTopIndex].piece.pieceId ===61 || actionInitial[tempLeftTopIndex].piece.pieceId ===5)){
                    actionInitial[tempLeftTopIndex].check = check
                    return
                }
            actionInitial[tempLeftTopIndex].routes = type;
            actionInitial[tempLeftTopIndex].opponentPiece = type;
            console.log('opponent piece left ', tempLeftTopIndex)
            break;
            }else{
            console.log('same piece left')
                break;
            }
        }
    }
    // cheecking for RightTopIndex
    let tempRightTopIndex = index
    while(!rightArr.includes(tempRightTopIndex) ){
        tempRightTopIndex = tempRightTopIndex - 7;
        if(tempRightTopIndex < 0){
            break;
        }
        if(!Object.hasOwn(actionInitial[tempRightTopIndex].piece,"pieceId")){
            actionInitial[tempRightTopIndex].routes = type;
            console.log('actionInitial[tempRightTopIndex].piece.rightTop',actionInitial[tempRightTopIndex].id)
        }else{
            if(actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player){
                if(check && (actionInitial[tempRightTopIndex].piece.pieceId ===61 || actionInitial[tempRightTopIndex].piece.pieceId ===5)){
                    actionInitial[tempRightTopIndex].check = check
                    return
                }
            actionInitial[tempRightTopIndex].routes = type;
            actionInitial[tempRightTopIndex].opponentPiece = type;
            console.log('opponent piece rightTop')
            break;
            }else{
            console.log('same piece rightTop')
                break;
            }
        }
    }
    // checking for BottomLeft
    let tempBottomRightIndex = index
    while(!rightArr.includes(tempBottomRightIndex) ){
        tempBottomRightIndex = tempBottomRightIndex + 9;
        if(tempBottomRightIndex > 63){
            break;
        }
        if(!Object.hasOwn(actionInitial[tempBottomRightIndex].piece,"pieceId")){
            actionInitial[tempBottomRightIndex].routes = type;
            console.log('actionInitial[tempBottomRightIndex].piece.rightBottom',actionInitial[tempBottomRightIndex].id)
        }else{
            if(actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player){
                if(check && (actionInitial[tempBottomRightIndex].piece.pieceId ===61 || actionInitial[tempBottomRightIndex].piece.pieceId ===5)){
                    actionInitial[tempBottomRightIndex].check = check
                    return
                }
            actionInitial[tempBottomRightIndex].routes = type;
            actionInitial[tempBottomRightIndex].opponentPiece = type;
            console.log('opponent piece rightBottom')
            break;
            }else{
            console.log('same piece rightBottom')
                break;
            }
        }
    }
     // checking for Bottom
     let tempBottomLeftIndex = index
     while(!leftArr.includes(tempBottomLeftIndex) ){
         tempBottomLeftIndex = tempBottomLeftIndex + 7;
         if(tempBottomLeftIndex > 63){
             break;
         }
         if(!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece,"pieceId")){
             actionInitial[tempBottomLeftIndex].routes = type;
             console.log('actionInitial[tempBottomLeftIndex].piece.leftBottom',actionInitial[tempBottomLeftIndex].id)
         }else{
             if(actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player){
                if(check && (actionInitial[tempBottomLeftIndex].piece.pieceId ===61 || actionInitial[tempBottomLeftIndex].piece.pieceId ===5)){
                    actionInitial[tempBottomLeftIndex].check = check
                    return
                }
             actionInitial[tempBottomLeftIndex].routes = type;
             actionInitial[tempBottomLeftIndex].opponentPiece = type;
             console.log('opponent piece leftBottom')
             break;
             }else{
             console.log('same piece leftBottom')
                 break;
             }
         }
     }
}

export default Camel