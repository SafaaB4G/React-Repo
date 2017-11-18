import React , {Component} from 'react'

export default class AddToDoListContainer extends Component {

render(){

	return (
<div className="add-todo-container">
            <h3>Add new Todo:</h3>
            <form onSubmit={ event => {
            	event.preventDefault();
            	const content = this.refs.myTextArea.value;
            	//validate
            	this.props.onAddTodo(content);
            	this.refs.myTextArea.value = "";

            }}>
              <textarea ref = "myTextArea" placeholder="my todo content"></textarea>
              <button type="submit"><i className="zmdi zmdi-plus"></i> Add new todo</button>
            </form>
          </div>
          )

      }}