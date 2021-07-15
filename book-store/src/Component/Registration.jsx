import { Form, Col, Button } from 'react-bootstrap'



const Registration = () => {
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name" required />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" required />
                </Col>
            </Form.Row>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password Comfirm</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default Registration