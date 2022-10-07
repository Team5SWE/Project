import React, {Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import About from "./pages/About";
import SalonSite from "./pages/BusinessDashboard/SalonSite";
import Employees from "./pages/BusinessDashboard/Employees";
import Services from "./pages/BusinessDashboard/Services";
import Schedule from "./pages/BusinessDashboard/Schedule";

import Appointment from "./pages/appointments/Appointment";

class App extends Component {

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />

            <Route path="sign-up" element={<SignUp/>} />
            <Route path="login" element={<Login/>} />

            <Route path="salon" element={<SalonSite/>}></Route>
            <Route path="services" element={<Services/>}></Route>
            <Route path="employees" element={<Employees/>}></Route>
            <Route path="schedule" element={<Schedule/>}></Route>
            <Route path="about" element={<About/>} />

            <Route path="appointment" element={<Appointment/>}>
              {/* <Route path=":appointmentId" element={<Appointment/>} /> */}
            </Route>

            <Route path="contact" element={<ContactUs/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }



}

export default App;
