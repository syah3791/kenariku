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
export default class Report extends Component {
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
                          <input type="date" className="form-control"></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputType">Jam</label>

                          <input
                            type="text"
                            className="form-control"
                            name="pakan"
                          ></input>
                        </div>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Log</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputCity">Pakan</label>
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
                          <label for="inputUmur">Status</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                          ></input>
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
        <div>
          <div className="container">
            <div className="input-group ">
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
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Jam</th>
                  <th scope="col">Pakan</th>
                  <th scope="col">Log</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">20 Januari 2019</th>
                  <td>10.00</td>
                  <td>
                    -Kroto <br></br>
                    -Bijian Mix<br></br>
                    -Buah Apel<br></br>
                  </td>
                  <td>
                    Pemberian Makan<br></br>
                    pengecekan kandang
                  </td>
                  <td>
                    Normal<br></br>
                    Tidak Ada Penyakit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    );
  }
}
