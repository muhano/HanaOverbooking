import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"

function DashboardNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Data Process Core</Nav.Link>
                    <Nav.Link as={Link} to="processcore">Data Process Core</Nav.Link>
                    <Nav.Link as={Link} to="processfee">Data Process Fee</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default DashboardNavbar