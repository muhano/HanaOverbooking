import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"

function ProcessApiTable() {
  let navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/processapi`, {
            headers: {access_token : localStorage.getItem("access_token")}
          }
        );

        setDataList(response.data)
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  const handleDeleteData = async (id) => {
    try {
      const response = await axios({
        method: 'delete',
        url:`http://localhost:3000/processapi/${id}`
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

  if (loading) {
    return (
      <Container className="mt3">
        <h2>Loading...</h2>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt3">
        <h2>{error.message}</h2>
      </Container>
    )
  }

  return (
    <Container className="mt-3">
      <h5>Data Process API</h5>
      <Link to="processapi/create">
        <Button variant="primary">Create Process</Button>
      </Link>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>No. </th>
            <th>org_id</th>
            <th>merchant_id</th>
            <th>client_id</th>
            <th>client_secret</th>
            <th>public_key</th>
            <th>private_key</th>
            <th>host_name</th>
            <th>ip_address</th>
            <th>service_name</th>
            <th>created_at</th>
            <th>updated_at</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((data, index) => (
            <tr key={data.id}>
              <th>{index + 1}</th>
              <td>{data.org_id}</td>
              <td>{data.merchant_id}</td>
              <td>{data.client_id}</td>
              <td>{data.client_secret}</td>
              <td>{data.public_key}</td>
              <td>{data.private_key}</td>
              <td>{data.host_name}</td>
              <td>{data.ip_address}</td>
              <td>{data.service_name}</td>
              <td>{data.created_at}</td>
              <td>{data.updated_at}</td>
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
                >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default ProcessApiTable