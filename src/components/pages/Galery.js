import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  padding: 0;
  margin: 30px;
  border-radius: 10px;
  max-width: 100%;
  grid-auto-flow: dense;
  display: grid;
  grid-template:
    "1fr 1fr 1fr 1fr 1fr" 33.33vh
    "1fr 1fr 1fr 1fr 1fr" 33.33vh
    "1fr 1fr 1fr 1fr 1fr" 33.33vh;

  grid-gap: 1px;

  .box {
    position: relative;
    background-color: grey;
  }
  .box.a {
    grid-row: span 2;
  }
  .box.c,
  .box.f,
  .box.h,
  .box.b {
    grid-column: span 2;
  }
  .jumbotron {
    background-color: black;
    background-size: cover;
  }
`;
export default class Galery extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Galery</h1>
            <div className="glyphicon glyphicon-plus"></div>
            <p className="lead">
              Galery Foto Burung Kenari lengkap dengan banyak variasi warna dan
              jenis
            </p>
          </div>
        </div>
        <Container>
          <div className="box a">a</div>
          <div className="box b">b</div>
          <div className="box c">c</div>
          <div className="box d">d</div>
          <div className="box e">e</div>
          <div className="box f">d</div>
          <div className="box g">b</div>
          <div className="box h">c</div>
          <div className="box i">d</div>
          <div className="box j">e</div>
        </Container>
      </div>
    );
  }
}
