import * as redux from "redux";
import thunk from "redux-thunk"

var {addTodoReducer} = require("../reducers/index.js")

export var configure = () =>{
    var reducer = redux.combineReducers({
        todos:addTodoReducer
    })

var store = redux.createStore(reducer)
return store
}