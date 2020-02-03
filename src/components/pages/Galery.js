import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GaleryCards from "../layouts/GaleryCards";
import { Howl } from "howler";
import {
  Container,
  Button,
  Link,
  lightColors,
  darkColors
} from "react-floating-action-button";
const Contaner = styled.nav`
  padding: 0;

  max-width: 100%;
`;
const audioClips = [
  {
    sound: "http://www.cityhallrecords.com/samples/audio/725543506023S1.mp3",
    label: "play"
  }
];
export default class Galery extends Component {
  soundPlay = src => {
    const sound = new Howl({
      src,
      html5: true
    });
    sound.play();
    sound.stop();
  };
  renderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      return (
        <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      );
    });
  };
  render() {
    return (
      <Contaner>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/18/49/vintage-1283575_960_720.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/18/49/vintage-1283575_960_720.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/18/49/vintage-1283575_960_720.jpg"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i2.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Border.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i0.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Yorkshire.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Norwich.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Roller.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Gloster.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i0.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Frill.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i0.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Lancashire.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i0.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Crest.jpg?w=600&ssl=1"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i2.wp.com/www.hewan.id/wp-content/uploads/2017/04/Jenis-Kenari-Lizard.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Spanish-Timbrado.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i2.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-American-Singer.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Rusia.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Waterslager.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Stafford.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i1.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Cinnamon.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i2.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Color-Bred.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i2.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Red-Factor.jpg?resize=600%2C400"
                />
              </div>
              <div class="col-md-4">
                <GaleryCards
                  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  picture="https://i0.wp.com/www.hewan.id/wp-content/uploads/2017/04/Kenari-Gibber-Italicus.jpg?resize=600%2C400"
                />
              </div>
            </div>
            <Container>
              <Link
                href="#"
                styles={{
                  backgroundColor: "#007BFF",
                  color: lightColors.white
                }}
                tooltip="Add Album"
                icon="fa fa-eye"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                className="fab-item btn btn-link btn-lg text-white"
              ></Link>

              <Button
                styles={{
                  backgroundColor: "#007BFF",
                  color: lightColors.white
                }}
                tooltip=""
                icon="fa fa-plus"
                rotate={true}
                // onClick={() => alert("Tambahkan Album")}
              />
            </Container>
          </div>
        </div>
      </Contaner>
    );
  }
}
