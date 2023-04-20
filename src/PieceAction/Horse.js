
const Horse = (index, actionInitial,type,check) => {
    const leftArr = [0, 8, 16, 24, 32, 40, 48, 56]
    const rightArr = [7, 15, 23, 31, 39, 47, 55]
    let tempTopLeftIndex = index
    tempTopLeftIndex = tempTopLeftIndex - 17;
    if (tempTopLeftIndex > 0) {
        if (!rightArr.includes(tempTopLeftIndex)) {
            if (!Object.hasOwn(actionInitial[tempTopLeftIndex].piece,"pieceId")) {
                actionInitial[tempTopLeftIndex].routes = type;
                console.log('actionInitial[tempTopLeftIndex].piece topleft', actionInitial[tempTopLeftIndex].id)
            } else {
                if (actionInitial[tempTopLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempTopLeftIndex].piece.pieceId ===61 || actionInitial[tempTopLeftIndex].piece.pieceId ===5)){
                        actionInitial[tempTopLeftIndex].check = check
                        return
                    }
                    actionInitial[tempTopLeftIndex].routes = type;
                    actionInitial[tempTopLeftIndex].opponentPiece = type;
                    console.log('opponent piece topleft side')
                } else {
                    console.log('same piece topleft side')
                }
            }
        }

    }

    // cheking topright side

    let tempTopRightIndex = index
    tempTopRightIndex = tempTopRightIndex - 15;
    if (tempTopRightIndex > 0) {
        if (!leftArr.includes(tempTopRightIndex)) {
            if (!Object.hasOwn(actionInitial[tempTopRightIndex].piece,"pieceId")) {
                actionInitial[tempTopRightIndex].routes = type;
                console.log('actionInitial[tempTopRightIndex].piece topright', actionInitial[tempTopRightIndex].id)
            } else {
                if (actionInitial[tempTopRightIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempTopRightIndex].piece.pieceId ===61 || actionInitial[tempTopRightIndex].piece.pieceId ===5)){
                        actionInitial[tempTopRightIndex].check = check
                        return
                    }
                    actionInitial[tempTopRightIndex].routes = type;
                    actionInitial[tempTopRightIndex].opponentPiece = type;
                    console.log('opponent piece topright side')
                } else {
                    console.log('same piece topright side')
                }
            }
        } else {
            console.log('out of right side')
        }

    }

    // cheking bottomleft side

    let tempBottomLeftIndex = index
    tempBottomLeftIndex = tempBottomLeftIndex + 15;
    if (tempBottomLeftIndex < 63) {
        if (!rightArr.includes(tempBottomLeftIndex)) {
            if (!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece,"pieceId")) {
                actionInitial[tempBottomLeftIndex].routes = type;
                console.log('actionInitial[tempBottomLeftIndex].piece bottomLeft', actionInitial[tempBottomLeftIndex].id)
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempBottomLeftIndex].piece.pieceId ===61 || actionInitial[tempBottomLeftIndex].piece.pieceId ===5)){
                        actionInitial[tempBottomLeftIndex].check = check
                        return
                    }
                    actionInitial[tempBottomLeftIndex].routes = type;
                    actionInitial[tempBottomLeftIndex].opponentPiece = type;
                    console.log('opponent piece bottomLeft side')
                } else {
                    console.log('same piece bottomLeft side')
                }
            }
        } else {
            console.log('out of bottomLeft side')
        }

    }

    // cheking bottomright side

    let tempBottomRightIndex = index
    tempBottomRightIndex = tempBottomRightIndex + 17;
    if (tempBottomRightIndex < 63) {
        if (!leftArr.includes(tempBottomRightIndex)) {
            if (!Object.hasOwn(actionInitial[tempBottomRightIndex].piece,"pieceId")) {
                actionInitial[tempBottomRightIndex].routes = type;
                console.log('actionInitial[tempBottomRightIndex].piece bottomLeft', actionInitial[tempBottomRightIndex].id)
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempBottomRightIndex].piece.pieceId ===61 || actionInitial[tempBottomRightIndex].piece.pieceId ===5)){
                        actionInitial[tempBottomRightIndex].check = check
                        return
                    }
                    actionInitial[tempBottomRightIndex].routes = type;
                    actionInitial[tempBottomRightIndex].opponentPiece = type;
                    console.log('opponent piece bottomLeft side')
                } else {
                    console.log('same piece bottomLeft side')
                }
            }
        } else {
            console.log('out of bottomLeft side')
        }

    }

    // cheking leftBottom side

    let tempLeftBottomIndex = index
    if (!leftArr.includes(index)) {
        tempLeftBottomIndex = tempLeftBottomIndex + 6;
        if (tempLeftBottomIndex < 63) {
            if (!rightArr.includes(tempLeftBottomIndex)) {
                if (!Object.hasOwn(actionInitial[tempLeftBottomIndex].piece,"pieceId")) {
                    actionInitial[tempLeftBottomIndex].routes = type;
                    console.log('actionInitial[tempLeftBottomIndex].piece LeftBottom', actionInitial[tempLeftBottomIndex].id)
                } else {
                    if (actionInitial[tempLeftBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        if(check && (actionInitial[tempLeftBottomIndex].piece.pieceId ===61 || actionInitial[tempLeftBottomIndex].piece.pieceId ===5)){
                            actionInitial[tempLeftBottomIndex].check = check
                            return
                        }
                        actionInitial[tempLeftBottomIndex].routes = type;
                        actionInitial[tempLeftBottomIndex].opponentPiece = type;
                        console.log('opponent piece LeftBottom side')
                    } else {
                        console.log('same piece LeftBottom side')
                    }
                }
            } else {
                console.log('out of LeftBottom side')
            }
        }
    }else{
        console.log(" included in left arr tempLeftBottomIndex")
    }

     // cheking leftBottom side

     let tempLeftTopIndex = index
     if (!leftArr.includes(index)) {
         tempLeftTopIndex = tempLeftTopIndex - 10;
         if (tempLeftTopIndex > 0) {
             if (!rightArr.includes(tempLeftTopIndex)) {
                 if (!Object.hasOwn(actionInitial[tempLeftTopIndex].piece,"pieceId")) {
                     actionInitial[tempLeftTopIndex].routes = type;
                     console.log('actionInitial[tempLeftTopIndex].piece LeftBottom', actionInitial[tempLeftTopIndex].id)
                 } else {
                     if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                        if(check && (actionInitial[tempLeftTopIndex].piece.pieceId ===61 || actionInitial[tempLeftTopIndex].piece.pieceId ===5)){
                            actionInitial[tempLeftTopIndex].check = check
                            return
                        } 
                        actionInitial[tempLeftTopIndex].routes = type;
                         actionInitial[tempLeftTopIndex].opponentPiece = type;
                         console.log('opponent piece LeftBottom side')
                     } else {
                         console.log('same piece LeftBottom side')
                     }
                 }
             } else {
                 console.log('out of LeftBottom side')
             }
         }
     }else{
         console.log(" included in left arr tempLeftTopIndex")
     }

      // cheking rightBottom side

    let tempRightBottomIndex = index
    if (!rightArr.includes(index)) {
        tempRightBottomIndex = tempRightBottomIndex + 10;
        if (tempRightBottomIndex < 63) {
            if (!leftArr.includes(tempRightBottomIndex)) {
                if (!Object.hasOwn(actionInitial[tempRightBottomIndex].piece,"pieceId")) {
                    actionInitial[tempRightBottomIndex].routes = type;
                    console.log('actionInitial[tempRightBottomIndex].piece rightBottom', actionInitial[tempRightBottomIndex].id)
                } else {
                    if (actionInitial[tempRightBottomIndex].piece.player !== actionInitial[index].piece.player) {
                        if(check && (actionInitial[tempRightBottomIndex].piece.pieceId ===61 || actionInitial[tempRightBottomIndex].piece.pieceId ===5)){
                            actionInitial[tempRightBottomIndex].check = check
                            return
                        } 
                        actionInitial[tempRightBottomIndex].routes = type;
                        actionInitial[tempRightBottomIndex].opponentPiece = type;
                        console.log('opponent piece rightBottom side')
                    } else {
                        console.log('same piece rightBottom side')
                    }
                }
            } else {
                console.log('out of rightBottom side')
            }
        }
    }else{
        console.log(" included in right arr tempRightBottomIndex")
    }

     // cheking rightTop side

     let tempRightTopIndex = index
     if (!rightArr.includes(index)) {
         tempRightTopIndex = tempRightTopIndex - 6;
         if (tempRightTopIndex > 0) {
             if (!leftArr.includes(tempRightTopIndex)) {
                 if (!Object.hasOwn(actionInitial[tempRightTopIndex].piece,"pieceId")) {
                     actionInitial[tempRightTopIndex].routes = type;
                     console.log('actionInitial[tempRightTopIndex].piece rightTop', actionInitial[tempRightTopIndex].id)
                 } else {
                     if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                        if(check && (actionInitial[tempRightTopIndex].piece.pieceId ===61 || actionInitial[tempRightTopIndex].piece.pieceId ===5)){
                            actionInitial[tempRightTopIndex].check = check
                            return
                        }
                         actionInitial[tempRightTopIndex].routes = type;
                         actionInitial[tempRightTopIndex].opponentPiece = type;
                         console.log('opponent piece rightTop side')
                     } else {
                         console.log('same piece rightTop side')
                     }
                 }
             } else {
                 console.log('out of rightTop side')
             }
         }
     }else{
         console.log(" included in left arr tempRightTopIndex")
     }


}

export default Horse