import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './CrearVideo.css';

export default class CrearVideoV2 extends Component {

    render() {
        return (
            <form className="formulario" noValidate autoComplete="off">
                <TextField
                    id="standard-helperText"
                    label="Nombre"
                    placeholder="Ejm: 05 - Introducción a Angular 8"
                    className="textField"
                    helperText="Ingrese el nombre del Video"
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Descripción"
                    multiline
                    rowsMax="5"
                    className="textField"
                    margin="normal"
                />
                <TextField
                    id="standard-helperText"
                    label="Link (URL)"
                    placeholder="Ejm: https://www.youtube.com/as3rfSDF2d"
                    className="textField"
                    helperText="Ingrese la URL del Video"
                    margin="normal"
                />
                <Button variant="contained" component="label">
                    Subir Imagen del Video
                    <input type="file" style={{ display: "none" }}/>
                </Button>
            </form>
        );
    }
}
