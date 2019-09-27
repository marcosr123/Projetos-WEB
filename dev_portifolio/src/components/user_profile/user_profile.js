import React from "react";
import {Row,Col,Card} from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" alt="Decorative"/>
            </Col>
        </Row>
        <Row className="center-align">
            <h5>Rayna God</h5>
            <p className="#ffab91 deep-orange lighten-3">Ruby Developer</p>
        </Row>
    </Card>
);

export default UserProfile;