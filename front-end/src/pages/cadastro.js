import React, { useState }  from "react";
import "./css/cadastro.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function cadastraPerfil(nome, boolProf, senha, email, tel, curriculo){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "nome": nome,
    "isProfessor": boolProf,
    "pwd": senha,
    "email": email,
    "telefone": tel,
    "curriculo": [
      curriculo
    ]
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:9000/perfil", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result);
      //alert(result)
      if(result == '{"message":"Perfil Criado"}'){
        alert('Perfil criado com sucesso!');
        const navigate = useNavigate();
        navigate('/login',{ replace:true});
      }
    })
    .catch(error => console.log('error', error)); 
}



function FormExample() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        const nome_form = event.target.elements[0].value;
        const telefone_form = event.target.elements[1].value;
        const email_form = event.target.elements[2].value;
        const senha_form = event.target.elements[3].value;
        const tipo_form = event.target.elements[5].value;
        const curriculo_form = event.target.elements[6].value;
        console.log(nome_form,tipo_form, senha_form,email_form, telefone_form, curriculo_form)
        cadastraPerfil(nome_form,tipo_form, senha_form,email_form, telefone_form, curriculo_form);
    }
      setValidated(true);
      
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Row className="mb-2 h-100 justify-content-center align-items-center">
          <Form.Group as={Col} md="8" controlId="formNome">
            <Form.Control name="formName"
              required
              type="text"
              placeholder="Nome completo"
            />
            <Form.Control.Feedback type="invalid">Por favor, informe um nome válido.</Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <br></br>
        <Row className="mb-3 h-100 justify-content-center align-items-center">
            <Form.Group as={Col} md="4" controlId="formTelefone">
                <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">+55</InputGroup.Text>
                <Form.Control
                name = "formTelefone"
                    type="text"
                    placeholder="Telefone"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Por favor, informe um telefone.
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
          <Form.Group as={Col} md="4" controlId="formEmail">
            <Form.Control name="formEmail" type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Por favor, informe um email válido
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <br></br>
        <Row className="h-100 justify-content-center align-items-center">
        <Form.Group as={Col} md="4" controlId="formSenha">
            <Form.Control name="formSenha" type="password" placeholder="Senha" required />
            <Form.Control.Feedback type="invalid">
              Por favor, informe uma senha válida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formSenhaConfirm">
            <Form.Control name="formSenhaConfirm" type="password" placeholder="Confirmar senha" required />
            <Form.Control.Feedback type="invalid">
              As senhas informadas precisam ser iguais!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br></br>
        <Row className="h-100 justify-content-center align-items-center">
            
            <Form.Group as={Col} md="4" controlId="formTipo">
                <Form.Select name="formTipo" defaultValue="Sou aluno">
                    <option value="false">Sou aluno</option>
                    <option value="true">Sou professor</option>
                </Form.Select>
                
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formCurriculo">
                <Form.Control name="formCurriculo" type="text" placeholder="Linkedin (opcional)" />
          </Form.Group>
        </Row>
            <br></br>
        <Row className="justify-content-center align-items-center">
                <Col className="mx-auto d-flex text-center mx-auto">
                    <Form.Group className="mb-3 justify-content-center align-items-center mx-auto">
                    <Form.Check
                    name="formTerm"
                        required
                        label="Aceito os termos de uso"
                        feedback="Você deve aceitar os termos de uso."
                        feedbackType="invalid"
                    />

                    </Form.Group>
                </Col>
        </Row>
        <br></br>
        <Row className="justify-content-center align-items-center">
            <Col className="mx-auto text-center">
                <Button name="cadastrar" className="button_cadastrar align-center mx-auto btn-lg" type="submit">Cadastrar</Button>
            </Col>
        </Row>
        <br></br>
      </Form>
    );
  }
class Cadastro extends React.Component{

    render(){
        return (
        <div className="v811_553">
            <div className="container text-white">
            <br></br><br></br>
                <Card><Card.Body>
                    <h3 className="text-center">Cadastro</h3>
                    <h4 className="text-center">Informe seus dados</h4>
                    <br></br>
                    <FormExample />      
                </Card.Body></Card>
                <br></br><br></br>
            </div>
        </div>

     );
 }
}
export default Cadastro;
