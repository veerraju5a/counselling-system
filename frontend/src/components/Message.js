import React, { Component } from 'react'

class Message extends Component {
    constructor() {
      super()
    
      this.state = {
         message: 'Welcome to Visitor'
      }
    }
    changeMessage(){
        this.setState({
          message: 'thank for subscribing'  
        })
    }
  render() {
    return (
      <div>
        <center>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </center>
      </div>
    )
  }
}

export default Message