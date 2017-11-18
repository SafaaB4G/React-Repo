import React , {Component} from 'react'
import EMPTY from './empty-list.png'

export default class ToDoListContainer extends Component {
 render (){


if (this.props.myTodos.length === 0 ){

return ( 
	<div className="todo-list-container">
            <h3>My todos:</h3>
              	<div className="empty">
                <img alt="" src={EMPTY} />
              </div>

          </div>
          
          )
}
return (


  <div className="todo-list-container">
            <h3>My todos:</h3>

            

          {this.props.myTodos.map((todo, i) => {
            return (

            <p key={todo.id} className="todo-item">
              <span>{todo.title}</span>
              <a href="#Delete" className="zmdi zmdi-delete" onClick={e => {

                  e.preventDefault();
                  this.props.onDelete(i)
              }}> </a>
            </p>


              )

          })}
          </div>
          )
      }
  }