import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {counter: state.counter};
};

const mapDispatchToProps = dispatch => {
  return {
    IncrementCtr: () => dispatch({type: "INC_COUNTER"}),
    DecrementCtr: () => dispatch({type: "DEC_COUNTER"}),
    AddCtr: (number) => dispatch({type: "ADD_COUNTER+", value: number}),
    SubtractCtr: (number) => dispatch({type: "SUB_COUNTER-", value: number})
  }
}

function App(props) {

  return (
    <div className="App">

  <div >{props.counter}</div>

      <div>
        <button onClick={props.IncrementCtr}>Increase</button>
        <button onClick={props.DecrementCtr}>Declease</button>
        <button onClick={()=> props.AddCtr(5)}>+ 5</button>
        <button onClick={()=> props.SubtractCtr(5)}>- 5</button>
      </div>

    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
