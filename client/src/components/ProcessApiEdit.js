import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function ProcessApiEdit() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const { id } = useParams();
    const [dataForm, setDataForm] = useState({
        org_id: "",
        merchant_id: "",
        client_id: "",
        client_secret: "",
        public_key: "",
        private_key: "",
        host_name: "",
        ip_address: "",
        service_name: ""
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/processapi/${id}`,{
                        headers: {access_token : localStorage.getItem("access_token")}
                    }
                );

                let result = response.data
                setDataForm({
                    ...dataForm,
                    org_id: result.org_id,
                    merchant_id: result.merchant_id,
                    client_id: result.client_id,
                    client_secret: result.client_secret,
                    public_key: result.public_key,
                    private_key: result.private_key,
                    host_name: result.host_name,
                    ip_address: result.ip_address,
                    service_name: result.service_name
                })

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const handleFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setDataForm({
            ...dataForm,
            [field]: value,
        });
    };

    const handleEditData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'put',
                url: `http://localhost:3000/processapi/${id}`,
                headers: {access_token : localStorage.getItem("access_token")},
                data: dataForm
            });

            console.log(`success edit data with id ${id}`);
            
            if (response.status === 200) {
                MySwal.fire(
                    'Success!',
                    'Data has been edited.',
                    'success'
                )
                navigate("/");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <h5 className="mt-3">Edit Data Process Api with Id {id}</h5>
            <Form
                onSubmit={handleEditData}
                className="mt-3"
            >
                <Form.Group className="mb-3">
                    <Form.Label>org_id</Form.Label>
                    <Form.Control
                        name="org_id"
                        value={dataForm.org_id}
                        type="number"
                        onChange={handleFormInput}
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_id</Form.Label>
                    <Form.Control
                        name="merchant_id"
                        value={dataForm.merchant_id}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>public_key</Form.Label>
                    <Form.Control
                        name="public_key"
                        value={dataForm.public_key}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>private_key</Form.Label>
                    <Form.Control
                        name="private_key"
                        value={dataForm.private_key}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                    />
                </Form.Group>

                <Button className="mb-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ProcessApiEdit