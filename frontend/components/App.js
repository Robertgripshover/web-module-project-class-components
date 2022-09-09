import React from 'react'
import TodoList from './TodoList'
import Form from './Form'


export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      todos: [
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
    }
  } 






  //LOOK!!! vvv
  //LOOK!!! vvv
  //LOOK!!! vvv
  //LOOK!!! vvv
  //I think lookking at this handleAdd custom function is 
  //going to let me be able to just make a new board each time 
  //I hit a key!!! :) on the Sprint >>> 
 // vvvvvvvvvvvvvvvvvv
  handleAdd = (task) => {
    //1. I want to set the state
    //2. change todos, with our new stuff
    //3. make a copy of todos
    //4. add a new todo to the end of our todo list

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newTodo] //taking old state and adding the new one
    })
  }
  //this is handling the actual change in our data, 
  //this might be useful for the Sprint, since it is chaning what data is there
  



  handleClear = () => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }
    //^^^ what I did
    //1. setState (we are modifying the task)
    //2. loop through all todos
    //3. remove all todos that have completed === true
    //4. save filtered todos to state
    // so basically this setState part is taking the todos and filtering out a particular one


  handleToggle = () => {
    //1. setState
    //2. change todos
    //3. find the todo that we clicked on
    //4. flip the value of completed for that todo
    //5. keep all other todos the same
    const clickedId = 1528817084358

    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if(todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }


 
  render() {
    const { todos } = this.state
   
    return (
      <div>

        <h1>Todos</h1>

        <TodoList handleToggle={this.handleToggle} todos={todos}/>
       
        <Form handleAdd={this.handleAdd}/>

        <button onClick={this.handleClear}> Clear </button>
       
      </div>
    )
  }
}
