import Home from "../pages/Home"
import Services from "../pages/Services"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctors/Doctors"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Chatbot from "../pages/Chatbot"
import Practice from "../../Practice"
import DayScreen from "../pages/DayScreen"

import {Routes, Route} from "react-router-dom"

const Routers = () => {
  return <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/home" element = {<Home/>}/>
    <Route path = "/doctors" element = {<Doctors/>}/>
    <Route path = "/doctors/:id" element = {<DoctorDetails/>}/>
    <Route path = "/login" element = {<Login/>}/>
    <Route path = "/register" element = {<Signup/>}/>
    <Route path = "/contact" element = {<Contact/>}/>
    <Route path = "/services" element = {<Services/>}/>
    <Route path = "/chatbot" element = {<Chatbot/>}/>
    <Route path = "/practice" element = {<Practice/>}/>
    <Route path = "/dayscreen" element = {<DayScreen/>}/> 
  </Routes>
}

export default Routers