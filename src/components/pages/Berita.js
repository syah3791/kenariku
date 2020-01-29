import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  .jumbotron {
    background-image: url("https://i.pinimg.com/originals/6b/20/16/6b201623685e7093fe7df8970b1d26b5.jpg");
    background-size: cover;
  }
  .table {
    border-radius: 5px;
    width: 100%;
    margin: 0px auto;
    float: none;
    text-align: center;
  }
  .action {
    text-align: end;
  }
`;
export default class Berita extends Component {
  state = {
    user: "",
    judul: "",
    deskripsi: "",
    foto: ""
  };
  onChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const postData = {
      user: this.state.user,
      judul: this.state.judul,
      deskripsi: this.state.deskripsi,
      foto: this.state.foto
    };
  }
  render() {
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Report Log</h1>
            <p className="lead">
              Report Log digunakan untuk monitoring proses pemeliharaan burung
              kenari.
            </p>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Tambah Log
            </button>
            <span>
              {" "}
              <button type="button" className="btn btn-primary">
                Download Log
              </button>
            </span>

            <div
              className="modal fade bd-example-modal-lg"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Tambah Log
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
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputName">Nama</label>
                          <input type="name" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputType">Judul</label>
                          <input type="name" className="form-control"></input>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                          Deskripsi
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="inputGroupFile02"
                          ></input>
                          <label
                            class="custom-file-label"
                            for="inputGroupFile02"
                            aria-describedby="inputGroupFileAddon02"
                          >
                            Choose file
                          </label>
                        </div>
                        <div class="input-group-append">
                          <br></br>
                          <span
                            class="input-group-text"
                            id="inputGroupFileAddon02"
                          >
                            Upload
                          </span>
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
                        <button type="button" className="btn btn-success">
                          Tambahkan
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
