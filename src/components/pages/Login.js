import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { loginuser } from "../utils/Services";

import styled from "styled-components";

const Container = styled.nav`
  min-height: 100vh;
  overflow-y: hidden;
  .title {
    margin-top: 100px;
    text-align: center;
    background-color: #007bff;
    padding: 10px;

    color: white;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .cover {
    padding: 1rem 2rem;
    height: 330px;
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
        <div className="bigCover">
          <div className="title">
            <h4>Login</h4>
          </div>
          <div className="cover">
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
              <button
                type="submit"
                class="btn btn-primary"
                style={{ width: "100%" }}
              >
                Login
              </button>
              <p style={{ textAlign: "center", marginTop: 50 }}>
                Belum Daftar ?{" "}
                <span>
                  <Link to="/Register" className="card-link">
                    <a className="GoesTo">Daftar Disini</a>
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
