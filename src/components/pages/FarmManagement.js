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
  }
  .action {
    text-align: end;
  }
`;
export default class FarmManagement extends Component {
  render() {
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Farm Management</h1>
            <p className="lead">
              Farm management digunakan untuk melihat dan menambahkan data
              burung kenari.
            </p>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Register Burung
            </button>

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
                      Register Burung
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
                          <label for="inputType">Type</label>
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

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputCity">DNA</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                          ></input>
                        </div>
                        <div className="form-group col-md-4">
                          <label for="inputState">Jenis</label>
                          <select id="inputState" className="form-control">
                            <option selected>Choose</option>
                            <option>Jantan</option>
                            <option>Betina</option>
                          </select>
                        </div>
                        <div className="form-group col-md-2">
                          <label for="inputUmur">Umur (Bulan)</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                          ></input>
                        </div>
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
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <h2>List Burung Kenari</h2>
            <p></p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cari burung..."
                aria-label=""
                aria-describedby="basic-addon2"
              ></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
            <table className="table ">
              <thead>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://omkicau.com/wp-content/uploads/2013/04/american-singer-canary.jpg?w=300"
                      width="50px"
                      height="50px"
                    ></img>
                  </td>
                  <td>ID 001</td>
                  <td className="action">
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg"
                    >
                      <i class="fa fa-edit"></i>
                      Edit
                    </button>
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
                              Edit Data Burung
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
                                  <input
                                    type="name"
                                    className="form-control"
                                  ></input>
                                </div>
                                <div className="form-group col-md-6">
                                  <label for="inputType">Type</label>
                                  <input
                                    type="name"
                                    className="form-control"
                                  ></input>
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

                              <div className="form-row">
                                <div className="form-group col-md-6">
                                  <label for="inputCity">DNA</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                  ></input>
                                </div>
                                <div className="form-group col-md-4">
                                  <label for="inputState">Jenis</label>
                                  <select
                                    id="inputState"
                                    className="form-control"
                                  >
                                    <option selected>Choose</option>
                                    <option>Jantan</option>
                                    <option>Betina</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-2">
                                  <label for="inputUmur">Umur (Bulan)</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputZip"
                                  ></input>
                                </div>
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
                                <button
                                  type="button"
                                  className="btn btn-success"
                                >
                                  Tambahkan
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span>
                      {" "}
                      <Link to="/lihat" classNameName="card-link">
                        <button type="button" className="btn btn-primary">
                          <i class="fa fa-eye"></i>
                          Lihat
                        </button>
                      </Link>
                    </span>
                    <span>
                      {" "}
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalLabel"
                              ></h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div
                              style={{ fontWeight: "bold" }}
                              class="modal-body"
                            >
                              Yakin Menghapus Data ?
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" class="btn btn-danger">
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    );
  }
}
