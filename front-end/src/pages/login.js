import React from "react";
import "./css/login.css"
import Form from 'react-bootstrap/Form';
import $ from 'jquery';

function tipoPerfil(email_informado){
    $.ajax({
        url: 'http://localhost:9000/perfil/id', 
        type: 'GET', 
        dataType: 'json', 
        success: function(data) {
            var i = 0;
            $.each(data, function(index, element) {   
                $.each(element, function(ind, e){
                    if(e.email == email_informado){
                        return e.isprofessor
                    }
                });
            }); 
            
        }, error: function(e) { 
        }
    });
}

function redirect(email) {
    if(tipoPerfil(email)){
        window.location.href = 'http://localhost:3000/menu-professor';
    }else{
        window.location.href = 'http://localhost:3000/menu-aluno';
    }
}

function erroLogin(){
    alert('Email ou senha incorretos')
}

function loginRequest(email, senha){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "email": email,
      "pwd": senha
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:9000/perfil/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.message == 'Autenticacao Sucesso'){
            redirect(email)
        }else{
            //alert(result.message)
            erroLogin()
        }
    })
      .catch(error => console.log('error', error)); 
}


const handleSubmit = (event) => {
    event.preventDefault();

    const email_form = event.target.elements[0].value;
    const senha_form = event.target.elements[1].value;
    loginRequest(email_form, senha_form);
};

class Login extends React.Component{
    render(){
        
        return (
            <div className="v803_586">
            <div className="v803_588">
                <div className="v803_589"><span className="v803_590">Sign In</span><span className="v803_591">Digite seu email e senha para entrar</span></div>
                <Form onSubmit={handleSubmit}>
                    <div className="v803_592">    
                        <div className="name">
                            <input type="text" className="campo_login" id="email" name="Email" placeholder="Email"/>
                        </div><br></br>
                        <div className="name">
                            <input type="password" className="campo_login" id="pwd" name="Senha" placeholder="Senha"/>
                        </div>
                    </div>
                    <div className="v803_595" id="erro">
                    </div>
                    <div className="name">
                        <button className="v816_1546" id="button-login" type="submit"><span className="v816_1547">Login</span></button>
                    </div>
                </Form>
                <span className="v803_599 text-white">Ainda não se cadastrou? <a href="cadastro">Criar conta</a></span>
            </div>
            <div className="v803_614">
                <div className="v803_615">
                    <div className="v803_616"></div>
                    <div className="v803_617">
                        <div className="v803_618"></div>
                    </div>
                </div>
                <div className="v803_694"><span className="v803_695">Agende as melhores aulas particulares!</span><span
                        className="v803_696">Inscreva-se já e tenha acesso a fóruns, comunidades, diversas possibilidades de
                        aulas e muito mais</span></div>
            </div>
            <div className="v803_703">
                <div className="v803_704"><span className="v803_705">Conecte suas Redes</span><span className="v803_706">Conecte o
                        Marcaê com suas
                        redes sociais preferidas :</span>
                </div>
                <div className="v803_717"><span className="v803_718">Info da Empresa</span>
                    <div className="v803_719"><span className="v803_720">Sobre Nós</span><span className="v803_721">Nossos
                            Planos</span><span className="v803_722">Estamos contratando!</span><span className="v803_723">Entre em
                            Contato conosco</span></div>
                </div>
                <div className="v803_724"><span className="v803_725">Vantagens Marcaê</span>
                    <div className="v803_726"><span className="v803_727">Informações Centralizadas</span><span
                            className="v803_728">Transparência Financeira</span><span className="v803_729">Fonte confiável e
                            validada</span><span className="v803_730">Espaço para diálogo e aprendizado</span></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Login;
