import axios from "axios";
import moment from 'moment-timezone';
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ServiceCodeTable() {
    const MySwal = withReactContent(Swal)
    let navigate = useNavigate();
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BASE_URL}/servicecode`, {
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
                        url: `${process.env.REACT_APP_BASE_URL}/servicecode/${id}`,
                        headers: { access_token: localStorage.getItem("access_token") }
                    });
                    if (response.status === 200) {
                        console.log(`success delete service code with id ${id}`);
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
            <h5>Service Code</h5>
            <Link to="create">
                <Button variant="success">Create Service Code</Button>
            </Link>
            <Table striped bordered hover responsive className="mt-3">
                <thead>
                    <tr>
                        <th>No. </th>
                        <th>action</th>
                        <th>service_code</th>
                        <th>name</th>
                        <th>version</th>
                        <th>http_method</th>
                        <th>path</th>
                        <th>created_at</th>
                        <th>updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    {dataList.map((data, index) => (
                        <tr key={data.id}>
                            <th>{index + 1}</th>
                            <td>
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
                            <td>{data.service_code}</td>
                            <td>{data.name}</td>
                            <td>{data.version}</td>
                            <td>{data.http_method}</td>
                            <td>{data.path}</td>
                            <td>{convertDate(data.created_at)}</td>
                            <td>{convertDate(data.updated_at)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default ServiceCodeTable;