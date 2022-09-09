import React from 'react'


class Form extends React.Component{

  constructor() {
    super()
    this.state = {
      input: ''
    }
  }


  handleSubmit = (event)  => {
    event.preventDefault()
    this.props.handleAdd(this.state.input)
  }//now each time I hit submit it will make a new item, 
  // I am able to accesss 'handleAdd' because i am passing it in through props 
  //on the App.js pagge


  handleChange = (e) => {
    this.setState({
      ...this.state, 
      input: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input onChange={handleChange}/>
        <button onClick={this.handleSubmit}>Add</button>

      </form>
    )
  }
}

export default Form

