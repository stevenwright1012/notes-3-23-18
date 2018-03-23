import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./Item"

class App extends Component {
  // state holds the data specific to that component
  //we must first initialize state, it must be created before we can change it/edit it/whatever....
  constructor(props){
    super(props);

    this.state = {
      list: ['Learn React', 'Rule The World', 'Master the potty'],
      inputValue: '',
    }
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
        <div key={i + val}>
          <input type= "checkbox" />
          <p>{val}</p>
        </div>
      );
    });
    return (
      <div className="App">
      <Item />
      <input 
        type="text" 
        placeholder='Add new item...'
        onChange={(event) => this.saveInputValue(event)}
        value={this.state.inputValue}
      />
      <button onClick ={() => this.saveToList()}>Add Item</button>
      {newList}
      </div>
    );
  }
}

export default App;
