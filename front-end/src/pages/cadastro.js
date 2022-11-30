import React, { useState }  from "react";
import "./css/cadastro.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import $ from 'jquery';

function FormExample() {
    const [validated, setValidated] = useState(false);

    function cadastraPerfil(nome, boolProf, senha, email, tel, curriculo){
        var settings = {
            "url": "http://localhost:9000/perfil",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
            "data": JSON.stringify({
              "nome": nome,
              "isProfessor": boolProf,
              "pwd": senha,
              "email": email,
              "telefone": tel,
              "curriculo": curriculo
            }),
          };
          
          $.ajax(settings).done(function (response) {
            alert(response);
            console.log(response);
        });
    };
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        const nome = event.target.elements[0].value;
        const tipo = event.target.elements[1].value;
        const senha = event.target.elements[2].value;
        const email = event.target.elements[3].value;
        const telefone = event.target.elements[4].value;
        const curriculo = event.target.elements[5].value;
      
        cadastraPerfil(nome,tipo, senha,email, telefone, curriculo);
      
    }
      setValidated(true);
      
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
        <Row className="mb-2 h-100 justify-content-center align-items-center">
          <Form.Group as={Col} md="8" controlId="formNome">
            <Form.Control //name="formName"
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
            <Form.Control type="text" placeholder="Email" required />
            <Form.Control.Feedback type="invalid">
              Por favor, informe um email válido
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <br></br>
        <Row className="h-100 justify-content-center align-items-center">
        <Form.Group as={Col} md="4" controlId="formSenha">
            <Form.Control type="password" placeholder="Senha" required />
            <Form.Control.Feedback type="invalid">
              Por favor, informe uma senha válida.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formSenhaConfirm">
            <Form.Control type="password" placeholder="Confirmar senha" required />
            <Form.Control.Feedback type="invalid">
              As senhas informadas precisam ser iguais!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br></br>
        <Row className="h-100 justify-content-center align-items-center">
            
            <Form.Group as={Col} md="4" controlId="formTipo">
                <Form.Select defaultValue="Sou aluno">
                    <option value="false">Sou aluno</option>
                    <option value="true">Sou professor</option>
                </Form.Select>
                
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="formCurriculo">
                <Form.Control type="text" placeholder="Linkedin (opcional)" />
          </Form.Group>
        </Row>
            <br></br>
        <Row className="justify-content-center align-items-center">
                <Col className="mx-auto d-flex text-center mx-auto">
                    <Form.Group className="mb-3 justify-content-center align-items-center mx-auto">
                    <Form.Check
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
                <Button className="button_cadastrar align-center mx-auto btn-lg" type="submit">Cadastrar</Button>
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
