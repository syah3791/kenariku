import React, { Component } from "react";

import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { withRouter, Link } from "react-router-dom";
import api from "../utils/ServicesImage";

const Container = styled.nav`
  margin-bottom: 100px;
  box-sizing: border-box;
  margin: 0;

  .jumbotron {
    background-size: cover;
  }
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
  .videoCover {
    box-shadow: 5px 0px 18px #888888;
    border-radius: 100px;
    border-radius: 15px;
    size: 100vh;
    width: 800px;
    height: 360px;
    background-color: grey;
    margin: auto;
  }
`;

export default class Koleksi extends Component {
  state = {
    path: "http://localhost:5000/img/",
    judul: window.location.search.substring(1),
    data: []
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    var query = window.location.search.substring(1);
    await api.getImage(query).then(image => {
      this.setState({
        data: image.data.data
      });
    });
  };
  
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    var query = window.location.search.substring(1);
    api.getImage(query).then(image => {
      this.setState({
        data: image.data.data
      });
    });
  };

  onChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  add = async e => {
    e.preventDefault();
    if (this.state.image) {
      const payload = {
      judul: this.state.judul,
      image: this.state.image
    };

    await api.insertImage(payload).then(res => {
      window.alert(`Collection successfully`);
      this.getDataFromDb();
    });
    }else window.alert(`Tambahkan gambar`);
  };

  deleteData = async () => {
    await api.deleteGById(this.state.idUp).then(res => {
      window.alert(`Bird deleted successfully`);
      this.getDataFromDb();
    });
    //registerburung(burungData);
  };

  uploadImage = async ({ target }) => {
    var image = document.getElementById(target.name).files[0];
    var formdata = new FormData();
    formdata.append("files", image, image.name);
    await api.uploadImg(formdata).then(res => {
      if (res.data.success) {
        window.alert("Gambar " + target.name + " berhasil di upload");
        this.setState({
          [target.name]: res.data.data
        });
      } else {
        window.alert(res.data.data);
      }
    });
  };
  preview  = async ({ target }) =>{
    var output = document.getElementById("output"+target.id);
    output.src = URL.createObjectURL(target.files[0]);
  }
  fileSelectedHandler = e => {
    this.setState({ files: [...this.state.files, ...e.target.files] });
  };
  render() {
    const { data } = this.state;
    return (
      <Container>
        <section class="jumbotron text-center">
          <div class="container">
            <h1>Kenari Gunung</h1>
            <p class="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Tambah Gallery
            </button>

            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content" closeModal={this.closeModal}>
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Gallery Burung
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div
                        style={{ justifyContent: "center" }}
                        className="form-row"
                      >
                        <div className="form-group col-md-3">
                          <label for="inputCity">Gambar Burung</label>
                          <input type="file" id="image" onChange={e => this.preview(e)}/>
                          <img id="outputimage" width="100px" height="100px"/>
                          <div class="form-group">
                            <button
                              type="button"
                              name="image"
                              class="btn btn-primary"
                              onClick={e => this.uploadImage(e)}
                            >
                              Upload
                            </button>
                        </div>
                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          data-dismiss="modal"
                          className="btn btn-success"
                          onClick={e => this.add(e)}
                        >
                          Tambahkan
                        </button>
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h3 style={{ textAlign: "center", margin: 30 }}>Album </h3>
        <div
          class="row"
          style={{ margin: "auto", width: "100%", justifyContent: "center" }}
        >{data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map(
            (dat) => (
          <div class="column">
            <img
              src={this.state.path+dat.image}
              style={{ width: "100%" }}
            />
          </div>
          ))}
        </div>
      </Container>
    );
  }
}
