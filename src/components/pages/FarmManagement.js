import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";
import api from '../utils/ServicesBurung';
import api2 from "../utils/ServicesBreeding";
import assets from "../assets/f.png";

const Container = styled.nav`
  .jumbotron {
    /* background-image: url("https://i.pinimg.com/originals/6b/20/16/6b201623685e7093fe7df8970b1d26b5.jpg"); */
    background-image:url("f.png");
    background-size: cover;
  }
  .table {
    border-radius: 5px;
    width: 100%;
    margin: 0px auto;
    float: none;
  }

  .card-counter{
    box-shadow: 2px 2px 10px #DADADA;
    margin: 5px;
    padding: 20px 10px;
    background-color: #fff;
    height: 100px;
    border-radius: 5px;
    transition: .3s linear all;
  }

  .card-counter:hover{
    box-shadow: 4px 4px 20px #DADADA;
    transition: .3s linear all;
  }

  .card-counter.primary{
    background-color: #007bff;
    color: #FFF;
  }

  .card-counter.danger{
    background-color: #ef5350;
    color: #FFF;
  }  

  .card-counter.success{
    background-color: #66bb6a;
    color: #FFF;
  }  

  .card-counter.info{
    background-color: #26c6da;
    color: #FFF;
  }  

  .card-counter i{
    font-size: 5em;
    opacity: 0.2;
  }

  .card-counter .count-numbers{
    position: absolute;
    right: 35px;
    top: 20px;
    font-size: 32px;
    display: block;
  }

  .card-counter .count-name{
    position: absolute;
    right: 35px;
    top: 65px;
    font-style: italic;
    text-transform: capitalize;
    opacity: 0.5;
  }
  .card-counter{
  background-color:gold;
  }
 
`;
export default class FarmManagement extends Component {
  state = {
    path: "http://localhost:5000/img/",
    name: "",
    nameUp:"",
    deskripsiUp:"",
    jenisUp:"",
    warnaUp:"",
    jenis_kelaminUp: "",
    tanggalUp:"",
    hargaUp: "",
    peternak:"",
    statusUp: "",
    jenis: "",
    warna: "",
    jenis_kelamin: "",
    tanggal: "",
    harga: "",
    data: [],
    betina: [],
    jantan: [],
    idUp:"",
    id: 0,
    image1: "",
    image1Up: "",
    image2: "",
    image2Up: "",
    image3: "",
    image3Up: "",
    idbetina: "",
    idjantan: "",
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };
  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount = async () => {
    this.setState({ isLoading: true })
     await api.getAllBirds().then(bird => {
      this.setState({
        data: bird.data.data,
      })
    })
    var s = 0;
    var  t = 0;
    this.state.data.map((dat) => (
      dat.status == 1 
      ? s = s + 1
      : t = t + 1
      ));
    document.getElementById("stock").innerHTML = s;
    document.getElementById("jual").innerHTML = t;
    await api2.getBetina().then(birdF => {
      this.setState({
        betina: birdF.data.data
      });
    });
    await api2.getJantan().then(birdM => {
      this.setState({
        jantan: birdM.data.data
      });
    });
  }
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    api.getAllBirds().then(bird => {
      this.setState({
        data: bird.data.data,
      })
    })
    var s = 0;
    var  t = 0;
    this.state.data.map((dat) => (
      dat.status == 1 
      ? s = s + 1
      : t = t + 1
      ));
    document.getElementById("stock").innerHTML = s;
    document.getElementById("jual").innerHTML = t;
  };

  onChangeCheck({ target }) {
    api.getBirdByName(target.value).then(bird => {
      if (!bird.data.success) {
        this.setState({
          [target.name]: target.value
        });
        document.getElementById('labelName').innerHTML = 'ID burung dapat digunakan';
      }else{
        this.setState({
          [target.name]: ''
        });
        document.getElementById('labelName').innerHTML = 'ID burung sudah digunakan';
      }
    });   
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value
    });    
  }

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
      if (c > 0) {tr[i].style.display = "";}
      else{tr[i].style.display = "none";}
    } 
  }

  addBird = async (e) =>  {
    e.preventDefault();

    const payload = {
      name: this.state.name,
      deskripsi: this.state.deskripsi,
      jenis: this.state.jenis,
      warna: this.state.warna,
    
      jenis_kelamin: this.state.jenis_kelamin,
      tanggal: this.state.tanggal,
      harga: this.state.harga,
      image1: this.state.image1,
      image2: this.state.image2,
      image3: this.state.image3
    };
    if (payload.name&&payload.deskripsi&&payload.jenis&&payload.warna&&payload.jenis_kelamin&&payload.tanggal&&payload.image1&&payload.image2&&payload.image3) {
      await api.insertBird(payload).then(res => {
        window.alert(`Bird inserted successfully`);
        this.getDataFromDb();
        this.setState({
          name: "",
          deskirpsi:"",
          jenis: "",
          warna: "",
          jenis_kelamin: "",
          tanggal: "",
          harga: "",
          image1: "",
          image2: "",
          image3: "",
        });
      })
    }else window.alert(`Mohon isi form dengan lengkap`);
    
    //registerburung(burungData);
  }
  updateData = async (e) =>  {
    e.preventDefault();

    const payload = {
      name: this.state.nameUp,
      deskripsi: this.state.deskripsiUp,
      jenis: this.state.jenisUp,
      warna: this.state.warnaUp,
      jenis_kelamin: this.state.jenis_kelaminUp,
      tanggal: this.state.tanggalUp,
      harga: this.state.hargaUp,
      status: this.state.statusUp,
      image1: this.state.image1Up,
      image2: this.state.image2Up,
      image3: this.state.image3Up
    };
    if (payload.name&&payload.deskripsi&&payload.jenis&&payload.warna&&payload.jenis_kelamin&&payload.tanggal&&payload.image1&&payload.image2&&payload.image3) {
      await api.updateBirdById(this.state.idUp,payload).then(res => {
            window.alert(`Bird updated successfully`);
            this.getDataFromDb();
        })
    }else window.alert(`Mohon isi form dengan lengkap`);
    //registerburung(burungData);
  }
    deleteData = async () =>  {
    await api.deleteBirdById(this.state.idUp).then(res => {
      window.alert(`Bird deleted successfully`);
      this.getDataFromDb();
    })
    //registerburung(burungData);
  }

  imageVal = (gender, filter) => {
    for (var i = 0; i <= gender.length; i++) {
      if (gender[0].name == filter) {
        return gender[i];
      }
    }
  };

  addBreeding = async e => {
    e.preventDefault();
    var imageb = "",
      imagej = "";
    if (this.state.idbetina && this.state.idjantan) {
      imageb = this.imageVal(this.state.betina, this.state.idbetina);
      imagej = this.imageVal(this.state.jantan, this.state.idjantan);
    }
    const payload = {
      betina: this.state.idbetina,
      jantan: this.state.idjantan,
      imagebetina: imageb.image1,
      imagejantan: imagej.image1
    };
    if (
      payload.betina &&
      payload.jantan &&
      payload.imagebetina &&
      payload.imagejantan
    ) {
      await api2.insertBreeding(payload).then(res => {
        window.alert(`Breeding inserted successfully`);
        this.setState({
          idbetina: "",
          idjantan: ""
        });
      });
      api2.updateBirdById(imageb._id).then(res => {});
      api2.updateBirdById(imagej._id).then(res => {
        this.getDataFromDb();
      });
    } else window.alert(`Mohon isi form dengan lengkap`);

    //registerburung(burungData);
  };

  preview  = async ({ target }) =>{
    var output = document.getElementById("output"+target.id);
    output.src = URL.createObjectURL(target.files[0]);
  }

  uploadImage  = async ({ target }) =>{  
    var image = document.getElementById(target.name).files[0];
    var formdata = new FormData();
    formdata.append('files',image,image.name);
    await api.upload(formdata).then(res => {
      if (res.data.success) {
        window.alert("Gambar "+target.name+" Berhasil di upload");
        this.setState({
          [target.name]: res.data.data
        });
      }else{window.alert(res.data.data);}      
    })
  }

  render() {

    const { data } = this.state;
    const stat = ["Terjual", "Stok"];
    const { betina } = this.state;
    const { jantan } = this.state;
    const age = new Date();
   
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
              data-target=".bd-example-modal-lg-register"
            >
              Register Burung
            </button>
            { "          "}
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-lg-parent"
            >
              Register Parent
            </button>
            
        
{/* tambah parent */}
            <form id="addForm">
              <div
                className="modal fade bd-example-modal-lg-parent"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg-parent" role="document">
                  <div className="modal-content" closeModal={this.closeModal}>
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Register Parent
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
                            <label for="inputCity">Ring Jantan </label>
                             <select
                              type="text"
                              name="idjantan"
                              className="form-control"
                              id="idjantan"
                              required
                              onChange={e => this.onChange(e)}
                              value={this.state.idjantan}
                            >
                              <option selected>Choose</option>
                              {jantan.length <= 0
                                ? "NO DB ENTRIES YET"
                                : jantan.map(jan => (
                                    <option value={jan.name}>{jan.name}</option>
                                  ))}
                            
                            </select>
                          </div>
                          
                          <div className="form-group col-md-6">
                            <label for="inputCity">Ring Betina </label>
                            <select
                              type="text"
                              name="idbetina"
                              className="form-control"
                              id="idjantan"
                              required
                              onChange={e => this.onChange(e)}
                              value={this.state.idbetina}
                            >
                              <option selected>Choose</option>
                              {jantan.length <= 0
                                ? "NO DB ENTRIES YET"
                                : betina.map(bet => (
                                    <option value={bet.name}>{bet.name}</option>
                                  ))}
                            
                            </select>
                          </div>
                          
                          </div>

                        
                        {/* <div className="form-row" style={{justifyContent:"space-between"}}>
                          <div className="form-group col-md-3">
                            <label for="inputCity"></label>
                            <input type="file" id="image1" onChange={e => this.preview(e)}/>
                            <img id="outputimage1" width="100px" height="100px"/>
                            <div class="form-group">
                              <button type="button" name="image1" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                            </div>
                          </div>
                       
                          <div className="form-group col-md-3">
                            <label for="inputCity"></label>
                            <input type="file" id="image3" onChange={e => this.preview(e)}/>
                            <img id="outputimage3" width="100px" height="100px"/>
                            <div class="form-group">
                              <button type="button" name="image3" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                            </div>
                          </div>
                        </div> */}
                    

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="submit" className="btn btn-success" onClick={e => this.addBreeding(e)}>
                            Tambahkan
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </form>

        
{/* tambah burung */}
            <form id="addForm">
              <div
                className="modal fade bd-example-modal-lg-register"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg-register" role="document">
                  <div className="modal-content" closeModal={this.closeModal}>
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
                            <label for="inputName"> Ring ID</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              onChange={e => this.onChangeCheck(e)}
                              required
                            ></input>
                            <label id="labelName"></label>
                          </div>
                          <div className="form-group col-md-6">
                            <label for="inputCity">Jenis Kenari </label>
                            <select 
                              type="text"
                              name="jenis"
                              className="form-control"
                              id="inputCity"
                              onChange={e => this.onChange(e)}
                              value={this.state.jenis}
                              >
                              <option selected>Choose</option>
                              <option value="Kenari Lokal"> Kenari Lokal</option>
                              <option value="Kenari Lokal"> Kenari Loper</option>
                              <option value="Kenari Yorkshire">Kenari Yorkshire</option>
                              <option value=" Kenari Border">Kenari Border</option>
                              <option value="Kenari AF">Kenari AF</option>
                              <option value="Kenari F1">Kenari F1</option>
                              <option value="Kenari F2">Kenari F2</option>
                              <option value="Kenari F3">Kenari F3</option>
                              <option value="Kenari SF">Kenari SF</option>

                        
                              <option value="Kenari Gloster">Kenari Gloster</option>
                              <option value="Kenari Melayu">Kenari Melayu</option>
                              <option value="Kenari Norwich">Kenari Norwich</option>
                            
                            </select>
                          </div>
                          <div className="form-group col-md-12">
                            <label for="inputName">Peternak</label>
                            <input
                              type="text"
                              name="peternak"
                              className="form-control"
                              onChange={e => this.onChange(e)}
                        
                            ></input>
                          </div>
                          </div>
                       
                        <div className="form-group">
                          <label for="deskripsi">
                            Deskripsi
                          </label>
                          <textarea
                            className="form-control"
                            id="deskripsi"
                            rows="3"
                            name="deskripsi"
                            onChange={e => this.onChange(e)}
                            required
                          ></textarea>
                        </div>
                      
                    

                        <div className="form-row">
                          <div className="form-group col-md-3">
                            <label for="warna">Warna</label>
                            <input
                              type="text"
                              name="warna"
                              className="form-control"
                              id="warna"
                              onChange={e => this.onChange(e)}
                              required
                            ></input>
                          </div>
                          <div className="form-group col-md-3">
                            <label for="inputCity">Jenis Kelamin</label>
                            <select 
                              type="text"
                              name="jenis_kelamin"
                              className="form-control"
                              id="inputCity"
                              onChange={e => this.onChange(e)}
                              value={this.state.jenis_kelamin}
                              >
                              <option selected>Choose</option>
                              <option value="Jantan">Jantan</option>
                              <option value="Betina">Betina</option>
                            </select>
                          </div>

                          <div className="form-group col-md-3">
                            <label for="inputtanggal">Birthday</label>
                            <input
                              name="tanggal"
                              type="date"
                              className="form-control"
                              id="inputZip"
                              onChange={e => this.onChange(e)}
                              value={this.state.tanggal}
                              required
                            ></input>
                          </div>
                          <div className="form-group col-md-3">
                            <label for="inputHarga">Harga (Rupiah)</label>
                            <input
                              name="harga"
                              type="number"
                              className="form-control"
                              id="harga"
                              onChange={e => this.onChange(e)}
                              required
                              value={this.state.harga}
                            ></input>
                          </div>
                        </div>
                        <div className="form-row" style={{justifyContent:"space-between"}}>
                          <div className="form-group col-md-3">
                            <label for="inputCity"></label>
                            <input type="file" id="image1" onChange={e => this.preview(e)}/>
                            <img id="outputimage1" width="100px" height="100px"/>
                            <div class="form-group">
                              <button type="button" name="image1" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                            </div>
                          </div>
                          <div className="form-group col-md-3">
                            <label for="inputCity"></label>
                            <input type="file" id="image2" onChange={e => this.preview(e)}/>
                            <img id="outputimage2" width="100px" height="100px"/>
                            <div class="form-group">
                              <button type="button" name="image2" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                            </div>
                          </div>

                          <div className="form-group col-md-3">
                            <label for="inputCity"></label>
                            <input type="file" id="image3" onChange={e => this.preview(e)}/>
                            <img id="outputimage3" width="100px" height="100px"/>
                            <div class="form-group">
                              <button type="button" name="image3" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
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
                          <button type="submit" className="btn btn-success" onClick={e => this.addBird(e)}>
                            Tambahkan
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="container">
          <div class="row" style={{justifyContent:"center"}}>
    <div   class="col-md-3">
      <div class="card-counter">
        <i class="fa fa-code-fork"></i>
        <span class="count-numbers" id="stock"></span>
        <span class="count-name"> Burung Stock</span>
      </div>
    </div>

    <div class="col-md-3">
    
      <div class="card-counter">
        <i class="fa fa-ticket"></i>
        <span class="count-numbers" id="jual"></span>
        <span class="count-name"> Burung Terjual</span>
      </div>
    </div>

    <div class="col-md-3">
      <div class="card-counter">
        <i class="fa fa-database"></i>
        <span class="count-numbers">{data.length}</span>
        <span class="count-name">Jumlah Semua Burung</span>
      </div>
      </div>
      </div>
            {/* <h2>List Burung Kenari</h2> */}
           
            <div className="input-group mb-3">
            <i
                  style={{ position: "relative",bottom:-40,left:20 }}
                  className="fa fa-key"
                  aria-hidden="true"
                ></i>



              <input style={{orderWidth:1,borderRadius:20,  paddingInlineStart: 30,marginTop:30,paddingTop:10}}
              
                type="text"
                className="form-control"
                placeholder="Cari burung..."
                aria-label=""
                id="search"
                onChange={i => this.searchBird(i)}
                aria-describedby="basic-addon2"
              ></input>
            </div>

            {/* Table Bird */}
            <table className="table" >
            <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"> Ring ID</th>
                  <th scope="col">Jenis</th>
                  <th scope="col">Warna</th>
                  <th scope="col">Umur</th>
                  <th scope="col">Jenis Kelamin</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="listBirds">
              {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map(
            (dat) => (
            (
            age.setTime(Date.parse(Date()) - Date.parse(dat.tanggal))
            ),
            (
              
                <tr>
                  <td>
                    <img
                      src={this.state.path+dat.image1}
                      width="50px"
                      height="50px"
                    ></img>
                  </td>
                  <td>{dat.name}</td>
                  <td>{dat.jenis}</td>
                  <td>{dat.warna}</td>
                  <td> {age.getMonth()} bulan</td>
                  <td>{dat.jenis_kelamin}</td>
                  <td>{dat.harga}</td>
                  <td>{stat[dat.status]}</td>
                  <td className="action">
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-toggle="modal"
                      data-target="#updatelah"
                      onClick={e => this.setState({
                        nameUp:dat.name,
                        jenisUp:dat.jenis,
                        warnaUp:dat.warna,
                        tanggalUp:dat.tanggal,
                        jenis_kelaminUp:dat.jenis_kelamin,
                        deskripsiUp:dat.deskripsi,
                        idUp:dat._id,
                        hargaUp:dat.harga,
                        statusUp:dat.status,
                        image1Up:dat.image1,
                        image2Up:dat.image2,
                        image3Up:dat.image3,
                     })}
                    >
                      <i class="fa fa-edit"></i>
                    
                      Edit
                    </button>
                    <div
                      className="modal fade bd-example-modal-lg-Up"
                      tabindex="-1"
                      role="dialog"
                      id="updatelah"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      {/* edit */}
                      <div className="modal-dialog modal-lg-Up" role="document">
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
                            <form >
                              <div className="form-row">
                                <div className="form-group col-md-6">
                                  <label for="inputName"> RING ID</label>
                                  <input
                                    type="name"
                                    name="nameUp"
                                    className="form-control"
                                    onChange={e => this.onChange(e)}
                                    value={this.state.nameUp}
                                  ></input>
                                </div>
                                <div className="form-group col-md-6">
                            <label for="inputCity">Jenis</label>
                            <select 
                              type="text"
                              name="jenisUp"
                              className="form-control"
                              id="inputCity"
                              onChange={e => this.onChange(e)}
                              value={this.state.jenisUp}
                              >
                              <option selected>Choose</option>
                              <option value="Kenari Lokal"> Kenari Lokal</option>
                              <option value="Kenari Lokal"> Kenari Loper</option>
                              <option value="Kenari Yorkshire">Kenari Yorkshire</option>
                              <option value=" Kenari Border">Kenari Border</option>
                              <option value="Kenari AF">Kenari AF</option>
                              <option value="Kenari F1">Kenari F1</option>
                              <option value="Kenari F2">Kenari F2</option>
                              <option value="Kenari F3">Kenari F3</option>
                              <option value="Kenari SF">Kenari SF</option>

                        
                              <option value="Kenari Gloster">Kenari Gloster</option>
                              <option value="Kenari Melayu">Kenari Melayu</option>
                              <option value="Kenari Norwich">Kenari Norwich</option>
                            
                            </select>
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
                                  name="deskripsiUp"
                                  onChange={e => this.onChange(e)}
                                  value={this.state.deskripsiU}
                                ></textarea>
                              </div>

                              <div className="form-row">
                                <div className="form-group col-md-3">
                                  <label for="inputCity">warna</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    name="warnaUp"
                                    onChange={e => this.onChange(e)}
                                    value={this.state.warnaUp}
                                  ></input>
                                </div>
                                <div className="form-group col-md-3">
                                  <label for="inputState">Jenis Kelamin</label>
                                  <select 
                                    type="text"
                                    name="jenis_kelaminUp"
                                    className="form-control"
                                    id="inputState"
                                    value={this.state.jenis_kelaminUp}
                                    onChange={e => this.onChange(e)}
                                    >
                                    <option selected>Choose</option>
                                    <option value="Jantan">Jantan</option>
                                    <option value="Betina">Betina</option>
                                  </select>
                                </div>
                                <div className="form-group col-md-3">
                                  <label for="inputtanggal">Birthday</label>
                                  <input
                                    type="date"
                                    name="tanggalUp"
                                    className="form-control"
                                    id="inputZip"
                                    onChange={e => this.onChange(e)}
                                    value={this.state.tanggalUp}
                                  ></input>
                                </div>
                                <div className="form-group col-md-3">
                                  <label for="inputHarga">Harga (Rupiah)</label>
                                  <input
                                    name="hargaUp"
                                    type="number"
                                    className="form-control"
                                    id="inputZip"
                                    onChange={e => this.onChange(e)}
                                    value={this.state.hargaUp}
                                  ></input>
                                </div>
                              </div>
                            
                              <div className="form-row" style={{justifyContent:"space-between"}}>
 
                                <div className="form-group col-md-3">
                                  <label for="Image1Up"></label>
                                  <input type="file" id="image1Up" onChange={e => this.preview(e)}/>
                            <img id="outputimage1Up" width="100px" height="100px"/>
 
                                  <div class="form-group">
                                    <button type="button" name="image1Up" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                                  </div>
                                </div>
                                <div className="form-group col-md-3">
                                  <label for="inputCity"></label>
                                  <input type="file" id="image2Up" onChange={e => this.preview(e)}/>
                            <img id="outputimage2Up" width="100px" height="100px"/>
 
                                  <div class="form-group">
                                    <button type="button" name="image2Up" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
                                  </div>
                                </div>

                                <div className="form-group col-md-3">
                                  <label for="inputCity"></label>
                                  <input type="file" id="image3Up" onChange={e => this.preview(e)}/>
                            <img id="outputimage3Up" width="100px" height="100px"/>
 
                                  <div class="form-group">
                                    <button type="button" name="image3Up" class="btn btn-primary" onClick={e => this.uploadImage(e)}>Upload</button>
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
                                  type="button"
                                  className="btn btn-success"
                                  onClick={e => this.updateData(e)}
                                  data-dismiss="modal"
                                >
                                  Update
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span>
                      {" "}
                      <Link to={"/lihatRep?"+dat._id} classNameName="card-link">
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
                        onClick={e => this.setState({
                          idUp:dat._id
                        })}
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
                                name="idUp"
                                data-dismiss="modal"
                                aria-label="Close"
                                value={dat.idUp}
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
                            
                              <button type="button" 
                                onClick={e => this.deleteData(e)}
                                data-dismiss="modal"
                              class="btn btn-danger">
                                Hapus
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </td>
                 
                </tr>
                 )
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    );
  }
}
