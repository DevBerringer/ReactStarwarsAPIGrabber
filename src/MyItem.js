import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      clicks: 0,
      totalRemaining: 100
    }
  }
  
  clickMe() {
    console.log("I clicked", this.props.name)
    this.setState({
      clicks: this.state.clicks + 1,
      totalRemaining: this.state.totalRemaining - 1
    })
  }
  
  render() {
      return (
        <div>
        <h1 onClick={() => this.clickMe()}> 
        Hello from {this.props.name} And I love {this.props.name2} </h1>
        <span>{this.state.clicks} is the number of clicks</span>
        <br></br>
        <span>{this.state.totalRemaining} is the number of clicks remaining</span>

        </div>
      )
    }
  }

  export default Item;