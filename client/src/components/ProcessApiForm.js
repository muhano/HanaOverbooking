import { Container, Form, Button } from "react-bootstrap"

function ProcessApiForm() {
    return (
        <Container>
            <h5 className="mt-3">Create New Data Process Api</h5>
            <Form className="mt-3">
                <Form.Group className="mb-3">
                    <Form.Label>org_id</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>merchant_id</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>client_id</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>client_secret</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>public_key</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>private_key</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>host_name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>ip_address</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>service_name</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Button className="mb-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default ProcessApiForm