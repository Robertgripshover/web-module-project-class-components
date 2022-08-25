import React from 'react'
import Todo from './Todo'


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
  //when we are dealing with state we need a consturtor. 

  //code below here is all static exept for the todos ul part, 
  //to make that not static we use state
  render() {
    const { todos } = this.state
    console.log(todos)

    return (
      <div>

        <h1>Todos</h1>
        <ul>
          {
            todos.map(todo => {
              return (<Todo todo={todo}/>)
            })//this is maping over the todos array and making an individual "todo" for each item
          }
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
       
      </div>
    )
  }
}
