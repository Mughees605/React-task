import React from 'react';
//import ReactDOM from 'react-dom';


var TodoForm = React.createClass({
    handleAddTodo:function(e){
        e.preventDefault();
       var value = this.refs.name.value;
       if(value.length > 0){
           this.props.onAdd(value);
           this.refs.name.value = "";
       }
    },
    render:function(){
        return (
            <form onSubmit = {this.handleAddTodo} className = "form-inline text-center">
                <div className = "form-group">
                  <input type="text" ref = "name" className = "form-control" />
                </div>
                <button className = "btn btn-primary">Add</button>
            </form>
        )
    }
});

module.exports = TodoForm;