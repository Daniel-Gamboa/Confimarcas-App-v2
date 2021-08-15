import './style.css';
import logoSin from '../.././logoSin.png';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Nav } from 'react-bootstrap';
// import { CartWidgetComponent } from '../CartWidgetComponent';
// import { CartContext } from '../../context/CartContext';

export function NavBarComponent() {
//   const { totalItems } = useContext(CartContext);

  return (
    <>
      <Row className="navbar mb-3">
        <Col md="3">
          <Nav>
            <Nav.Item>
              <Link to={'/'}><img src={logoSin} height="120" alt="logo" /></Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md="7">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link> <Link to={'/'} className="link">HOME</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/fiambreras'} className="link">FIAMBRERAS</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/expositores'} className="link">EXPOSITORES</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link> <Link to={'/category/tarrinas'} className="link">TARRINAS</Link ></Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col md="2" >
          <Nav className="justify-content-left">
            {/* <Link to={"/cart"}> <CartWidgetComponent /> {totalItems}</Link> */}
          </Nav>
        </Col>
      </Row>
    </>
  )
};
