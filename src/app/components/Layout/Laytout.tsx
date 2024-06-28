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
        <Container fluid className='custom-bg'>
            <Row className='w-100 d-flex justify-content-center '>
                <Col xs={12} md={2} >
                    <Admindashboard/>
                </Col>
                <Col xs={12} md={10}>
                    <Navbar />
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default Layout;

