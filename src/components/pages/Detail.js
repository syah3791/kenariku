import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Container = styled.nav`
  max-width: 100%;
  margin: auto;

  .card-img {
    margin: 20px;
    margin-top: 80px;
  }
  .rounded-circle {
    margin-left: 70px;
    margin-top: 50px;
    object-fit: fill;
  }
  .card-title {
    text-align: left;
  }
  .card-text {
    text-align: left;
  }
`;

export default class Detail extends Component {
  render() {
    return (
      <Container>
        <div classNameName="wrapper">
          <div className="card mb-10">
            <div className="row no-gutters">
              <div style={{ marginLeft: 50 }} className="col-md-5">
                <Carousel showStatus={false} width="350px">
                  <div>
                    <img src="https://omkicau.com/wp-content/uploads/2013/04/american-singer-canary.jpg?w=300" />
                  </div>
                  <div>
                    <img src="https://omkicau.com/wp-content/uploads/2013/04/american-singer-canary.jpg?w=300" />
                  </div>
                  <div>
                    <img src="https://omkicau.com/wp-content/uploads/2013/04/american-singer-canary.jpg?w=300" />
                  </div>
                </Carousel>
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h1 className="card-title">Kenari Loper </h1>

                  <hr></hr>
                  <p className="card-text">
                    1.8 – 2.0 kg Dipelihara hanya dengan menggunakan pakan
                    <br></br>
                    individu dan program manajemen ternak eksklusif kami
                    <br></br>
                    ayam pedaging kami terkenal memiliki kualitas<br></br>
                    berat dan ukuran yang seragam, serta hasil karkas yang
                    <br></br>
                    terjamin kualitas dan kesegarannya, cocok untuk segala jenis
                    <br></br>
                    masakan
                  </p>
                  <p>Jenis :Lovebird</p>
                  <hr></hr>
                  <p>Umur : 6 bulan</p>
                  <hr></hr>
                  <p>Warna : Biru</p>
                  <hr></hr>
                  <p>Jenis kelamin : Jantan</p>
                  <hr></hr>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
