import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { loginuser } from "../utils/Services";

import styled from "styled-components";

const Container = styled.nav`
  margin: auto;

  background-size: cover;
  .jumbotron {
    background-image: url("https://www.maroubrasynagogue.org.au/wp-content/uploads/2016/04/my-account-banner.jpg");
    background-size: cover;
  }
  .Wrapper {
    justify-content: center;
    margin: 100px;
  }
`;

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmit(e) {
    e.preventDefault();
    console.log("====================================");
    console.log("masuk");
    console.log("====================================");

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    loginuser(userData, this.props.history);
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 style={{ color: "white" }} className="display-4">
              Login
            </h1>
            <p style={{ color: "white" }} className="lead">
              Login Di gunakan untuk mendaftarkan diri untuk bisa menjadi user
              di dalam sistem informasi
            </p>
          </div>
        </div>
        <div className="Wrapper">
          <div>
            <form onSubmit={e => this.onSubmit(e)}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={e => this.onChange(e)}
                  value={this.state.email}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={e => this.onChange(e)}
                  value={this.state.password}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
