import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:  '',
         comments:  '',
         topic: 'React'
      }
    }
    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlerCommetsChange   = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handlerTopicChange   = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handlerSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }

  render() {
    const { username, comments, topic } =   this.state
    return (
        <form onSubmit={this.handlerSubmit}>
            <div>
                <label>User Name</label>
                <input type='text' value={username} onChange={this.handlerUsernameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handlerCommetsChange}/>
            </div>
            <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handlerTopicChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Php">Php</option>
                </select>
            </div>
            <button>Submit</button>
        </form>

    )
  }
}

export default Form