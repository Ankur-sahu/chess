
const Hathi = (index,actionInitial,type) => {
    const leftArr = [0,8,24,32,40,48,56]
    const rightArr = [7,15,23,31,39,47,55]
    let templeftindex = index
    while(!leftArr.includes(templeftindex) ){
        templeftindex--;
        if(templeftindex < 0){
            break;
        }
        if(!actionInitial[templeftindex].piece){
            actionInitial[templeftindex].routes = type;
            // console.log('actionInitial[templeftindex].piece.left',actionInitial[templeftindex].id)
        }else{
            if(actionInitial[templeftindex].piece.player !== actionInitial[index].piece.player){
            actionInitial[templeftindex].routes = type;
            actionInitial[templeftindex].opponentPiece = type;
            // console.log('opponent piece left')
            break;
            }else{
            // console.log('same piece left')
                break;
            }
        }
    }
// checking for right
    let tempRightIndex = index
    while(!rightArr.includes(tempRightIndex) ){
        tempRightIndex++;
        if(tempRightIndex > 63){
            break;
        }
        // console.log("hathi tempRightIndex check..")
        if(!actionInitial[tempRightIndex].piece){
            // console.log("hathi tempRightIndex inside if check..")
            actionInitial[tempRightIndex].routes = type;
            // console.log('actionInitial[tempRightIndex].piece rightside',actionInitial[tempRightIndex].id)
        }else{
            if(actionInitial[tempRightIndex].piece.player !== actionInitial[index].piece.player){
            actionInitial[tempRightIndex].routes = type;
            actionInitial[tempRightIndex].opponentPiece = type;
            // console.log('opponent piece right side')
            break;
            }else{
            // console.log('same piece right side')
                break;
            }
        }
    }

    // cheking for top
    let tempTopIndex = index
    while(tempTopIndex > 0){
        // console.log('tempTopIndex in while1',tempTopIndex)
        tempTopIndex= tempTopIndex - 8 ;
        // console.log('tempTopIndex in while2',tempTopIndex)
        if(tempTopIndex < 0){
            break;
        }
        if(!actionInitial[tempTopIndex].piece){
            actionInitial[tempTopIndex].routes = type;
            // console.log('actionInitial[tempTopIndex].piece top',actionInitial[tempTopIndex].id)
        }else{
            if(actionInitial[tempTopIndex].piece.player !== actionInitial[index].piece.player){
                actionInitial[tempTopIndex].routes = type;
                actionInitial[tempTopIndex].opponentPiece = type;
                // console.log('opponent piece top side')
                break;
            }else{
                // console.log('same piece top side')
                break;
            }
        }
    }

      // cheking for bottom
      let tempBottomIndex = index
      while(tempBottomIndex < 63){
        //   console.log('tempBottomIndex in while1',tempBottomIndex)
          tempBottomIndex= tempBottomIndex + 8 ;
        //   console.log('tempBottomIndex in while2',tempBottomIndex)
          if(tempBottomIndex > 63){
              break;
          }
          if(!actionInitial[tempBottomIndex].piece){
              actionInitial[tempBottomIndex].routes = type;
            //   console.log('actionInitial[tempBottomIndex].piece bottom',actionInitial[tempBottomIndex].id)
          }else{
              if(actionInitial[tempBottomIndex].piece.player !== actionInitial[index].piece.player){
                  actionInitial[tempBottomIndex].routes = type;
                  actionInitial[tempBottomIndex].opponentPiece = type;
                //   console.log('opponent piece bottom side')
                  break;
              }else{
                //   console.log('same piece bottom side')
                  break;
              }
          }
      }

//   console.log('index,actionInitial...',index,actionInitial)
}

export default Hathi