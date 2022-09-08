import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: todos
    }
  } 
  //when we are dealing with state we need a consturtor. 


  addTodo = (e, todo) => {
    e.preventDefault()
    const newTodo ={
      name: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo]})
  }

  toggleTodo = todoId => {
    this.setState({...this.state, todos: this.state.todos.map(todo => {
      if(todo.id === todoId){
        return {...todo, completed: !todo.completed}
      }
      return todo
    })})
  }

  clearCompleted = () => {
    this.setState({...this.state, todos: this.state.todos.filter(todo => {
      if(!todo.completed) return todo
    })})
  }

  //code below here is all static exept for the todos ul part, 
  //to make that not static we use state
  render() {
    const { todos } = this.state
   
    return (
      <div>

        <h1>Todos</h1>

        <ul>
        

        </ul>

        <form>
          <input />
          <button> Add</button>
        
        </form> 

        <button>Clear </button>

       {/*NEXT TIME YOU BUILD IT OUT YOU SHOULD DO THIS SCALFOLDING FIRST^^^ */}
        <Form addTodo={this.addTodo}/>

        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
       
        <button onClick={this.clearCompleted}>Clear</button>
       
      </div>
    )
  }
}
