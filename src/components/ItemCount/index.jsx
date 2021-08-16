import './style.css';
import { useState } from "react"
// import { CartContext } from "../../context/CartContext";


export const ItemCount = ({cantidadMinima, stock}) => {
    // const { setQuantity } = useContext(CartContext)
    const [contador, setContador] = useState(1)

    function disminucion() {
        if (contador > cantidadMinima) {
            setContador(contador-1)
        }
        else {
        alert ('No se puede agregar menos de un producto')
        };
    };

    function incremento() {
        if (contador < stock) {
            setContador(contador+1)
        }
        else{
        alert ('No tenemos mas unides disponibles de este producto')
        };
    };
    // const cantidad = contador;
    // setQuantity(cantidad);

    return(
        <>
        <section className="countComponent">
            <button className="button-increment-decrement" onClick={() =>{disminucion()}}>-</button>
            <div className="counter">{contador}</div>
            <button className="button-increment-decrement" onClick={() =>{incremento()}}>+</button>
        </section>
        </>
    )
}