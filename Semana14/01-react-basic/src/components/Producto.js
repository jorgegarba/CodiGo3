import React from 'react'

export default function Producto(props) {
    return (
        <div>
            <p>Nombre: {props.producto.nombre}</p>
            <p>Precio: {props.producto.precio}</p>
            <hr/>
        </div>
    )
}
