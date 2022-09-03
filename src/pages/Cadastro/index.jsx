<<<<<<< HEAD
import { React, useState } from "react";
=======
import React from "react";
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import API from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const Cadastro = () => {
  const [checked, setChecked] = useState(false);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const confirmaSenha = () => {
    if (senha === senha2) {
      cadastrar();
    } else {
      alert("Senhas não coincidem!")
    }
  };
  const navigate = useNavigate();

  function cadastrar() {
    API.post(
        "api/users",
        {
         login: login,
         password: senha,
         lastLoginDate: "2022-09-03"
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate({pathname:"/Login"})
      })
      .catch((error) => {
        toast.error("Não foi possível realizar o cadastro");
      });
  }
=======
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const Cadastro = () => {

    // const [data, setData] = useState({
    //   email: "",
    //   senha: ""
    // })
    // const { register, setValue, setFocus, handleSubmit } = useForm();

    // function confirmaSenha() {
    //     if (senha === senha2) {
    //       enviar();
    //     } else {
    //       console.log("Senhas nao coincidem");
    //     }
    //   }
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
    
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container>
            <h1 id="titulo">Cadastro</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
<<<<<<< HEAD
                <Form.Control 
                 onChange={(e) => setLogin(e.target.value)}
                type="email" placeholder="Digite seu e-mail" />
=======
                <Form.Control type="email" placeholder="Digite seu e-mail" />
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
<<<<<<< HEAD
                <Form.Control type={checked ? "text" : "password"} 
                 onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha" 
                />
              </Form.Group>
             
              <Form.Group className="mb-3">
                <Form.Label> Confirmar Senha</Form.Label>
                <Form.Control type={checked ? "text" : "password"}
                onChange={(e) => setSenha2(e.target.value)}
                placeholder="Digite sua senha novamente" 
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Mostrar senhas"
                  onClick={() => setChecked(!checked)}
                />
              </Form.Group>
            </Form>
          </Container>
          <Container style={{textAlign: "center"}}>
              <Button variant="primary" type="submit" onClick={confirmaSenha}>
                Salvar
              </Button>
              <a href="/Login">Fazer login</a>
=======
                <Form.Control type="password" placeholder="Digite sua senha" 
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label> Confirmar Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha novamente" 
                />
              </Form.Group>

            </Form>
          </Container>
          <Container style={{textAlign: "center"}}>
              <Button variant="primary" type="submit">
                Salvar
              </Button>
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
              </Container>
        </Col>
      </Row>
    </>
  );
};
