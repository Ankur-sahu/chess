function RightFunc(index, actionInitial, player) {
    let initialStage = 8;

    if (player === 1) {
        // console.log("player1")

        if (index + 7 > 64) {
            // console.log("firstif")
            return false;
        }
        if (actionInitial[index + 7].id === initialStage) {
            // console.log(actionInitial[index + 7].id, initialStage, "one")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 2) {
            // console.log(actionInitial[index + 7].id, initialStage, "two")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 3) {
            // console.log(actionInitial[index + 7].id, initialStage, "3")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 4) {
            // console.log(actionInitial[index + 7].id, initialStage, "4")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 5) {
            // console.log(actionInitial[index + 7].id, initialStage, "5")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 6) {
            // console.log(actionInitial[index + 7].id, initialStage, "6")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 7) {
            // console.log(actionInitial[index + 7].id, initialStage, "7")
            return false;
        } else if (actionInitial[index + 7].id === initialStage * 8) {
            // console.log(actionInitial[index + 7].id, initialStage, "8000")
            return false;
        } else if (actionInitial[index + 7].id > 64) {
            // console.log(actionInitial[index + 7].id, initialStage, "one")
            return false;
        } else {
            return true;
        }

    } else if (player === 2) {
        if (index - 7 < 0) {
            // console.log("seconfi")
            return false;
        }
        // console.log("player2")
        if (actionInitial[index - 7].id === 1 + (initialStage * 0)) {
            // console.log(actionInitial[index - 7].id, initialStage, "elseone")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 1)) {
            // console.log(actionInitial[index - 7].id, initialStage, "elsetwo")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 2)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else3")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 3)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else4")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 4)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else5")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 5)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else6")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 6)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else7")
            return false;
        } else if (actionInitial[index - 7].id === 1 + (initialStage * 7)) {
            // console.log(actionInitial[index - 7].id, initialStage, "else8")
            return false;
        } else if (actionInitial[index - 7].id < 0) {
            // console.log(actionInitial[index - 7].id, initialStage, "elseone")
            return false;
        } else {
            return true;
        }
    }

}

function leftFunc(index, actionInitial, player) {
    let initialStage = 8;


    if (player === 1) {
        if (index + 9 > 64) {
            // console.log("leftfirstIF")
            return false;
        }
        // console.log("player1")
        if (actionInitial[index + 9].id === 1 + (initialStage * 0)) {
            // console.log(initialStage * 1, 1 + initialStage * 0, "ininini1")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 1)) {
            // console.log(initialStage * 2, 1 + initialStage * 1, "ininini2")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 2)) {
            // console.log(initialStage * 3, 1 + initialStage * 2, "ininini3")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 3)) {
            // console.log(initialStage * 4, 1 + initialStage * 3, "ininini4")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 4)) {
            // console.log(initialStage * 5, 1 + initialStage * 4, "ininini5")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 5)) {
            // console.log(initialStage * 6, 1 + initialStage * 5, "ininini6")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 6)) {
            // console.log(initialStage * 7, 1 + initialStage * 6, "ininini7")
            return false;
        } else if (actionInitial[index + 9].id === 1 + (initialStage * 7)) {
            // console.log(initialStage * 8, 1 + initialStage * 7, "ininini8")
            return false;
        } else {
            // console.log("pawnElseCheckLeft")
            return true;
        }


    } else if (player === 2) {
        // console.log("player2")
        if (index - 9 < 0) {
            // console.log("leftfirstIF")
            return false;
        }

        if (actionInitial[index - 9].id === initialStage * 1) {
            // console.log()
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 2) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 3) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 4) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 5) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 6) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 7) {
            return false;

        } else if (actionInitial[index - 9].id === initialStage * 8) {
            return false;

        } else {
            return true;
        }
    } else {
        // console.log("lastelse")
    }


}

