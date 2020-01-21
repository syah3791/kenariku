import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// Components
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import Detail from "./components/pages/Detail";
import FarmManagement from "./components/pages/FarmManagement";
import Galery from "./components/pages/Galery";
import LihatBurung from "./components/pages/LihatBurung";
import Report from "./components/pages/Report";

const MyApp = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <MyApp>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/farmmanagement" component={FarmManagement} />
          <Route exact path="/Galery" component={Galery} />
          <Route exact path="/lihat" component={LihatBurung} />
          <Route exact path="/Report" component={Report} />
        </Switch>
      </Router>
    </MyApp>
  );
}

export default App;
