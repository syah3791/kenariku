import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { registerburung } from "../utils/Services";

const Container = styled.nav`
  .jumbotron {
    background-image: url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-financial-management-banner-background-design-image_188731.jpg");
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
export default class LaporanKeuangan extends Component {
  render() {
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Laporan Keuangan</h1>
            <p className="lead">
              Laporan digunakan untuk melihat dan laporan burung kenari.
            </p>
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Tambah Transaksi
            </button>
          </div>
        </div>
        <div className="container">
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Cari..."
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

                <th scope="col">Customer</th>
                <th scope="col">ID</th>
                <th scope="col">Harga</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">20 Januari 2019</th>

                <td>Purwandi</td>
                <td>ID 001</td>
                <td>IDR 250.000,00</td>
                <td>Paid</td>
                <td>
                  <Link to="/lihat" classNameName="card-link">
                    <button type="button" className="btn btn-primary">
                      <i class="fa fa-edit"></i>
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}
