import React from "react";
import {Col, Row, Card } from "react-bootstrap";
import img1 from "../images/Group 29612148.jpg";
import img2 from "../images/Group 29612149.jpg";


const Page4 = () => {
    return (
        <div className="page4">
            <h1>Clinical tools - at a glance</h1>
            <Row xs={1} md={2} className="g-2 card-row">
                <Col>
                <Card style={{ backgroundColor: "#EEEEEE"}}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                    <Card.Title className="card-title">Dosing guide</Card.Title>
                    <Card.Text className="card-text">
                        Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). 
                    </Card.Text>
                        <a href="/#">Learn more about application and dosing</a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ backgroundColor: "#EEEEEE"}}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                    <Card.Title className="card-title">Patient injection made simple</Card.Title>
                    <Card.Text className="card-text">
                        This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.  
                    </Card.Text>
                        <a href="/#">Watch the video</a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Page4;