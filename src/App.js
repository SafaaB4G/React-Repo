import React,{ Component } from 'react'; // importer react
import Header from './Header'
import ToDoListContainer from './ToDoListContainer'
import AddToDoListContainer from './AddToDoListContainer'

class App extends Component {

	state = {

		todos: [{id : 1 , title : 'im done' , isDone : false},
				{id : 2 , title : 'im new ' , isDone : true},
				{id : 3 , title : 'im old' , isDone : false},]
	}


deleteTodo = (index) => {

	this.setState({

		todos : this.state.todos.filter((todo , i) => i !== index)
	})
}

addNewTodo = (content) => {

	this.setState({
		todos : this.state.todos.concat({

			id : this.state.todos.length + 1 ,
			title : content,
			isDone : false 

		})



	})
}
 render() {
 	return(


<div className="container">

        <Header/>

        <div className="sub-container">

          <ToDoListContainer myTodos = {this.state.todos} onDelete = {this.deleteTodo}/>

          <AddToDoListContainer  onAddTodo = {this.addNewTodo}/>

        </div>
      </div> 		)



        
     }


}

export default App;