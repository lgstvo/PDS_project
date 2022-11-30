import React, { Component } from "react";
import Home from "./pages/home.js";
import Header from "./pages/header.js";
import Login from "./pages/login.js";
import Cadastro from "./pages/cadastro.js";
import Footer from "./pages/footer.js";
import MenuAluno from "./pages/menu-aluno.js";

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
                    </Routes>
                </Router>
                
            </div>
            
        );
    }
    /*    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testeAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }*/
}

export default App;
