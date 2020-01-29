import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { registerusers } from "../utils/Services";

import styled from "styled-components";

const Container = styled.nav`
  margin: auto;

  background-size: cover;
  .Wrapper {
    justify-content: center;
    margin: 100px;
  }
  .RegisterTitle {
  }
`;

class Register extends Component {
  state = {
    name: "",
    email: "",
    alamat: "",
    password: ""
  };

  onSubmit(e) {
    e.preventDefault();
    console.log("====================================");
    console.log("masuk");
    console.log("====================================");

    const userData = {
      name: this.state.name,
      alamat: this.state.alamat,
      email: this.state.email,
      password: this.state.password
    };

    registerusers(userData, this.props.history);
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
            <h1 className="display-4">Register</h1>
            <p className="lead">
              Register Di gunakan untuk mendaftarkan diri untuk bisa menjadi
              user di dalam sistem informasi
            </p>
            <Link to="/Login" classNameName="card-link">
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="Wrapper">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group">
              <label for="exampleInputEmail1">Nama</label>
              <input
                type="text"
                name="name"
                onChange={e => this.onChange(e)}
                value={this.state.name}
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="email"
                onChange={e => this.onChange(e)}
                value={this.state.email}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Alamat</label>
              <input
                type="text"
                name="alamat"
                onChange={e => this.onChange(e)}
                value={this.state.alamat}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                onChange={e => this.onChange(e)}
                value={this.state.password}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Regsiter
            </button>
          </form>
        </div>
      </Container>
    );
  }
}

export default withRouter(Register);
