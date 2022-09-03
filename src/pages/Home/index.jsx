import React, { useEffect } from "react";
import API from "../../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import { Container, CardGroup } from "react-bootstrap";
import { CardSkill } from "../../components/CardSkill";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

  const [id, setId] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button
              variant="primary"
              type="submit"
              onClick={() => handleShow()}
            >
              + Adicionar Skill
            </Button>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Skill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Selecionar Skill</Form.Label>
            <Form.Select
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="success" type="submit" onClick={skillsUsuario}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
