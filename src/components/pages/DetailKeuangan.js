import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import api from "../utils/ServicesFinance";

const Container = styled.nav`
  .jumbotron {
    background-image: url("");
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
export default class DetailKeuangan extends Component {
  state = {
    tanggal: "",
    idBird: "",
    tahun: "",
    pembeli: "",
    filter: "",
    harga: "",
    jumlah: "",
    data: [],
    file: [],
    saldo: "",
    idUp: "",
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    var query = window.location.search.substring(1);
    await api.getReportsByIdMonth(query).then(report => {
      console.log(report);
      this.setState({
        file: report.data.data,
        isLoading: false
      });
    });
    await api.getAllBirds().then(bird => {
      console.log(bird);
      this.setState({
        data: bird.data.data,
        isLoading: false
      });
    });
    await api.getSaldo().then(saldo => {
      document.getElementById('saldo').innerHTML = saldo.data.data.saldo;
    });
  };
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  getDataFromDb = () => {
    api.getAllBirds().then(bird => {
      this.setState({
        data: bird.data.data
      });
    });
    api.getSaldo().then(saldo => {
      document.getElementById('saldo').innerHTML = saldo.data.data.saldo;
    });
  };

  getReportFromDb = () => {
    api.getAllReports().then(report => {
      this.setState({
        file: report.data.data
      });
    });
  };

  searchReport({ target }) {
    // Declare variables
    var filter,
      tahun,
      table,
      tr,
      td,
      i,
      j,
      txtValue,
      temp,
      jum = 0;
    filter = target.value.toUpperCase();
    table = document.getElementById("listJournal");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      var c = 0;
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        temp = td[j];
        if (temp) {
          txtValue = temp.textContent || temp.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            c = 1;
          }
        }
      }
      if (c > 0) {
        tr[i].style.display = "";
        jum += parseFloat(td[3].innerText);
      } else {
        tr[i].style.display = "none";
      }
    }
    this.setState({
      jumlah: jum,
      filter: target.value,
      tahun: target.value
    });
  }
  print = async e => {
    var divToPrint = document.getElementById("listJournal");
    var newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  };

  addReport = async e => {
    e.preventDefault();
    const payload = {
      tanggal: this.state.tanggal,
      idBird: this.state.idBird,
      pembeli: this.state.pembeli,
      harga: this.state.harga
    };

    await api.insertFinance(payload).then(res => {
      window.alert(`Report inserted successfully`);
      this.getReportFromDb();
    });

    await api.updateBirdById(this.state.idBird).then(res => {
      this.getDataFromDb();
    });
    //registerburung(burungData);
  };
  render() {
    const status = ["Pengeluaran", "Pemasukkan"];
    const { data } = this.state;
    const { file } = this.state;
    const { saldo } = this.state;
    const { jumlah } = this.state;
    const { filter } = this.state;
    const { tahun } = this.state;
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var d = null;
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Detail Keuangan</h1>
            <p className="lead">
              Detail Keuangan digunakan untuk melihat laporan keuangan dan
              transaksi burung kenari.
            </p>
            {/* <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              Tambah Transaksi
            </button>
            <span>
              {" "}
              <button
                type="button"
                className="btn btn-primary"
                onClick={e => this.print(e)}
              >
                Download Jurnal
              </button>
            </span> */}
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
                      Tambah Transaksi
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
                        <div className="form-group col-md-12">
                          <label for="inputType">Tanggal</label>
                          <input
                            type="date"
                            className="form-control"
                            name="tanggal"
                            onChange={e => this.onChange(e)}
                            value={this.state.tanggal}
                          ></input>
                        </div>
                        {/* <div className="form-group col-md-6">
                          <label for="inputName">Burung</label>
                          <select
                            type="text"
                            name="idBird"
                            className="form-control"
                            id="inputState"
                            onChange={e => this.onChange(e)}
                            value={this.state.idBird}
                          >
                            <option selected>Choose</option>
                            {data.length <= 0
                              ? "NO DB ENTRIES YET"
                              : data.map(dat => (
                                  <option value={dat._id}>{dat.name}</option>
                                ))}
                          </select>
                        </div> */}
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">
                          Keterangan
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="keterangan"
                          onChange={e => this.onChange(e)}
                          value=""
                        ></textarea>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputCity">Nominal</label>
                          <input
                            type="number"
                            className="form-control"
                            id="inputCity"
                            name="harga"
                            onChange={e => this.onChange(e)}
                            value={this.state.harga}
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="inputCity">Jenis Laporan</label>
                          <select
                            type="text"
                            name="jenisLaporan"
                            className="form-control"
                            id="inputCity"
                            onChange={e => this.onChange(e)}
                            value={this.state.jenis}
                          >
                            <option selected>Choose</option>
                            <option value="Pengeluran">Pengeluaran</option>
                            <option value="Pemasukan">Pemasukan</option>
                          </select>
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
                          onClick={e => this.addReport(e)}
                        >
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
        <div className="container">
          <div className="form-row" style={{ justifyContent: "space-between" }}>
            <div className="form-group col-md-3">
              {/* <label for="inputState">Laporan Penjualan Perbulan</label> */}
              <select
                type="text"
                name="filter"
                className="form-control"
                id="inputState"
                onChange={e => this.searchReport(e)}
              >
                <option value="" selected>
                  Plilih Bulan
                </option>
                <option value="January">Januari</option>
                <option value="February">Februari</option>
                <option value="Maret">Maret</option>
                <option value="April">April</option>
                <option value="Mei">Mei</option>
                <option value="Juni">Juni</option>
                <option value="Juli">July</option>
                <option value="Agustus">Agustus</option>
              </select>
              {/* <button type="button" className="btn btn-success">
                Hitung Total Penjualan
              </button> */}
            </div>

            <div className="form-group col-md-3">
              {/* <label for="inputState"></label> */}
              <select
                type="text"
                name="tahun"
                className="form-control"
                id="inputState"
                onChange={e => this.searchReport(e)}
              >
                <option value="" selected>
                  Plilih Tahun
                </option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <h5 style={{}}>Total Penjualan Bulan {filter} Adalah</h5>
              <h5 style={{ fontWeight: "bold" }}>Rp.<label id="saldo"></label>00</h5>
            </div>
          </div>
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Cari..."
              aria-label=""
              aria-describedby="basic-addon2"
              id="search"
              onChange={e => this.searchReport(e)}
            ></input>
            <div className="input-group-append"></div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tanggal</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Nominal</th>
                <th scope="col">Jenis</th>
              </tr>
            </thead>
            <tbody id="listJournal">
              {file.length <= 0
                ? "NO DB ENTRIES YET"
                : file.map(
                    fil => (
                      (d = new Date(fil.tanggal)),
                      (
                        <tr>
                          <td>
                            {fil.day +
                              " " +
                              months[fil.month - 1] +
                              " " +
                              fil.year}
                          </td>
                          <td>{fil.keterangan}</td>
                          <td>
                            {fil.out}
                            {fil.in}
                          </td>
                          <td>{status[fil.status]}</td>
                          <td>
                            <Link
                              to={"/lihatTrans?" + fil._id}
                              className="card-link"
                            >
                              <button type="button" className="btn btn-warning">
                                See More
                              </button>
                            </Link>
                          </td>
                        </tr>
                      )
                    )
                  )}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}
