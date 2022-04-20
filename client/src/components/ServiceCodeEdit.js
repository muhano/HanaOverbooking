import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ServiceCodeEdit() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const { id } = useParams();
    const [dataForm, setDataForm] = useState({
        service_code: "",
        name: "",
        version: "",
        http_method: "",
        path: "",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/servicecode/${id}`, {
                    headers: { access_token: localStorage.getItem("access_token") }
                }
                );

                let result = response.data
                setDataForm({
                    ...dataForm,
                    service_code: result.service_code,
                    name: result.name,
                    version: result.version,
                    http_method: result.http_method,
                    path: result.path,
                })
                setLoading(false);

            } catch (err) {
                console.log(err);
                setLoading(false);
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
                url: `${process.env.REACT_APP_BASE_URL}/servicecode/${id}`,
                headers: { access_token: localStorage.getItem("access_token") },
                data: dataForm
            });

            console.log(`success edit data with id ${id}`);

            if (response.status === 200) {
                MySwal.fire(
                    'Success!',
                    'Data has been edited.',
                    'success'
                )
                navigate("/servicecode");
            }
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };

    if (loading) {
        return (
            <Container className="mt-3">
                <h2>Loading...</h2>
            </Container>
        )
    }

    return (
        <Container>
            <h5 className="mt-3">Edit Service Code with Id {id}</h5>
            <Form onSubmit={handleEditData} className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>service_code</Form.Label>
                    <Form.Control
                        name="service_code"
                        value={dataForm.service_code}
                        type="number"
                        onChange={handleFormInput}
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

export default ServiceCodeEdit;