import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super () 

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(val){
    this.setState({picture: val})
  }

  updateName(val){
    this.setState({name: val})
  }

  addFriend(){
    let friend = {
      name: this.state.name,
      picture: this.state.picture
    }
    this.setState({
      friends: [...this.state.friends, friend],
      name: '',
      picture: ''
    })
  }

  render() { 
    const friends = this.state.friends.map((friends, index) => {
      return (
        <div key={index}>
          <span>{friends.name}</span>
          <br/>
          <img src={friends.picture} alt='profile image' width='200' height='200'/>
        </div>
      )
    })
    return (
      <div className="App">
        <p>Picture:</p>
        <input 
          onChange={(e) => this.updatePicture(e.target.value)} 
          type='text' 
          value = {this.state.picture}/>
        <p>Name:</p>
        <input 
          onChange={(e) => this.updateName(e.target.value)} 
          type='text'
          value = {this.state.name}/>
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