function Pawn(index, actionInitial, type,check) {
    const player = actionInitial[index].piece.player === 1 ? 1 : 2
    if (RightFunc(index, actionInitial, player)) {
        if (player === 1) {
            if (Object.hasOwn(actionInitial[index + 7].piece, "pieceId")) {
                if (actionInitial[index + 7].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[index + 7].piece.pieceId ===61 || actionInitial[index + 7].piece.pieceId ===5)){
                        actionInitial[index + 7].check = check
                        return
                    }
                    actionInitial[index + 7].opponentPiece = type
                    actionInitial[index + 7].routes = type

                }
                // console.log(index+8,"peice exist")
            } else {
                // console.log(actionInitial[index+7].id,"peice does not exist p1")

            }
        } else {
            if (Object.hasOwn(actionInitial[index - 7].piece, "pieceId")) {
                if (actionInitial[index - 7].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[index - 7].piece.pieceId ===61 || actionInitial[index - 7].piece.pieceId ===5)){
                        actionInitial[index - 7].check = check
                        return
                    }
                    actionInitial[index - 7].opponentPiece = type
                    actionInitial[index - 7].routes = type

                }
                // console.log(index-8,"peice exist")
            } else {
                // console.log(actionInitial[index-7].id,"peice does not exist p2")

            }
        }

    } else {
        // console.log("RightpawnNotchecked")
    }


    if (leftFunc(index, actionInitial, player)) {
        if (player === 1) {
            if (Object.hasOwn(actionInitial[index + 9].piece, "pieceId")) {
                if (actionInitial[index + 9].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[index + 9].piece.pieceId ===61 || actionInitial[index + 9].piece.pieceId ===5)){
                        actionInitial[index + 9].check = check
                        return
                    }
                    actionInitial[index + 9].opponentPiece = type
                    actionInitial[index + 9].routes = type

                }
                // console.log(actionInitial[index+9].id,"peice exist p1")
            } else {
                // console.log(actionInitial[index+9].id,"peice does not exist p1")

            }
        } else {
            if (Object.hasOwn(actionInitial[index - 9].piece, "pieceId")) {
                if (actionInitial[index - 9].piece.player !== actionInitial[index].piece.player) {
                    if(check && (actionInitial[index - 9].piece.pieceId ===61 || actionInitial[index - 9].piece.pieceId ===5)){
                        actionInitial[index - 9].check = check
                        return
                    }
                    actionInitial[index - 9].opponentPiece = type
                    actionInitial[index - 9].routes = type

                }
                // console.log(actionInitial[index-9].id,"peice exist p2")
            } else {
                // console.log(actionInitial[index-9].id,"peice does not exist p2")

            }
        }

        // console.log("leftPawnCheckrd")
    } else {
        // console.log("leftPawnNotCheck")
    }
    //finding forward route

    if (player === 1) {
        if (index + 8 < 64) {
            if(!Object.hasOwn(actionInitial[index + 8].piece,"player"))
            actionInitial[index + 8].routes = type

            // console.log(actionInitial[index+8].id,"route clear p1")
            if (actionInitial[index].id > actionInitial[7].id && actionInitial[index].id < actionInitial[16].id) {
                if (actionInitial[index + 16].id < 64 && !actionInitial[index + 16].piece.player) {
                    actionInitial[index + 16].routes = type
                    // console.log(actionInitial[index+16].id,"route2 clear p1")
                }
            }
        }

    } else {
        if (index - 8 > 0) {
            if (!Object.hasOwn(actionInitial[index - 8].piece,"player")) {
                actionInitial[index - 8].routes = type

                // console.log(actionInitial[index-8].id,"route clear p2")
                if (actionInitial[index].id > actionInitial[47].id && actionInitial[index].id < actionInitial[56].id) {
                    if (actionInitial[index - 16].id < 64 && !actionInitial[index - 16].piece.player) {
                        actionInitial[index - 16].routes = type
                        // console.log(actionInitial[index-16].id,"route2 clear p1")
                    }
                }
            }

        }
    }
    // console.log("return route from pawn action", actionInitial)
}
export default Pawn