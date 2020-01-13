import React from 'react';
import Filter from './components/Filter';
import SelectedOptions from './components/SelectedOptions';

const App = (props) => {
  return (
    <div className="App">
      <Filter state={props.state} dispatch={props.dispatch} />
      <SelectedOptions state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;