import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    //Short Cercuit Approch
    return this.state.isLoggedIn && <div>Welcome Satheesh Kyahtam</div>

    //Ternary approch
    // return(
    //     this.state.isLoggedIn?
    //     <div>Welcome Satheesh Kyahtam</div>:
    //     <div>Welcome Guest</div>
    // )

    // Element Variable Approch
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Satheesh Kyahtam</div>
    // }
    // else {
    //     message=<div>Welcome Guest</div> 
    // }
    // return message

    //If else approch
    // if(this.state.isLoggedIn)
    // {
    //     return <div>Welcome Satheesh Kyahtam</div>
    // }
    // else
    // {
    //     return <div>Welcome Guest</div>    
    // }


    // return (
    //   <div>
    //     <div>Welcome Satheesh Kyahtam</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting