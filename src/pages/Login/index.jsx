<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { toast } from "react-toastify";

export const Login = () => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrarSenha, setLembrarSenha] = useState();
  const [users, setUsers] = useState();
  const [checked, setChecked] = useState();
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  //busca todos os usuários
  const buscarUsers = async () => {
    const resposta = await API.get("api/users", {});
    setUsers(resposta.data);
  };

  //busca assim que a página carrega
  useEffect(() => {
    buscarUsers();
  }, []);

  //procura no array todos os logins e senhas e compara
  function logar() {
    const user = users.find((user) => login === user.login);
    if (typeof user !== "undefined") {
      if (user.password === senha) {
        localStorage.setItem("id", user.id);
        navigate({ pathname: "/Home" });
      }
    } else {
      toast.error("Usuário ou senha incorreta!");
      return false;
    }
  }

  function gravarSenha() {
    if (localStorage.getItem("senha")) {
      localStorage.removeItem("senha");
      setChecked(false);
    } else {
      localStorage.setItem("senha", senha);
      setChecked(true);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("senha")) {
      setSenha(localStorage.getItem("senha"));
    }
    if (localStorage.getItem("senha")) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, []);

=======

export const Login = () => {
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container>
            <h1 id="titulo">Login</h1>
            <Form>
              <Form.Group className="mb-3">
<<<<<<< HEAD
                <Form.Label>Login</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu login"
                  onChange={(e) => setLogin(e.target.value)}
                />
              </Form.Group>
              <Col>
                <Form.Group className="mb-1">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    value={senha}
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Digite sua senha"
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Mostrar senha"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  checked={checked}
                  type="checkbox"
                  label="Lembrar minha senha"
                  onClick={gravarSenha}
                />
=======
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group className="mb-1">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Lembrar minha senha" />
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
              </Form.Group>
            </Form>
          </Container>
          <Container style={{ textAlign: "center" }}>
<<<<<<< HEAD
            <Button variant="primary" type="submit" onClick={() => logar()}>
=======
            <Button variant="primary" type="submit">
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
              Entrar
            </Button>
            <br />
            <a href="/Cadastro" className="cadastro">
              Cadastre-se
            </a>
          </Container>
        </Col>
      </Row>
    </>
  );
};
