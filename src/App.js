import React, { Component } from 'react';
import logo from './logo.svg';
import MyComponent from './MyComponent';
import List from './List';
import DottedBox from './DottedBox';
import Box from './Box'
import Counter from './Counter'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: '',
      //term is to store what we are passing as a value to our input
      items: [],
      //items is to store every value which we are passing to our todo list
      clicks: 0,
      //click to store how many times we click on button
      show: true,
      //show to set value to true or false depending if want to see number or not
      term1: '',
      //store current value which we are passing to input
      img: '',
      //store url which late we will be passing to <img src={url}/>
      counter: 0
    };
  }
  //values takes what is stores in our state as term
  //onChange is a function which changes our state depending on the current
  //input value
  //to change state, we need to use the this.setState() method which also triggers UI update
  onChange = (e) => {
    this.setState({term: e.target.value});
  }
  //onSubmit does three things
  //1> cleans the input field after a submit action is triggered by resetting term to the initial empty string value
  //2> pushes every term to out aray of the items
  //3> preventDefault() method stops the default action of an element from happening
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  incrementItem = () => {
    this.setState({clicks: this.state.clicks+1})
  }
  decrementItem = () => {
    this.setState({clicks: this.state.clicks-1})
  }
  toggleClick = () => {
    this.setState({show: !this.state.show})
  }

  onChange1 = (e) => {
    this.setState({term1: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const api_key = 'PBJG0B02SQ7T';
    const url = `https://api.tenor.com/v1/search?key=${api_key}&q=${this.state.term1}&limit=10`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({term1: '', img: data.results[0].media[0].mediumgif.preview}))
      .catch(e => console.log("error", e));
  }
  /*
  Fetch a data from giphy api using fetch method with promises which is very simple to use. You also can use axios. Great articles about axios here and here
  first you need resolve with json (what is very important)
  then you have your access to json data which you can use to update state
  last thing is catch error
  */
  incrementCounter = () => {
    this.setState({counter: this.state.counter+1})
  }
  //toggleClick we flip our state show for opposite every time we click
  render() {
    return (
      <div>
        <h1>1) List</h1>
          <List items={this.state.items}/>
          <form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        <hr></hr>
          <h1>2) Numbers</h1>
          <button onClick={this.incrementItem}>Add 1</button>
          <button onClick={this.decrementItem}>Subtract 1</button>
          <button onClick={this.toggleClick}>
            {this.state.show ? "Hide Number" : "Show Number"}
          </button>
          {this.state.show ? <h2>{this.state.clicks}</h2> : <p></p>}
        <hr></hr>
        <h1>3) API </h1>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.term1} onChange={this.onChange1}/>
            <button>Search!</button>
          </form>
          <img src={this.state.img} alt={this.state.img}/>
        <hr></hr>
        <h1>4) Style</h1>
          <DottedBox/>
          <Box/>
        <hr></hr>
          <h1>5) The React Component Lifecycle</h1>
          <Counter counter={this.state.counter} />
          <button onClick={this.incrementCounter}>Click1</button>
        <hr></hr>
      </div>

    );
  }
}

export default App;
