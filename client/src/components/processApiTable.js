import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"

function ProcessApiTable() {
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(
              `http://localhost:3000/processapi`
            );

            console.log(response)
    
            // response.data.results.forEach(async (pokemon) => {
            //   const result = await axios.get(pokemon.url);
            //   console.log(result.data);
            //   setPokemonList((oldPokemonList) => [...oldPokemonList, result.data]);
            //   setLoading(false);
            // });
          } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false)
          }
        }
        fetchData();
      }, []);

    return (
        <Container>
            <h3>This table for data process api</h3>
        </Container>
    )
}

export default ProcessApiTable