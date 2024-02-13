import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Visitor from './components/Visitor'
import Counsellor from './components/Counsellor'
import Appointment from './components/Appointment'
import FetchRegistrations from "./components/FetchRegistrations";


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/signin" element={<Signin/>} exact />
        <Route path="/counsellor" element={<Counsellor/>} exact />
        <Route path="/visitor" element={<Visitor/>} exact />
        <Route path="/fetchregistrations" element={<FetchRegistrations/>} exact />
        <Route path="/appointment" element={<Appointment/>} exact />
      </Routes>
    </main>
  </React.Fragment>
}

export default App;
