import React, { Component } from 'react'
import Card from './Extra/Card';
import './App.css'

class App extends Component {
  state = {
    arr: []
  }
  onSubmit = (event) => {
    var newvalue = event.target.elements.todotask.value;
    if (newvalue.length > 0) {
      this.setState({
        arr: [...this.state.arr, newvalue]
      })
      event.target.reset();
    }
    event.preventDefault();
  };
  DeleteSelectitem = (event) => {
    var e = event.target.parentElement.parentElement.children;
    console.log(this.state.arr);
    for (var li of e) {
      for (var input of li.children) {
        if (input.checked == true) {
          input.parentElement.remove();
        }
      }
    }
    event.preventDefault();
  };
  DeleteCard = (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.remove()
  }
  render() {
    return (
      <div className="App">
        <Card arr={this.state.arr} DeleteSelectitem={this.DeleteSelectitem} onSubmit={this.onSubmit} DeleteCard={this.DeleteCard}/>
      </div>
    )
  }
}

export default App;