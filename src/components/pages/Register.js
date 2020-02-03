import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { registerusers } from "../utils/Services";

import styled from "styled-components";

const Container = styled.nav`
  min-height: 100vh;
  overflow-y: hidden;
  .title {
    margin-top: 40px;
    text-align: center;
    background-color: #007bff;
    padding: 10px;

    color: white;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .cover {
    padding: 1rem 2rem;
    height: 450px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .bigCover {
    margin: auto;
    width: 35%;
    box-shadow: 5px 0px 18px #888888;
    size: 1000vh;
    border-radius: 15px;
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
        <div className="bigCover">
          <div className="title">
            <h4>Register</h4>
          </div>

          <div className="cover">
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
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", marginTop: 20 }}
              >
                Regsiter
              </button>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Register);
