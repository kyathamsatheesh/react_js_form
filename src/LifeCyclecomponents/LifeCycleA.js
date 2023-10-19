import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Satheesh'
      }
      console.log('LifeCycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
      }
      shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
      }
      getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return true
      }
      componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
      }

      changeState = () => {
        this.setState({
            name: 'Codevalution'
        })
      }

  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
            <button onClick={this.changeState}>Change Status</button>
        <LifeCycleB/>
      </div>
      
    )
  }
  
}

export default LifeCycleA