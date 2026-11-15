// @ts-nocheck
import React, { Component } from "react";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeDetail = () => {
    this.setState({
      color: "blue",
      brand: "Tesla",
      model: "Model S",
      year: 2023,
    });
  };

  componentDidMount() {
    console.log("1. ComponentDidMount: Komponent ekranga chiqdi!");
    // runs after first render: => RETRIVE DATA FROM BACKEND
  }

  componentDidUpdate() {
    console.log("2. componentDidUpdate: Ma'lumot yangilandi!");
    // Runs when component updates
  }

  componentWillUnmount() {
    console.log("3. componentWillUnmount: Komponent ekrandan o'chirildi!");
    // RUNS BEFORE COMPONENT UNMOUNT
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          Color: {this.state.color} - Model: {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeDetail}>
          Change Detail
        </button>
      </div>
    );
  }
}

export default Test;
