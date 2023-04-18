
const Camel = (index , actionInitial,type) => {
    const leftArr = [0,8,24,32,40,48,56]
    const rightArr = [7,15,23,31,39,47,55,63]
    let tempLeftTopIndex = index
    while(!leftArr.includes(tempLeftTopIndex) ){
        tempLeftTopIndex = tempLeftTopIndex - 9;
        if(tempLeftTopIndex < 0){
            break;
        }
        if(!actionInitial[tempLeftTopIndex].piece){
            actionInitial[tempLeftTopIndex].routes = type;
            console.log('actionInitial[tempLeftTopIndex].piece.left',actionInitial[tempLeftTopIndex].id)
        }else{
            if(actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player){
            actionInitial[tempLeftTopIndex].routes = type;
            actionInitial[tempLeftTopIndex].opponentPiece = type;
            console.log('opponent piece left')
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
        if(!actionInitial[tempRightTopIndex].piece){
            actionInitial[tempRightTopIndex].routes = type;
            console.log('actionInitial[tempRightTopIndex].piece.rightTop',actionInitial[tempRightTopIndex].id)
        }else{
            if(actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player){
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
        if(!actionInitial[tempBottomRightIndex].piece){
            actionInitial[tempBottomRightIndex].routes = type;
            console.log('actionInitial[tempBottomRightIndex].piece.rightBottom',actionInitial[tempBottomRightIndex].id)
        }else{
            if(actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player){
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
         if(!actionInitial[tempBottomLeftIndex].piece){
             actionInitial[tempBottomLeftIndex].routes = type;
             console.log('actionInitial[tempBottomLeftIndex].piece.leftBottom',actionInitial[tempBottomLeftIndex].id)
         }else{
             if(actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player){
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