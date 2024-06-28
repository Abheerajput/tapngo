import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Admindashboard from '../../Dashboard/maindashboard/Admindashboard';
import "./layout.css";
import Navbar from '@/app/Dashboard/Header/page';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container fluid className='custom-bg px-0 px-lg-3'>
            <Row className='w-100 d-flex justify-content-center '>
                <Col xs={12} lg={1} >
                    <Admindashboard/>
                </Col>
                <Col lg={1} className='d-xxl-none '></Col>
                <Col xs={12} lg={9} xl={10} xxl={10} className=''>
                    <Navbar />
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;

