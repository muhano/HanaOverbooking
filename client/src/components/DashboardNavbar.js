import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

function DashboardNavbar() {
    let navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
      }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Data Process Api</Nav.Link>
                    <Nav.Link as={Link} to="processcore">Data Process Core</Nav.Link>
                    <Nav.Link as={Link} to="processfee">Data Process Fee</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link onClick={handleLogout} href="">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default DashboardNavbar