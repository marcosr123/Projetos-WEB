import React from "react";
import {Row,Col,Card,Carousel,Footer} from 'react-materialize';
import UserProfile from '../user_profile/user_profile';
import Experience from '../experience/experience';
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/company2.png';

const Home = () => (
    <Row>
        <Carousel options={{fullWidth: true,indicators: true}} images={['https://ichef.bbci.co.uk/news/660/cpsprodpb/3DAD/production/_104898751_gettyimages-844466808.jpg',
        'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1502826406/1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg?itok=XFE9vQPZ',
        '',
    ]}/>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">Sobre Nós</h5>
            <Card>
                <div>
                    <p><b>Lorem</b></p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <br/>
                    <p><b>Ipsum</b></p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiencias</h5>
            <Experience title="Ruby Developer" company="Soundcloud" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum." avatar={company_avatar}/>
            <Experience title="React Developer" company="Twitter" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum." avatar={company_avatar2}/>
        </Col>
        <Footer copyrights="© Direitos reservados, Loja do Marcos LTDA."
        moreLinks={<a>https://www.ej4bytes.com.br</a>}
        links={<ul></ul>}
        className="#1565c0 blue darken-3"
        >

    </Footer>
    </Row>
    
);

export default Home;