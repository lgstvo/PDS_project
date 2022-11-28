import React from "react";

import "./css/menu-aluno.css";
import "./css/styles.css" ;
import './css/fullcalendar.css';
import './css/fullcalendar.print.css'; 

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import $ from 'jquery';
import Calendario from './js/calendario.js';

/*import './js/jquery-1.10.2.js' ;
import './js/jquery-ui.custom.min.js';
import './js/fullcalendar.js';
import "./js/scripts.js";
import "./js/calendario-menu.js";
import "./js/requisicoes.js";
*/


class MenuAluno extends React.Component{
    
    teste = () => alert('clicked');

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testeAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    retornaMaterias(){
        $.ajax({
            url: 'http://localhost:9000/aula', 
            type: 'GET', 
            dataType: 'json', 
            success: function(data) {
                $.each(data, function(index, element) {   
                    $.each(element, function(i, e){
                        // Exibe todas as materias em Menu -> Matérias        
                        $('#todas-materias').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.materia+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                        // Exibe as três primeiras matérias em Menu -> Início
                        if(i < 3)
                            $('#tres-primeiras-materias').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.materia+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                        //data-format:  '2011-05-05'
                        
                    });
                }); 
                $('.item.active').css('border-color', '');
                $('.card').css('border', '')
                $('.card').addClass('bg-primario');
                $('.card').css('color','white');            
                $('.card-footer').addClass('bg-roxo');
                $('.card-footer').css('font-size','15px');
                $('.card-footer').addClass('text-center');
                
                //$('#calendario-menu-inicio').fullCalendar({event: eventos});
                
            }, error: function(e) { 
                console.log(e); 
            }
        });
    }
 

