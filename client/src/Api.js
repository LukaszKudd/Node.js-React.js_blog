import React, { Component } from "react";

class Api extends Component {
  componentDidMount() {
    fetch("http://localhost:9000/news").then((res) => console.log(res.json()));
  }

  render() {
    return <div>Elo</div>;
  }
}

export default Api;
