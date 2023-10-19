import React, { Component } from 'react'

export class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:"Goodbye!"
    //     })
    //     console.log(this);
    // }

    // 4th Approch
    clickHandler= ()=> {
        this.setState({
            message:"Goodbye!"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
       {/*Approch 1 - Binfing in render <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Approch 2 - arrow functions */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Approch 3 - binding in class constructor */}
        {/* Approch 3 or 4 better as per react documentation */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Eventbind