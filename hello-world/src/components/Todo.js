import React from "react"
//var AddTodo = require("./AddTodo.js");
import AddTodo from "./AddTodo.js"

var TodoList = require("./TodoList.js")

var Todo = React.createClass({
getInitialState:function(){
    return {
        todos:[
            {
                id:1,
                text:"Hello"
            },
            {
                id:2,
                text:"Hello"
            },
            {
                id:3,
                text:"Hello"
            }
        ]
    }
},
handleAddTodo:function(text){
   this.setState({
      todos:[
          ...this.state.todos,
          {
              id:"4",
              text:text
          }
      ]
   })
},
    
    render:function(){
        return (
            <div>
                <AddTodo onAdd = {this.handleAddTodo}/>
                <TodoList todos = {this.state.todos}/>
            </div>
        )
    }
})
module.exports = Todo