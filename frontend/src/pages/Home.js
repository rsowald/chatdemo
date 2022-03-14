import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "../components/Sidenav";
import Channel from "../components/Channel";
import React, { useState } from 'react';

function Home({ channels, username, chatClient }) {
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);

    return (
        <Container className='container-sm mt-5'>
            <Row className="text-center mt-4">
                <h1>Welcome to the {selectedChannel} channel, {username}!</h1>
            </Row>
            <Row className='justify-content-center'>

                <Col sm={3} className="mt-3" >
                    <Sidenav setSelectedChannel={setSelectedChannel} channels={channels} />
                </Col>
                <Col sm={7} className="mt-3" >
                    <Channel selectedChannel={selectedChannel} chatClient={chatClient} />
                </Col>
            </Row>

        </Container>
    );
};

export default Home;