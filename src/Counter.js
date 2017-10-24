import React, {Component} from "react";
class Counter extends Component{
  //Mounting
  constructor(props){
    super(props);
    console.log("constructor", "props: ", props)
  }

  //Mounting
  componentWillMount(){
    //this get fired before render methods
    console.log('componentWillMount fired')
  }


  //Mounting
  componentDidMount(){
    //for setState AND fetch data for api or our json file
    console.log("componentDidMount fired")
  }
  //UPDATING
componentWillReceiveProps(nextProps) {
  //WHEN COMPONENT WILL RECEIVE NEW PROPS FROM PARENT
  console.log("componentWillReceiveProps fired, nextProps:", nextProps);
}

//UPDATING
shouldComponentUpdate(nextProps, nextState) {
  // LET REACT KNOW IF A COMPONENT'S OUTPUT IS NOT AFFECTED BY THE CURRENT CHANGE IN STATE/PROPS
  console.log("shouldComponentUpdate fired");
  return true;
}

//UPDATING
componentWillUpdate(nextProps, nextState) {
  // WHEN THERE IS A CHANGE IN STATE AND THE COMPONENT WILL RE-RENDER AND CAN COMPARE NEW PROPS/STATE WITH CURRENT STATE/PROPS
  console.log(
    "componentWillUpdate, nextProps:",
    nextProps,
    " nextState:",
    nextState
  );
}

//UPDATING
componentDidUpdate(prevProps, prevState) {
  //WHEN THE COMPONENT RE-RENDERED AND CAN COMPARE PREVIOUS PROPS/STATE WITH NEW STATE/PROPS
  console.log(
    "componentDidUpdate, prevProps:",
    prevProps,
    " prevState:",
    prevState
  );
}
render() {
  console.log("render fired");
  return (
    <div>
      Counter value: {this.props.counter}
    </div>
  );
}
}

export default Counter;
