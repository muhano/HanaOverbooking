import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DashboardNavbar() {
    const MySwal = withReactContent(Swal)
    let navigate = useNavigate()

    const handleLogout = () => {
        MySwal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                MySwal.fire(
                    'Log Out Success!',
                    '',
                    'success'
                )
                navigate('/login')
            }
        })
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Data Process Api</Nav.Link>
                    <Nav.Link as={Link} to="processcore">Data Process Core</Nav.Link>
                    <Nav.Link as={Link} to="processfee">Data Process Fee</Nav.Link>
                    <Nav.Link as={Link} to="servicecode">Service Code</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="user/create">Add User</Nav.Link>
                    <Nav.Link onClick={handleLogout} href="">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default DashboardNavbar