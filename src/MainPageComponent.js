import {Card, Col, Row} from "react-bootstrap";
import ProfileDetails from "./ProfileDetails";
import './MainPageComponent.scss';

const MainPageComponent = () => {
    return(
            <Card.Body className="main">
                <Row>
                    <Col xs="3">
                        <ProfileDetails />
                    </Col>
                    <Col xs="6" md="6">2 of 2</Col>
                    <Col xs="3" md="3">3 of 3</Col>
                </Row>
            </Card.Body>
    )
}
export default MainPageComponent;