import React, { Component } from "react";
import Home from "./pages/home.js";
import Header from "./pages/header.js";
import Login from "./pages/login.js";
import Cadastro from "./pages/cadastro.js";
import Footer from "./pages/footer.js";
import MenuAluno from "./pages/menu-aluno.js";
import MenuProfessor from "./pages/menu-professor.js";

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends Component {
    render(){
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<><Header/><Home/><Footer/></>}/>
                        <Route path="/login" element={<><Header/><Login/><Footer/></>}/>
                        <Route path="/cadastro" element={<><Header/><Cadastro/><Footer/></>}/>
                        <Route path="/menu-aluno" element={<MenuAluno/>}/>
                        <Route path="/menu-professor" element={<MenuProfessor/>}/>
                    </Routes>
                </Router>
                
            </div>
            
        );
    }

}

export default App;
