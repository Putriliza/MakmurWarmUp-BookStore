import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <p>Counter: {props.counter}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);