import { Container, Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
import moment from 'moment-timezone';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ProcessCoreTable() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/processcore`, {
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

    const handleDeleteData = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            try {
                if (result.isConfirmed) {
                    const response = await axios({
                        method: 'delete',
                        url: `${process.env.REACT_APP_BASE_URL}/processcore/${id}`,
                        headers: { access_token: localStorage.getItem("access_token") }
                    });
                    if (response.status === 200) {
                        console.log(`success delete data with id ${id}`);
                        MySwal.fire(
                            'Deleted!',
                            'Data has been deleted.',
                            'success'
                        )
                        const newList = dataList.filter(data => data.id !== id)
                        setDataList(newList)
                    }
                }
            } catch (err) {
                console.log(err);
            }
        })
    }

    const convertDate = (value) => {
        return moment(value).tz('Asia/Jakarta').format('D-MMMM-YYYY, HH:mm:ss');
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
        <Container className="mt-3 mb-5">
            <h5>Data Process Core</h5>
            <Link to="create">
                <Button variant="success">Create Process</Button>
            </Link>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>action</th>
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
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={data.id}>
                            <th>{index + 1}</th>
                            <td className="w-100">
                                <Button
                                    onClick={() => navigate(`edit/${data.id}`)}
                                    className="me-2"
                                    variant="primary"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => handleDeleteData(data.id)}
                                    variant="danger"
                                >Delete</Button>
                            </td>
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

                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProcessCoreTable