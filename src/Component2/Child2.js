import React, { Component } from 'react'

export default class Child2 extends Component {
  render() {
    return (
      <>
      <div>{this.props.temp.id}</div>
      <div>{this.props.temp.Post}</div>
      </>
    )
  }
}

