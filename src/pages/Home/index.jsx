<<<<<<< HEAD
import React, { useEffect } from "react";
import API from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { Container, CardGroup } from "react-bootstrap";
import { CardSkill } from "../../components/CardSkill";
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export const Home = () => {
  const [skill, setSkill] = useState("");

  const navigate = useNavigate();
  const [skills, setSkills] = useState([
    {
      id: 0,
      name: "",
      version: "",
      description: "",
      imageUrl: "",
    },
  ]);

=======

export const Home = () => {
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

<<<<<<< HEAD
  function skillsUsuario() {
    API.post(
      "api/userSkills",
      {
        createdAt: new Date(),
        user: localStorage.getItem("id"),
        skill: skill,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        handleClose();
      });
  }

  function handleLogout() {
    localStorage.clear();
    navigate({ pathname: "/Login" });
  }

  const buscarSkills = async () => {
    const resposta = await API.get("api/skills", {});
    setSkills(resposta.data);
  };

  useEffect(() => {
    buscarSkills();
  }, []);

  return (
    <>
      <Header />
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container style={{ textAlign: "center" }}>
=======
  const setData = (id) => {
    setId(id);
    {
      handleShow();
    }
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col xs="8" sm="6" md="5" lg="4" xl="3">
          <Container style={{ textAlign: "center" }}>
            <h1 id="titulo">Home</h1>
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleShow()}
            >
              + Adicionar Skill
            </Button>
<<<<<<< HEAD
          </Container>
        </Col>
      </Row>
      <Container className="listaSkills">
        <Row className=" justify-content-center flex-wrap gap-3">
          <CardSkill />
        </Row>
        <Button className="logout" onClick={() => handleLogout()}>
          Logout
        </Button>
      </Container>
=======
            <br />
          </Container>
        </Col>
      </Row>
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Selecionar Skill</Form.Label>
            <Form.Select
<<<<<<< HEAD
              onChange={(e) => {
                setSkill(e.target.value.id);
              }}
            >
              <option value="">Selecione</option>
              {skills.map((skill) => {
                return (
                  <option key={skill.id} value={skill.name}>
                    {skill?.name}
                  </option>
                );
              })}
            </Form.Select>
=======
              aria-label="Default select example"
              // onChange={(e) =>
              //   setDataProduto({
              //     ...dataProduto,
              //     categoria: e.target.value,
              //   })
              // }
              // value={dataProduto.categoria}
            >
              <option value="">Selecione</option>
              <option>ahiduhas</option>
              {/* {categorias.map((categoria, i) => {
                      return (
                        <option key={i} value={categoria.nome}>
                          {categoria?.nome}
                        </option> */}
              {/* ); */}
              {/* })} */}
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                placeholder="Descrição da Skill"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Level</Form.Label>
              <Form.Control type="number" placeholder="Level da Skill" autoFocus />
            </Form.Group>
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
<<<<<<< HEAD
          <Button variant="success" type="submit" onClick={skillsUsuario}>
=======
          <Button variant="success" type="submit" onClick={handleClose}>
>>>>>>> 52cffad2d4cb151ef66f885b7d34fcc1e7f0600e
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
