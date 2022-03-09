import React from "react";
import { Nav } from "react-bootstrap";

function Sidenav() {
    return (
        <Nav variant="pills" defaultActiveKey="/myChannel" className="flex-column">
            <h3>This will be the Sidenav</h3>
            <Nav.Link eventKey="myChannel">Channel 1</Nav.Link>
            <Nav.Link eventKey="channel2">Channel 2</Nav.Link>
            <Nav.Link eventKey="channel3">Channel 3</Nav.Link>
            <Nav.Link eventKey="channel4">Channel 4</Nav.Link>
            <Nav.Link eventKey="channel5">Channel 5</Nav.Link>
            <Nav.Link eventKey="channel6">Channel 6</Nav.Link>
        </Nav>
    );
};

export default Sidenav;