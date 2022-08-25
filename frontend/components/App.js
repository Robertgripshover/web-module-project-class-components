import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        
        <h1>Todos</h1>
        <ul>
          <li>brush Stella teeth</li>
          <li>Make dinner</li>
          <li>work out</li>
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
