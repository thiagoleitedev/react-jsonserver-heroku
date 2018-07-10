import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    data: [],
    error: null,
    loading: true
  };

  componentDidMount() {
    fetch("/api/posts")
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error,
          loading: false
        });
      });
  }

  renderPosts() {
    const { data, loading } = this.state;

    if (loading) {
      return <p>loading...</p>;
    }
    return (
      <ul>
        {data.map(post => (
          <li>
            <b>title:</b> {post.title}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.renderPosts()}</p>
      </div>
    );
  }
}

export default App;
