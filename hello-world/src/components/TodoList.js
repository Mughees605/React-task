import React from "react";
var {connect} = require("react-redux");

var TodoList = React.createClass({
    handleList:function(){
        return this.props.todos.map(function(val,i){
            return <li key = {i}>{val.text}</li>
        })
    },
  
    render:function(){
          var {todos} = this.props
        return (
            <div>
                {this.handleList()}
            </div>
        )
    }
})
module.exports = connect(
    (state)=>{
        return {
            todos:state.todos
        }
    }
)(TodoList);