import '../styles/FormNumber.css'
import { Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ProcessApiForm() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();
    const [dataForm, setDataForm] = useState({
        org_id: "",
        merchant_id: "",
        client_id: "",
        client_secret: "",
        public_key: "",
        private_key: "",
        host_name: "",
        ip_address: "",
        service_name: "",
        service_code: ""
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
                url: `${process.env.REACT_APP_BASE_URL}/processapi`,
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
                navigate("/");
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
            <h5 className="mt-3">Create New Data Process Api</h5>
            <Form onSubmit={handleAddData} className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>org_id</Form.Label>
                    <Form.Control
                        name="org_id"
                        value={dataForm.org_id}
                        type="number"
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_id</Form.Label>
                    <Form.Control
                        name="merchant_id"
                        value={dataForm.merchant_id}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>client_id</Form.Label>
                    <Form.Control
                        name="client_id"
                        value={dataForm.client_id}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>client_secret</Form.Label>
                    <Form.Control
                        name="client_secret"
                        value={dataForm.client_secret}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>public_key</Form.Label>
                    <Form.Control
                        name="public_key"
                        value={dataForm.public_key}
                        onChange={handleFormInput}
                        as="textarea"
                        rows={3}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>private_key</Form.Label>
                    <Form.Control
                        name="private_key"
                        value={dataForm.private_key}
                        onChange={handleFormInput}
                        as="textarea"
                        rows={3}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>host_name</Form.Label>
                    <Form.Control
                        name="host_name"
                        value={dataForm.host_name}
                        onChange={handleFormInput}
                        maxLength={100}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>ip_address</Form.Label>
                    <Form.Control
                        name="ip_address"
                        value={dataForm.ip_address}
                        onChange={handleFormInput}
                        as="textarea"
                        rows={3}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>service_name</Form.Label>
                    <Form.Control
                        name="service_name"
                        value={dataForm.service_name}
                        onChange={handleFormInput}
                        as="textarea"
                        rows={3}
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>service_code</Form.Label>
                    <Form.Control
                        name="service_code"
                        value={dataForm.service_code}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
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

export default ProcessApiForm