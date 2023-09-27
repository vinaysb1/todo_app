import React, { Component } from 'react'
import Child2 from './Child2'

export default class Child1 extends Component {
  CallAjja = ()=>{this.props.event1("Arush")}
  render() {
    return (
     <><ul>
        {this.props.user1.id}  <br></br> 
        {this.props.user1.Ename}  
        </ul> 
        <button onClick={this.CallAjja}>call ajja</button>
        <Child2 temp ={this.props.user1}/>
      </>
    )
  }
}

