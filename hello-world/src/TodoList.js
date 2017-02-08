import React from 'react';
//import ReactDOM from 'react-dom';

var TodoList = React.createClass({
    getInitialState:function(){
        return {
            edit : false,
        }
    },
handleDeleteTodo:function(){
this.props.onDeleteTodo(this.props.index);
},
handleEdit:function(){
 this.setState({
     edit:true
 })
},
    renderDisplay:function(){
        return (
           <li className = "list-group-item">
               {this.props.children}
               <button onClick = {this.handleDeleteTodo} className = "btn btn-info text-right">delete</button>
               <button onClick = {this.handleEdit} className = "btn btn-danger text-right">edit</button>
           </li>

        )
    },
    handleUpdateTodo:function(e){
        e.preventDefault()
     var update = this.refs.update.value;
     this.props.onUpdateTodo(update,this.props.index);
     this.setState({
         edit:false,
     })
    },
    renderForm:function(){
        return (
            <form onSubmit = {this.handleUpdateTodo} className = "form-inline text-center">
                <div className = "form-group">
                    <input type = "text" ref = "update" className = "form-control"/>
                </div>
                <button className = "btn btn-default">save</button>
            </form>
        )
    },
    render:function(){
        if(this.state.edit){
            return this.renderForm()
        }
        else {
            return this.renderDisplay()
        }
    }
})
module.exports = TodoList;