import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export function Navigator() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">The Gaming Store</Navbar.Brand>
          <Nav className="d-flex gap-3">
            <Link to="/">Home</Link>
            <Link to="/products">Productos</Link>
            <Link to="/category/computadora">Computadora</Link>
            <Link to="/category/accesorios">Accesorios</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/Shop">Shop</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

