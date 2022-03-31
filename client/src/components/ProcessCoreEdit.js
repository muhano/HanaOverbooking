import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";

function ProcessCoreEdit() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [dataForm, setDataForm] = useState({
        org_name: "",
        org_id: "",
        merchant_name: "",
        merchant_id: "",
        terminal_name: "",
        terminal_id: "",
        cif: "",
        account: "",
        limit: "",
        channel: "",
        partners_id: ""
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/processcore/${id}`, {
                    headers: { access_token: localStorage.getItem("access_token") }
                }
                );

                let result = response.data
                setDataForm({
                    ...dataForm,
                    org_name: result.org_name,
                    org_id: result.org_id,
                    merchant_name: result.merchant_name,
                    merchant_id: result.merchant_id,
                    terminal_name: result.terminal_name,
                    terminal_id: result.terminal_id,
                    cif: result.cif,
                    account: result.account,
                    limit: result.limit,
                    channel: result.channel,
                    partners_id: result.partners_id
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
                url: `http://localhost:3000/processcore/${id}`,
                headers: { access_token: localStorage.getItem("access_token") },
                data: dataForm
            });

            console.log(`success edit data with id ${id}`);

            if (response.status === 200) {
                navigate("/processcore");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <h5 className="mt-3">Edit Data Process Core with Id {id}</h5>
            <Form
                onSubmit={handleEditData} 
                className="mt-3"
            >
                <Form.Group className="mb-3">
                    <Form.Label>org_name</Form.Label>
                    <Form.Control
                        name="org_name"
                        value={dataForm.org_name}
                        maxLength={250}
                        type="text"
                        onChange={handleFormInput}
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>org_id</Form.Label>
                    <Form.Control
                        name="org_id"
                        value={dataForm.org_id}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_name</Form.Label>
                    <Form.Control
                        name="merchant_name"
                        value={dataForm.merchant_name}
                        onChange={handleFormInput}
                        type="number"
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
                    <Form.Label>terminal_name</Form.Label>
                    <Form.Control
                        name="terminal_name"
                        value={dataForm.terminal_name}
                        onChange={handleFormInput}
                        maxLength={50}
                        type="text"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>terminal_id</Form.Label>
                    <Form.Control
                        name="terminal_id"
                        value={dataForm.terminal_id}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>cif</Form.Label>
                    <Form.Control
                        name="cif"
                        value={dataForm.cif}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>account</Form.Label>
                    <Form.Control
                        name="account"
                        value={dataForm.account}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>limit</Form.Label>
                    <Form.Control
                        name="limit"
                        value={dataForm.limit}
                        onChange={handleFormInput}
                        type="number"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>channel</Form.Label>
                    <Form.Control
                        name="channel"
                        value={dataForm.channel}
                        onChange={handleFormInput}
                        maxLength={50}
                        type="text"
                        placeholder=""
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>partners_id</Form.Label>
                    <Form.Control
                        name="partners_id"
                        value={dataForm.partners_id}
                        onChange={handleFormInput}
                        maxLength={50}
                        type="text"
                        placeholder=""
                    />
                </Form.Group>

                <Button className="mb-5" variant="primary" type="submit">
                    Submit
                </Button>

                {/* {error && (
                    <h6 className="mt-3" style={{ color: 'red' }}>
                        {error}
                    </h6>
                )} */}
            </Form>
        </Container>
    )
}

export default ProcessCoreEdit