
import './style.css';
import { useEffect, useState } from "react";
import { ItemComponent } from "../../components/Item";
import { Container, Row } from "react-bootstrap";
import { ItemCountComponent } from '../../components/ItemCount';
import { useParams } from 'react-router';

const listaProductos = [{
  
    "id": 1,
    "nombre": "Ballenas Rellenas",
    "descripcion": "gomas",
    "categoriaId" : "fiambreras",
    "precio": 16259,
    "imagen": "/Imagenes/Fiambreras/BallenasRellenas.PNG",
    "stock": 100,
    "cantidadCompra": 0
  },

  {
      "id": 2,
      "nombre": "Bichesitos",
      "descripcion": "gomas",
      "categoriaId" : "fiambreras",
      "precio": 16259,
      "imagen": "/Imagenes/Fiambreras/Bichesitos.PNG",
      "stock": 100,
      "cantidadCompra": 0
  },

  {
      "id": 3,
      "nombre": "Cerebros Rellenos",
      "descripcion": "gomas",
      "categoriaId" : "fiambreras",
      "precio": 16259,
      "imagen": "/Imagenes/Fiambreras/CerebrosRellenos.PNG",
      "stock": 100,
      "cantidadCompra": 0
    },
    
    {
      "id": 4,
      "nombre": "Chilitos Rellenos Picantes",
      "descripcion": "gomas",
      "categoriaId" : "fiambreras",
      "precio": 16259,
      "imagen": "/Imagenes/Fiambreras/ChilitosRellenosPicantes.PNG",
      "stock": 100,
"cantidadCompra": 0
    },

    {
      "id": 5,
      "nombre": "Colmillos",
      "descripcion": "gomas",
      "categoriaId" : "fiambreras",
      "precio": 16259,
      "imagen": "/Imagenes/Fiambreras/Colmillos.PNG",
      "stock": 100,
"cantidadCompra": 0
    },
];

export function ItemListContainer() {
const [listProducts, setListProducts] = useState([]);
const {id} = useParams

useEffect(() => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(listaProductos);
    }, 2000);
  });

  promesa.then(data => {
    setListProducts(data);
  })

}, [])

console.log(listProducts);
  return (
    <>
      <Container>
        <Row>
          <h3 className="title text-center">Dulces</h3>
          <div className="cards-group">
              {
                  listProducts.map(producto => {
                    return (
                      <ItemComponent key={producto.id} nombre={producto.nombre} precio={producto.precio} img={producto.imagen} />
                    )
                  })
              }
          </div>
          <ItemCountComponent cantidadMinima='1' stock='5'/>
        </Row>
      </Container>
    </>
  )
};