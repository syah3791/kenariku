import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px;
  .rounded-circle {
    margin: 50px;
  }
`;

export default class Cards extends Component {
  render() {
    return (
      <Container>
        <div className="text-center">
          <img
            className="rounded-circle"
            src="https://omkicau.com/wp-content/uploads/2013/04/american-singer-canary.jpg?w=300"
            alt="Generic placeholder image"
            width="140"
            height="140"
          ></img>
          <h2 className="Title">Kenari Loper</h2>

          <p>Berkualitas tinggi</p>
          <p>3 Bulan</p>
          <p>Betina</p>
          <p>Suara Melengking</p>
          <p>
            <Link to="/detail" className="card-link">
              <button type="button" className="btn btn-warning">
                See More
              </button>
            </Link>
          </p>
        </div>
      </Container>
    );
  }
}
