import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/logo.png"


export const Header = () => {
  return (
  <>
  <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
  </>
    )
};
