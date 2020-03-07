import React, { Component } from "react";
import axios from "axios";

import Smurf from './Smurf';
import "./App.css";
class App extends Component {
  constructor(){
    super();
    this.state = {
      smurfs: [{}]
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs:res.data }))
      .catch(err => {console.log("error: ", err)})
  }
  render() {
    return (
      <div className="App">
        {this.state.smurfs.map(smurf => {
          return (
            <Smurf 
              key={smurf.id}
              name={smurf.name}
              age={smurf.age}
              height={smurf.height}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
