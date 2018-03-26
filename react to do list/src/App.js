import React, { Component } from 'react';
import './App.css';
import Item from "./Item"

class App extends Component {
  // state holds the data specific to that component
  //we must first initialize state, it must be created before we can change it/edit it/whatever....
  constructor(){
    super();

    this.state = {
      list: ['Learn React', 'Rule The World', 'Master the potty'],
      inputValue: '',
    }
    //binding happens inside the constructor function but outside/below state
    //if you are passing a funtion through props, you must ALWAYS BIND
    this.saveToList = this.saveToList.bind(this)
    this.saveInputValue = this.saveInputValue.bind(this)
  }
  saveInputValue(e){
    //set state is a method that takes an object as an argument that object should havw the property name on state that you want to update
    //the value should be the value you want to change it to.
    this.setState({
      inputValue: e.target.value
    })
  }

saveToList(){
  let newArr = this.state.list.slice(0);
  newArr.push(this.state.inputValue);
  this.setState({
    list: newArr,
    inputValue: ''
  })
}

  render() {
    let newList = this.state.list.map((val, i) =>{
      return (
        <div>
          <input type="checkbox"/>
          <h1>{val}</h1>
        </div>
      )
    })
    return (
      <div className="App">
      
      <input 
        type="text" 
        placeholder='Add new item...'
        onChange={this.saveInputValue}
        value={this.state.inputValue}
      />
      <Item save={this.saveToList}/>
      {newList}
      </div>
    );
  }
}

export default App;
