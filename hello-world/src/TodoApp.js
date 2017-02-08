import React from 'react';
import ReactDOM from 'react-dom';
var TodoForm = require('./TodoForm')
var TodoList = require('./TodoList')

var TodoApp = React.createClass({
    getInitialState:function(){
     return {
         todo:[],
     }
    },

    addTodo:function(val){
    var arr = this.state.todo;
    arr.push(val);
    this.setState({
        todo:arr
     })
    },

    deleteTodo:function(idx){
     var arr = this.state.todo;
     arr.splice(idx,1);
     this.setState({
         todo:arr,
     }) 
    },

    updateTodo:function(val,idx){
    var arr = this.state.todo;
    arr[idx] = val;
    this.setState({
        todo:arr,
    })
    },

    eachTodo:function(todo,i){
    return <TodoList key = {i} index = {i} onDeleteTodo = {this.deleteTodo} onUpdateTodo = {this.updateTodo}>{todo}</TodoList>
    },
    

    render:function(){
        return (
            <div id = "react-div">
                <h1 className = "text-center">ToDo app</h1>
            <TodoForm onAdd = {this.addTodo}/>
            <ul className = "list-group">
            {this.state.todo.map(this.eachTodo)}
            </ul>
            </div>
        )
    }
})

module.exports = TodoApp