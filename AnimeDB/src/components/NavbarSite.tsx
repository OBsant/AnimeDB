import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarSite = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="/AnimeDB/#/">AnimeDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/AnimeDB/#/">Home</Nav.Link>
              <Nav.Link href="/AnimeDB/#/animes">Top Animes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSite;
