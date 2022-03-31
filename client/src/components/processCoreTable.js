import { Container, Table, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
import moment from 'moment';

function ProcessCoreTable() {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/processcore`, {
                    headers: { access_token: localStorage.getItem("access_token") }
                    }
                );

                setDataList(response.data)
                setLoading(false);
            } catch (err) {
                console.log(err);
                setError(err.response.data.message);
                setLoading(false)
            }
        }
        fetchData();
    }, []);

    const convertDate = (value) => {
        return moment(value).format('D-MM-YYYY, HH:mm:ss');
    }

    if (loading) {
        return (
            <Container className="mt-3">
                <h2>Loading...</h2>
            </Container>
        )
    }

    if (error) {
        return (
            <Container className="mt-3">
                <h2>Error: {error}</h2>
            </Container>
        )
    }

    return (
        <Container className="mt-3">
            <h5>Data Process Core</h5>
            <Link to="create">
                <Button variant="primary">Create Process</Button>
            </Link>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>id</th>
                        <th>org_name</th>
                        <th>org_id</th>
                        <th>merchant_name</th>
                        <th>merchant_id</th>
                        <th>terminal_name</th>
                        <th>terminal_id</th>
                        <th>cif</th>
                        <th>account</th>
                        <th>limit</th>
                        <th>channel</th>
                        <th>partners_id</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={data.id}>
                            <th>{index + 1}</th>
                            <td>{data.id}</td>
                            <td>{data.org_name}</td>
                            <td>{data.org_id}</td>
                            <td>{data.merchant_name}</td>
                            <td>{data.merchant_id}</td>
                            <td>{data.terminal_name}</td>
                            <td>{data.terminal_id}</td>
                            <td>{data.cif}</td>
                            <td>{data.account}</td>
                            <td>{data.limit}</td>
                            <td>{data.channel}</td>
                            <td>{data.partners_id}</td>
                            <td>{convertDate(data.created_at)}</td>
                            <td>{convertDate(data.updated_at)}</td>
                            <td className="w-100">
                                <Button
                                    // onClick={() => navigate(`processapi/edit/${data.id}`)}
                                    className="me-2"
                                    variant="success"
                                >
                                    Edit
                                </Button>
                                <Button
                                    // onClick={() => handleDeleteData(data.id)}
                                    variant="danger"
                                >Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProcessCoreTable