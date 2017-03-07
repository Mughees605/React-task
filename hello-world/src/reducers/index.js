export var addTodoReducer = (state = [],action)=>{
    switch(action.type){
        case "ADD_TODO":
        console.log(state, " reducers")
        return [
            ...state,
            {
                text:action.text
            }
        ]
        default:
        return state
    }
}