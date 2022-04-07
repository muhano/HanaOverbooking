import { Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function UserForm() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [userForm, setUserForm] = useState({
        email: "",
        password: ""
    });
    const [registerError, setRegisterError] = useState();

    const handleFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setUserForm({
            ...userForm,
            [field]: value,
        });
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}/user/register`,
                headers: { access_token: localStorage.getItem("access_token") },
                data: userForm
            });

            if (response.status === 201) {
                console.log("success add user");
                MySwal.fire(
                    'Success!',
                    'User has been created.',
                    'success'
                )
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            setRegisterError(err.response.data.message)
        }
    };

    return (
        <Container>
            <h5 className="mt-3">Create New User</h5>
            <Form onSubmit={handleAddUser} className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        value={userForm.email}
                        type="email"
                        onChange={handleFormInput}
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={userForm.password}
                        onChange={handleFormInput}
                        type="password"
                        placeholder=""
                    />
                </Form.Group>

                <Button  variant="primary" type="submit">
                    Submit
                </Button>

                {registerError && (
                    <h6 className="mt-3" style={{ color: 'red' }}>
                        {registerError}
                    </h6>
                )}
            </Form>
        </Container>
    )
}

export default UserForm;