import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      text: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/news")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          text: result.text,
        });
      });
  }

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default Api;
