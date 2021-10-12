import React, { Component } from "react";
//import axios from "axios"; // new
class App extends Component {
  state = {
    todos: [],
  };
  // new
  componentDidMount() {
    this.getTodos();
  }

  // new
  getTodos() {
    fetch("http://127.0.0.1:8000/api")
      .then((response) => response.json())
      .then((res) => {
        //        console.log("res", res);
        this.setState({ todos: res });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.todos.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
