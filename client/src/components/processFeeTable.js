import axios from "axios";
import moment from 'moment';
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"


function ProcessFeetable() {
    let navigate = useNavigate();
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/processfee`, {
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

    const handleDeleteData = async (id) => {
        try {
            const response = await axios({
                method: 'delete',
                url: `http://localhost:3000/processfee/${id}`,
                headers: { access_token: localStorage.getItem("access_token") }
            });
            if (response.status === 200) {
                console.log(`success delete data with id ${id}`);
                const newList = dataList.filter(data => data.id !== id)
                setDataList(newList)
            }
        } catch (err) {
            console.log(err);
        }
    }

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
            <h5>Data Process Fee</h5>
            <Link to="create">
                <Button variant="primary">Create Process</Button>
            </Link>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>action</th>
                        <th>reff_num</th>
                        <th>merchant_id</th>
                        <th>merchant_name</th>
                        <th>channel</th>
                        <th>bank_reff_num</th>
                        <th>transaction_time</th>
                        <th>transaction_type</th>
                        <th>amount</th>
                        <th>fee</th>
                        <th>service_name</th>
                        <th>remarks</th>
                        <th>response_code</th>
                        <th>transaction_status</th>
                        <th>transaction_desc</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={data.id}>
                            <th>{index + 1}</th>
                            <td className="w-100">
                                <Button
                                    onClick={() => navigate(`processapi/edit/${data.id}`)}
                                    className="me-2"
                                    variant="success"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => handleDeleteData(data.id)}
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </td>
                            <td>{data.reff_num}</td>
                            <td>{data.merchant_id}</td>
                            <td>{data.merchant_name}</td>
                            <td>{data.channel}</td>
                            <td>{data.bank_reff_num}</td>
                            <td>{data.transaction_time}</td>
                            <td>{data.transaction_type}</td>
                            <td>{data.amount}</td>
                            <td>{data.fee}</td>
                            <td>{data.service_name}</td>
                            <td>{data.remarks}</td>
                            <td>{data.response_code}</td>
                            <td>{data.transaction_status}</td>
                            <td>{data.transaction_desc}</td>
                            <td>{convertDate(data.created_at)}</td>
                            <td>{convertDate(data.updated_at)}</td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProcessFeetable