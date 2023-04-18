

const bgColor = (actionInitial)=>{
    // console.log(actionInitial)
    if(actionInitial.opponentPiece){
        return "opponent"
    }else if(actionInitial.routes || actionInitial.active){
        return "route"
    }else if(actionInitial.previousStep){
        return "prev-step"
    }else if(actionInitial.currentStep){
        return "current-step"
    }else{
        return actionInitial.backColor
    }
}
export default bgColor