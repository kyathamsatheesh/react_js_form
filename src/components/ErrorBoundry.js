import React, { Component } from 'react'

class ErrorBoundry extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }
  render() {
    if(this.state.hasError){
        return <h1>Somthing went wrong..</h1>
    }
    return this.state.children
  }
}

export default ErrorBoundry