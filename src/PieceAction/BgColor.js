const bgColor = (actionInitial)=>{
    if(actionInitial.opponentPiece || actionInitial.check){
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