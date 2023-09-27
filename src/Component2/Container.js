import React, { Component } from 'react'
import Child1 from './Child1'

export default class Container extends Component {
    state = {
        User:{
            id:2,
            Ename:"Vinay",
            Post:"Developer"
        }
    }
    ajja = (child)=>{console.log(`${child} called ajja`)}
  render() {
    return (
      <>
        <h1>Container</h1>
        <Child1 user1 = {this.state.User} event1 ={this.ajja}/>
        </>
    )
  }
}
