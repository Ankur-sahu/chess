import Checkmate from "./Checkmate"

const King = (index, actionInitial,type,check) => {
    console.log("king file....")
    const leftArr = [0, 8, 16, 24, 32, 40, 48, 56]
    const rightArr = [7, 15, 23, 31, 39, 47, 55, 63]
    let tempLeftTopIndex = index
    if (!leftArr.includes(tempLeftTopIndex)) {
        // console.log("king file in 1st if ....",tempLeftTopIndex)
        tempLeftTopIndex = tempLeftTopIndex - 9;
        // console.log("king file in 2nd if ....",tempLeftTopIndex)
        if (tempLeftTopIndex > 0) {
            // console.log("king file in 3rd if ....",tempLeftTopIndex)

            if (!Object.hasOwn(actionInitial[tempLeftTopIndex].piece,"pieceId")) {
                if(Checkmate(tempLeftTopIndex,actionInitial)){
                    actionInitial[tempLeftTopIndex].routes = type;
                }
                console.log('actionInitial[tempLeftTopIndexKing].king.left', actionInitial[tempLeftTopIndex].id)
            } else {
                if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempLeftTopIndex].piece.pieceId ===61 || actionInitial[tempLeftTopIndex].piece.pieceId ===5)){
                        actionInitial[tempLeftTopIndex].check = check
                        return
                    }
                    actionInitial[tempLeftTopIndex].routes = type;
                    actionInitial[tempLeftTopIndex].opponentPiece = type;
                    console.log('opponent king left')

                } else {
                    console.log('same king left')

                }
            }
        }
    }
    let templeftindex = index
    if (!leftArr.includes(templeftindex)) {
        templeftindex = templeftindex - 1;
        if (templeftindex > 0) {
            if (!Object.hasOwn(actionInitial[templeftindex].piece,"pieceId")) {
                actionInitial[templeftindex].routes = type;
                console.log('actionInitial[templeftindex].king.left', actionInitial[templeftindex].id)
            } else {
                if (actionInitial[templeftindex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[templeftindex].piece.pieceId ===61 || actionInitial[templeftindex].piece.pieceId ===5)){
                        actionInitial[templeftindex].check = check
                        return
                    }
                    actionInitial[templeftindex].routes = type;
                    actionInitial[templeftindex].opponentPiece = type;
                    console.log('opponent king left')

                } else {
                    console.log('same king left')

                }
            }
        }

    }
    // cheking right

    let tempRightIndex = index
    if (!rightArr.includes(tempRightIndex)) {
        tempRightIndex = tempRightIndex + 1;
        if (tempRightIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempRightIndex].piece,"pieceId")) {
                actionInitial[tempRightIndex].routes = type;
                console.log('actionInitial[tempRightIndex].king.right', actionInitial[tempRightIndex].id)
            } else {
                if (actionInitial[tempRightIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempRightIndex].piece.pieceId ===61 || actionInitial[tempRightIndex].piece.pieceId ===5)){
                        actionInitial[tempRightIndex].check = check
                        return
                    }
                    actionInitial[tempRightIndex].routes = type;
                    actionInitial[tempRightIndex].opponentPiece = type;
                    console.log('opponent king right')

                } else {
                    console.log('same king right')

                }
            }
        }

    }

    // cheking top

    // cheking for top
    let tempTopIndex = index

    // console.log('tempTopIndex in while1',tempTopIndex)
    tempTopIndex = tempTopIndex - 8;
    // console.log('tempTopIndex in while2',tempTopIndex)
    if (tempTopIndex > 0) {
        if (!Object.hasOwn(actionInitial[tempTopIndex].piece,"pieceId")) {
            actionInitial[tempTopIndex].routes = type;
            console.log('actionInitial[tempTopIndex].king top', actionInitial[tempTopIndex].id)
        } else {
            if (actionInitial[tempTopIndex].piece.player !== actionInitial[index].piece.player) {
                if(check && (actionInitial[tempTopIndex].piece.pieceId ===61 || actionInitial[tempTopIndex].piece.pieceId ===5)){
                    actionInitial[tempTopIndex].check = check
                    return
                }
                actionInitial[tempTopIndex].routes = type;
                actionInitial[tempTopIndex].opponentPiece = type;
                console.log('opponent king top side')

            } else {
                console.log('same king top side')

            }
        }

    }

    // cheking for bottom
    let tempBottomIndex = index
    //   console.log('tempBottomIndex in while1',tempBottomIndex)
    tempBottomIndex = tempBottomIndex + 8;
    //   console.log('tempBottomIndex in while2',tempBottomIndex)
    if (tempBottomIndex < 63) {
        if (!Object.hasOwn(actionInitial[tempBottomIndex].piece,"pieceId")) {
            actionInitial[tempBottomIndex].routes = type;
            console.log('actionInitial[tempBottomIndex].king bottom', actionInitial[tempBottomIndex].id)
        } else {
            if (actionInitial[tempBottomIndex].piece.player !== actionInitial[index].piece.player) {
                if(check && (actionInitial[tempBottomIndex].piece.pieceId ===61 || actionInitial[tempBottomIndex].piece.pieceId ===5)){
                    actionInitial[tempBottomIndex].check = check
                    return
                }
                actionInitial[tempBottomIndex].routes = type;
                actionInitial[tempBottomIndex].opponentPiece = type;
                console.log('opponent king bottom side')
            } else {
                console.log('same king bottom side')
            }
        }
    }


    // cheecking for RightTopIndex
    let tempRightTopIndex = index
    // console.log('cheking king rigt top',tempRightTopIndex)
    if (!rightArr.includes(tempRightTopIndex)) {
        // console.log('cheking king rigt top inside 1st if',tempRightTopIndex)
        tempRightTopIndex = tempRightTopIndex - 7;
        if (tempRightTopIndex > 0) {
            if (!Object.hasOwn(actionInitial[tempRightTopIndex].piece,"pieceId")) {
                actionInitial[tempRightTopIndex].routes = type;
                console.log('actionInitial[tempRightTopIndex].king.rightTop', actionInitial[tempRightTopIndex].id)
            } else {
                if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempRightTopIndex].piece.pieceId ===61 || actionInitial[tempRightTopIndex].piece.pieceId ===5)){
                        actionInitial[tempRightTopIndex].check = check
                        return
                    }
                    actionInitial[tempRightTopIndex].routes = type;
                    actionInitial[tempRightTopIndex].opponentPiece = type;
                    console.log('opponent king rightTop')

                } else {
                    console.log('same king rightTop')

                }
            }
        }

    }
    // checking for BottomLeft
    let tempBottomRightIndex = index
    if (!rightArr.includes(tempBottomRightIndex)) {
        tempBottomRightIndex = tempBottomRightIndex + 9;
        if (tempBottomRightIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempBottomRightIndex].piece,"pieceId")) {
                actionInitial[tempBottomRightIndex].routes = type;
                console.log('actionInitial[tempBottomRightIndex].king.rightBottom', actionInitial[tempBottomRightIndex].id)
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempBottomRightIndex].piece.pieceId ===61 || actionInitial[tempBottomRightIndex].piece.pieceId ===5)){
                        actionInitial[tempBottomRightIndex].check = check
                        return
                    }
                    actionInitial[tempBottomRightIndex].routes = type;
                    actionInitial[tempBottomRightIndex].opponentPiece = type;
                    console.log('opponent king rightBottom')

                } else {
                    console.log('same king rightBottom')

                }
            }
        }

    }
    // checking for Bottom
    let tempBottomLeftIndex = index
    if (!leftArr.includes(tempBottomLeftIndex)) {
        tempBottomLeftIndex = tempBottomLeftIndex + 7;
        if (tempBottomLeftIndex < 63) {
            if (!Object.hasOwn(actionInitial[tempBottomLeftIndex].piece,"pieceId")) {
                actionInitial[tempBottomLeftIndex].routes = type;
                console.log('actionInitial[tempBottomLeftIndex].king.leftBottom', actionInitial[tempBottomLeftIndex].id)
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[tempBottomLeftIndex].piece.pieceId ===61 || actionInitial[tempBottomLeftIndex].piece.pieceId ===5)){
                        actionInitial[tempBottomLeftIndex].check = check
                        return
                    }
                    actionInitial[tempBottomLeftIndex].routes = type;
                    actionInitial[tempBottomLeftIndex].opponentPiece = type;
                    console.log('opponent king leftBottom')

                } else {
                    console.log('same king leftBottom')

                }
            }
        }

    }
}

export default King