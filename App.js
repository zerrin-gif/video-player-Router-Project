import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Video from './Video';
import Menu from './Menu';



class App extends React.Component {


  render() {
  
    return (
      <div className="card">
        <h1>Video Player</h1>
        <Menu />
        
      </div>
    );
  }
}

export default App;