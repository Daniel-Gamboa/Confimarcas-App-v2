import './style.css';
import { useEffect, useState } from "react";
import { ItemComponent } from "../../components/Item";
import { Container, Row } from "react-bootstrap";
import { ItemCount } from '../../components/ItemCount';

export function ItemListContainer() {
const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    async function getDataFromBD () {
        const response = await fetch('https://api.mercadolibre.com/sites/MLC/search?q=dulces');
        const data = await response.json();
        setListProducts(data.results);
        }
        getDataFromBD();
    }, []);

  return (
    <>
      <Container>
        <Row>
          <h3 className="title text-center">Dulces</h3>
          <div className="cards-group">
              {
                  listProducts.map(producto => {
                      return(
                    <ItemComponent key={producto.id} img={producto.thumbnail} name={producto.title} sku={producto.SKU} price={producto.price} id={producto.id} />
                      )
                  })
              }
          </div>
          <ItemCount cantidadMinima='1' stock='5'/>
        </Row>
      </Container>
    </>
  )
};