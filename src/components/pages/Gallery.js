import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import GaleryCards from "../layouts/GaleryCards";
import { Howl } from "howler";
import api from "../utils/ServicesGallery";
import assets from "../assets/2.jpg";

const Container = styled.nav`
  .jumbotron {
    background-image: url("2.jpg");
    background-size: cover;
  }
`;

export default class Gallery extends Component {
  state = {
    path: "http://localhost:5000/",
    judul: "",
    deskripsi: "",
    audio: "",
    gambar: "",
    data: [],
    idUp: "",
    id: 0,
    _id: "",
  };
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await api.getAllGallery().then(galleries => {
      console.log(galleries);
      this.setState({
        data: galleries.data.data,
        isLoading: false
      });
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
    api.getAllGallery().then(bird => {
      this.setState({
        data: bird.data.data
      });
    });
  };

  searchBird({ target }) {
    // Declare variables
    var filter, table, tr, td, i, j, txtValue, temp;
    filter = target.value.toUpperCase();
    table = document.getElementById("listBirds");
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
      } else {
        tr[i].style.display = "none";
      }
    }
  }

  add = async e => {
    e.preventDefault();
    if (this.state.judul&&this.state.deskripsi&&this.state.audio&&this.state.gambar) {
      const payload = {
        judul: this.state.judul,
        deskripsi: this.state.deskripsi,
        audio: this.state.audio,
        gambar: this.state.gambar
      };

      await api.insertGallery(payload).then(res => {
        window.alert(`Collection successfully`);
        this.getDataFromDb();
      });
    }else window.alert(`Mohon isi form dengan lengkap`);

    
    //registerburung(burungData);
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
  uploadAudio = async ({ target }) => {
    var audio = document.getElementById(target.name).files[0];
    var formdata = new FormData();
    formdata.append("files", audio, audio.name);
    await api.uploadAudio(formdata).then(res => {
      if (res.data.success) {
        window.alert("Audio " + target.name + " berhasil di upload");
        this.setState({
          [target.name]: res.data.data
        });
      } else {
        window.alert(res.data.data);
      }
    });
  };

  render() {
    const { data } = this.state;
    return (
      <Container>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Gallery</h1>
            <p className="lead">
              Gallery digunakan untuk melihat dan menambahkan Gallery burung
              kenari.
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
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label for="inputCity">Judul</label>
                          <input
                            type="text"
                            name="judul"
                            className="form-control"
                            id="inputCity"
                            onChange={e => this.onChange(e)}
                            value={this.state.judul}
                            required
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
                          name="deskripsi"
                          onChange={e => this.onChange(e)}
                          value={this.state.deskripsi}
                          required
                        ></textarea>
                      </div>

                      <div className="form-row">
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            id="audio"
                          />
                          <div class="form-group">
                            <button
                              type="button"
                              name="audio"
                              class="btn btn-primary"
                              onClick={e => this.uploadAudio(e)}
                            >
                              Upload audio
                            </button>
                            </div>
                        </div>
                        <div className="form-group col-md-3">
                          <input type="file" id="gambar" onChange={e => this.preview(e)}/>
                          <img id="outputgambar" width="100px" height="100px"/>
                          <div class="form-group">
                            <button
                              type="button"
                              name="gambar"
                              class="btn btn-primary"
                              onClick={e => this.uploadImage(e)}
                            >
                              Upload gambar
                            </button>
                          </div>
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
              {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map(
            (dat) => (
                <div class="card mb-4 shadow-sm">
                  <Link to={"/Koleksi?"+dat.judul}>
                    <img
                      class="bd-placeholder-img card-img-top"
                      src={this.state.path+"img/"+dat.gambar}
                      width="100%"
                      height="225"
                    ></img>
                  </Link>
                  <div class="card-body">
                  <h1>{dat.judul}</h1>
                    <p class="card-text">{dat.deskripsi}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                         <audio controls>
                            <source src={this.state.path+"audio/"+dat.audio} type="audio/mpeg">
                            </source>
                          Listen
                          </audio> 
                      </div>
                    </div>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
        </div>
      </Container>
    );
  }
}
