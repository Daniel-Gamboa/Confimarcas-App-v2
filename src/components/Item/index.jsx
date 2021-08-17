import './style.css';
import { Link } from 'react-router-dom';
import { Card, CardGroup } from 'react-bootstrap';

export function ItemComponent({ img, nombre, sku, precio, id }) {
  return (
    <CardGroup>
      <Card className="card-style" >
        <Card.Img className="img-card" variant="top" src={img} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>SKU: {sku}</Card.Text>
          <Card.Text className="price-card">CLP {precio}</Card.Text>
        </Card.Body>
        <Card.Footer className="footer-card">
          <Link to={`/item/${id}`} className="link">Ver Producto</Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
};
