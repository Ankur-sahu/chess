import Checkmate from "./Checkmate"

const King = (index, actionInitial,type) => {
    console.log("king file....")
    const leftArr = [0, 8, 24, 32, 40, 48, 56]
    const rightArr = [7, 15, 23, 31, 39, 47, 55, 63]
    let tempLeftTopIndex = index
    if (!leftArr.includes(tempLeftTopIndex)) {
        // console.log("king file in 1st if ....",tempLeftTopIndex)
        tempLeftTopIndex = tempLeftTopIndex - 9;
        // console.log("king file in 2nd if ....",tempLeftTopIndex)
        if (tempLeftTopIndex > 0) {
            // console.log("king file in 3rd if ....",tempLeftTopIndex)

            if (!actionInitial[tempLeftTopIndex].piece) {
                if(Checkmate(tempLeftTopIndex,actionInitial)){
                    actionInitial[tempLeftTopIndex].routes = type;
                }
                console.log('actionInitial[tempLeftTopIndexKing].king.left', actionInitial[tempLeftTopIndex].id)
            } else {
                if (actionInitial[tempLeftTopIndex].piece.player !== actionInitial[index].piece.player) {
                    
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
            if (!actionInitial[templeftindex].piece) {
                actionInitial[templeftindex].routes = type;
                console.log('actionInitial[templeftindex].king.left', actionInitial[templeftindex].id)
            } else {
                if (actionInitial[templeftindex].piece.player !== actionInitial[index].piece.player) {
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
            if (!actionInitial[tempRightIndex].piece) {
                actionInitial[tempRightIndex].routes = type;
                console.log('actionInitial[tempRightIndex].king.right', actionInitial[tempRightIndex].id)
            } else {
                if (actionInitial[tempRightIndex].piece.player !== actionInitial[index].piece.player) {
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
        if (!actionInitial[tempTopIndex].piece) {
            actionInitial[tempTopIndex].routes = type;
            console.log('actionInitial[tempTopIndex].king top', actionInitial[tempTopIndex].id)
        } else {
            if (actionInitial[tempTopIndex].piece.player !== actionInitial[index].piece.player) {
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
        if (!actionInitial[tempBottomIndex].piece) {
            actionInitial[tempBottomIndex].routes = type;
            console.log('actionInitial[tempBottomIndex].king bottom', actionInitial[tempBottomIndex].id)
        } else {
            if (actionInitial[tempBottomIndex].piece.player !== actionInitial[index].piece.player) {
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
            if (!actionInitial[tempRightTopIndex].piece) {
                actionInitial[tempRightTopIndex].routes = type;
                console.log('actionInitial[tempRightTopIndex].king.rightTop', actionInitial[tempRightTopIndex].id)
            } else {
                if (actionInitial[tempRightTopIndex].piece.player !== actionInitial[index].piece.player) {
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
            if (!actionInitial[tempBottomRightIndex].piece) {
                actionInitial[tempBottomRightIndex].routes = type;
                console.log('actionInitial[tempBottomRightIndex].king.rightBottom', actionInitial[tempBottomRightIndex].id)
            } else {
                if (actionInitial[tempBottomRightIndex].piece.player !== actionInitial[index].piece.player) {
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
            if (!actionInitial[tempBottomLeftIndex].piece) {
                actionInitial[tempBottomLeftIndex].routes = type;
                console.log('actionInitial[tempBottomLeftIndex].king.leftBottom', actionInitial[tempBottomLeftIndex].id)
            } else {
                if (actionInitial[tempBottomLeftIndex].piece.player !== actionInitial[index].piece.player) {
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