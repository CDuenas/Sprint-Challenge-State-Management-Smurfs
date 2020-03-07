import React, { Component } from "react";
import axios from "axios";
import SmurfContext from '../SmurfContext';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
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
    const { name, age, height, id } = this.state.smurfs;

    const changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
      e.preventDefault();
      axios
        .post("http://localhost:3333/smurfs", this.state)
        .then(res => this.setState({ smurfs:res.data }))
        .catch(err => {console.log("error: ", err)})
    };

    return (
      <div className="App">
        <SmurfContext.Provider value={{
          name: name,
          age: age,
          height: height,
          id: id,
          changeHandler: changeHandler,
          submitHandler: submitHandler
        }}>
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
          <SmurfForm />
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
