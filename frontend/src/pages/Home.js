import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "../components/Sidenav";
import Channel from "../components/Channel";

function Home() {
    return (
        <Container className='container-sm'>
            <Row className=' justify-content-center'>
                <Col sm={3}>
                    <Sidenav />
                </Col>
                <Col sm={7}>
                    <Channel />
                </Col>
            </Row>

        </Container>
    );
};

export default Home;