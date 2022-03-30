import { useEffect } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "axios";


function ProcessApiEdit() {
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `http://localhost:3000/processapi/${id}`
                );

                console.log(response);
                // setDataList(response.data)
                // setLoading(false);

            } catch (err) {
                console.log(err);
                // setError(err);
                // setLoading(false)
            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <h4>this is process api edit form with page : {id}</h4>
        </Container>
    )
}

export default ProcessApiEdit