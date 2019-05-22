import React from 'react'
import './../css/productos.css';
export default function Button(props) {
    return (
        <button className="btn-red" onClick={props.click}>
            {props.texto}
        </button>
    )
}