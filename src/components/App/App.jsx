import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import  NavBar from "../NavBar/NavBar"
import './App.css'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Route path="/" exact component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/projects" component = {Projects}/>
                    <Route path="/skills" component = {Skills}/>
                    <Route path="/contact" component = {Contact}/>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;