    retornaPerfis(){
        //Retorna os professores cadastrados
        var ids = [1,2,3,4]
        for (var i=0; i<10; i++){
            $.ajax({
                url: 'http://localhost:9000/perfil/'+i, 
                type: 'GET', 
                dataType: 'json', 
                success: function(data) {
                    $.each(data, function(index, element) {   
                        $.each(element, function(ind, e){
                            // Exibe todas as materias em Menu -> Matérias        
                            $('#todos-professores').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.nome+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                            // Exibe as três primeiras matérias em Menu -> Início
                            if(ind < 3)
                                $('#tres-primeiros-professores').append($('<div class="col"><div id='+e.id+' class="card"><img src="https://64.media.tumblr.com/8b69b19c86e321c791340f370165ba15/tumblr_nvge9wpGCU1u66uqto1_1280.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+e.nome+'</h5></div><div class="card-footer">Agendar</div></div></div>'));
                            //data-format:  '2011-05-05'
                            
                        });
                    }); 
                    $('.item.active').css('border-color', '');
                    $('.card').css('border', '')
                    $('.card').addClass('bg-primario');
                    $('.card').css('color','white');            
                    $('.card-footer').addClass('bg-roxo');
                    $('.card-footer').css('font-size','15px');
                    $('.card-footer').addClass('text-center');
                    
                    //$('#calendario-menu-inicio').fullCalendar({event: eventos});
                    
                }, error: function(e) { 
                    //alert(e); 
                }
            });
        }
    }

    componentDidMount() {
        this.retornaMaterias();
        this.retornaPerfis();

    }

    

    render(){
        return (
            <div className="d-flex" id="wrapper">
                <Tab.Container id="left-tabs-example" defaultActiveKey="tab-inicio">
                <div className="border-end border-dark text-white bg-primario"  id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom border-dark py-5">Marcaê</div>
                    <Nav className="list-group list-group-flush " role="tablist" >
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario" id="botao-tab-inicio">
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav" eventKey="tab-inicio">Inicio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario"  id="botao-tab-calendario"  >
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav"  eventKey="tab-calendario">Calendário</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario" id="botao-tab-materias" >
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav"  eventKey="tab-materias">Matérias</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario" id="botao-tab-professores" >
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav"  eventKey="tab-professores">Professores</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario" href="#!">
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav" >Mensagens</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="list-group-item list-group-item-action p-3 text-white bg-primario" href="#!">
                            <Nav.Link className="btn btn-light btn-block w-100 botao-nav" >Configurações</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                    <div className="bg-subprimario w-100">
                        <nav className="m-left-5 navbar navbar-expand-lg navbar bg py-4">
                            <div className="container-fluid">
                                <div className="pesquisar col-6">
                                    <div className="input-group mb-3 input-group-lg">
                                        <input type="text" className="form-control " placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="basic-addon2" />
                                        <div className="input-group-append">
                                        <button className="btn btn-outline-secondary btn-lg bg-secundario" type="button">Pesquisar</button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="notificacao">
                                    
                                </div>
                                <div className="col-2 align-self-end justify-content-between align-items-center ">
                                    <div className="row justify-content-between align-items-center align-center">
                                        <div className="col-1 align-self-center justify-content-between align-items-center">
                                            <div className="align-center">
                                                <img src="/aluno.jpg" height="75px" className="foto-aluno" />
                                            </div>
                                            <button className="navbar-toggler align-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                            <div className="collapse navbar-collapse align-center" id="navbarSupportedContent">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fulano</a>
                                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                            <a className="dropdown-item" href="#!">Perfil</a>
                                                            <a className="dropdown-item" href="#!">Configurações</a>
                                                            <div className="dropdown-divider"></div>
                                                            <a className="dropdown-item" href="#!">Log-out</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        
                    <Tab.Content className="tab-content" id="nav-tabContent">
                
                        <Tab.Pane className="m-left-5 container-fluid" eventKey="tab-inicio">
                            <div className="row w-100">
                                <div className="col-8">
                                    <h2 className="mt-4 text-gray">Matérias</h2>
                                    <div className="row">
                                        <div id="tres-primeiras-materias" className="row row-cols-1 row-cols-md-3 g-4">
                
                                        </div>
                                        
                                    </div>
                                    <h2 className="mt-4 text-gray">Professores</h2>
                                    <div className="row">
                                        <div id="tres-primeiros-professores" className="row row-cols-1 row-cols-md-3 g-4">
                                                
                                            
                                        </div>
                                        
                                    </div>
                                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                                        <div className="col-md-4 d-flex align-items-center">
                                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                            <svg className="bi" width="30" height="24"><use ></use></svg>
                                        </a>
                                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                                        </div>
    
                                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                        <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                        </ul>
                                    </footer>
                                </div>
                                <div className="col-3">
                                    <div className="row row-calendario">
                                        <div id="calendario-menu-inicio"></div>
                                    </div>
                                    <div className="mt-5 row proximas-aulas">
                                        <div className="col-8">
                                            <h4 className="text-gray">Próximas aulas</h4>
                                        </div>
                                        <div className="col-4">
                                            <h6 className="text-gray">Ver todas</h6>
                                        </div>
                                    </div>
                                    <div className="row aulas-proxima-semana">
                                        <div className="card mb-3 mt-4 card-aulas-prox">
                                            <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="/mariacarmen.jpg" className="img-fluid rounded-start" alt="..." width="100%" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                <h5 className="card-title">Maria Carmen</h5>
                                                <p className="card-text">Matemática</p>
                                                <p className="card-text"><small className="text-muted">Segunda - 16:30</small></p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="m-left-5 container-fluid" eventKey="tab-calendario">
                            
                            <h3 className="text-gray">Calendário</h3>
                            <div className="row w-75">
                            <div id="calendario-menu-calendario" className="bg-light mt-5">
                                <Calendario/>
                            </div>
                            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                                <div className="col-md-4 d-flex align-items-center">
                                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                    <svg className="bi" width="30" height="24"><use ></use></svg>
                                </a>
                                <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                                </div>
    
                                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use ></use></svg></a></li>
                                </ul>
                            </footer>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="m-left-5 container-fluid" eventKey="tab-materias">
                            <div className="row w-75">
                                <h3 className="text-gray">Todas as matérias</h3>
                                <div className="row">
                                    <div id="todas-materias" className="row row-cols-1 row-cols-md-3 g-4">
            
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </Tab.Pane>
                        <Tab.Pane className="m-left-5 container-fluid" eventKey="tab-professores">
                            <div className="row w-75">
                                <h3 className="text-gray">Seus professores</h3>
                                <div className="row">
                                    <div id="todos-professores" className="row row-cols-1 row-cols-md-3 g-4">
                                            
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                    </div>
                
            
                    </Tab.Container>
                    </div>
               
    
        );
    }
}
export default MenuAluno;