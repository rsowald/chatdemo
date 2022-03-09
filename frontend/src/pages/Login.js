import React from "react";
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
    return (
        <Container>
            <h2>Chat example</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        className="text-muted"
                        id="username"
                        placeholder="example: Morpheus"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Channels to join</Form.Label>
                    <Form.Control
                        type="text"
                        className="text-muted"
                        id="channels"
                        placeholder="example: office"
                    />
                    <div className="form-text">
                        Separate multiple channels with a comma.
                    </div>
                </Form.Group>
                <Button type="submit" className="btn btn-primary">Join Chat</Button>
            </Form>
        </Container>
    )
}

export default Login;