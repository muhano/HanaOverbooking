import { Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ServiceCodeForm() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        service_code: "",
        name: "",
        version: "",
        http_method: "",
        path: "",
    });
    const [error, setError] = useState();

    const handleFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setDataForm({
            ...dataForm,
            [field]: value,
        });
    };

    const handleAddData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}/servicecode`,
                headers: { access_token: localStorage.getItem("access_token") },
                data: dataForm
            });

            if (response.status === 201) {
                console.log("success add data");
                MySwal.fire(
                    'Success!',
                    'Data has been created.',
                    'success'
                )
                navigate("/servicecode");
            }
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };

    const removeScroll = (e) => e.target.blur()
    const removeSymbols = (evt) => (evt.key === 'e' || evt.key === '+' || evt.key === '-' || evt.key === '.') && evt.preventDefault()

    return (
        <Container>
            <h5 className="mt-3">Create New Service Code</h5>
            <Form onSubmit={handleAddData} className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>service_code</Form.Label>
                    <Form.Control
                        name="service_code"
                        value={dataForm.service_code}
                        type="number"
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>name</Form.Label>
                    <Form.Control
                        name="name"
                        value={dataForm.name}
                        type="text"
                        onChange={handleFormInput}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>version</Form.Label>
                    <Form.Control
                        name="version"
                        value={dataForm.version}
                        type="text"
                        onChange={handleFormInput}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>http_method</Form.Label>
                    <Form.Control
                        name="http_method"
                        value={dataForm.http_method}
                        type="text"
                        onChange={handleFormInput}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>path</Form.Label>
                    <Form.Control
                        name="path"
                        value={dataForm.path}
                        type="text"
                        onChange={handleFormInput}
                        placeholder="text"
                    />
                </Form.Group>

                {error && (
                    <h6 className="mt-3" style={{ color: 'red' }}>
                        {error}
                    </h6>
                )}

                <Button className="mb-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ServiceCodeForm;