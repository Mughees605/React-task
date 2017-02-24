import React from "react"
var {connect} = require("react-redux");
//import actions from  "../actions/index.js"
var actions = require("../actions/index")


var AddTodo = React.createClass({
    addTodo:function(e){
        e.preventDefault();
        var {dispatch} = this.props
      var input = this.refs.name.value;
      dispatch(actions.AddTodo(input));

    },
    render:function(){
        return (
          <form onSubmit = {this.addTodo}>
              <input type="text" ref = "name"/>
              <button>Add</button>
          </form>
        )
    }
})
export default connect()(AddTodo)