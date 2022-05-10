import { Container, Form, Button } from "react-bootstrap"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ProcessFeeForm() {
    const MySwal = withReactContent(Swal)
    let navigate = useNavigate()
    const [dataForm, setDataForm] = useState({
        reff_num: "",
        merchant_id: "",
        merchant_name: "",
        channel: "",
        bank_reff_num: "",
        transaction_time: "",
        transaction_type: "",
        amount: "",
        fee: "",
        service_name: "",
        remarks: "",
        response_code: "",
        transaction_status: "",
        transaction_desc: ""
    });
    const [error, setError] = useState();

    const handleFormInput = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        setDataForm({
            ...dataForm,
            [field]: value,
        });
    };

    const handleAddData = async (e) => {
        e.preventDefault();
        try {

            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}/processfee`,
                headers: { access_token: localStorage.getItem("access_token") },
                data: dataForm
            });

            setError()
            console.log("success add data");
            if (response.status === 201) {
                MySwal.fire(
                    'Success!',
                    'Data has been created.',
                    'success'
                )
                navigate("/processfee");
            }
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        }
    };

    const removeScroll = (e) => e.target.blur()
    const removeSymbols = (evt) => (evt.key === 'e' || evt.key === '+' || evt.key === '-' || evt.key === '.') && evt.preventDefault()

    return (
        <Container>
            <h5 className="mt-3">Create New Data Process Fee</h5>
            <Form onSubmit={handleAddData} className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>reff_num</Form.Label>
                    <Form.Control
                        name="reff_num"
                        value={dataForm.reff_num}
                        type="number"
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_id</Form.Label>
                    <Form.Control
                        name="merchant_id"
                        value={dataForm.merchant_id}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_name</Form.Label>
                    <Form.Control
                        name="merchant_name"
                        value={dataForm.merchant_name}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
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
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>bank_reff_num</Form.Label>
                    <Form.Control
                        name="bank_reff_num"
                        value={dataForm.bank_reff_num}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>transaction_time</Form.Label>
                    <Form.Control
                        name="transaction_time"
                        value={dataForm.transaction_time}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>transaction_type</Form.Label>
                    <Form.Control
                        name="transaction_type"
                        value={dataForm.transaction_type}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>amount</Form.Label>
                    <Form.Control
                        name="amount"
                        value={dataForm.amount}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>fee</Form.Label>
                    <Form.Control
                        name="fee"
                        value={dataForm.fee}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>service_name</Form.Label>
                    <Form.Control
                        name="service_name"
                        value={dataForm.service_name}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>remarks</Form.Label>
                    <Form.Control
                        name="remarks"
                        value={dataForm.remarks}
                        onChange={handleFormInput}
                        maxLength={250}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>response_code</Form.Label>
                    <Form.Control
                        name="response_code"
                        value={dataForm.response_code}
                        onChange={handleFormInput}
                        onWheel={removeScroll}
                        onKeyDown={removeSymbols}
                        type="number"
                        placeholder="numbers"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>transaction_status</Form.Label>
                    <Form.Control
                        name="transaction_status"
                        value={dataForm.transaction_status}
                        onChange={handleFormInput}
                        maxLength={100}
                        type="text"
                        placeholder="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>transaction_desc</Form.Label>
                    <Form.Control
                        name="transaction_desc"
                        value={dataForm.transaction_desc}
                        onChange={handleFormInput}
                        maxLength={100}
                        type="text"
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

export default ProcessFeeForm