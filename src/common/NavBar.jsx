import { Navbar, Container, Nav } from "react-bootstrap/";
import useHandle from "../hooks/useHandle";

const NavBar = () => {
  const { onClickDetailPage } = useHandle();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand honClick={onClickDetailPage("/")}>Brand</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={onClickDetailPage("/")}>Home</Nav.Link>
            <Nav.Link onClick={onClickDetailPage("/detail")}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
