import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './CrearVideo.css';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default class CrearVideoV2 extends Component {
    nomRef;
    descRef;
    linkRef;
    constructor(props) {
        super(props);
        this.nomRef = React.createRef();
        this.descRef = React.createRef();
        this.linkRef = React.createRef();
        this.videoRef = React.createRef();
        // const [open, setOpen] = React.useState(false);
        this.state = {
            open: false,
            idVideoCreado:'',
        };

    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formulario = e.target;
        let objVideo = {
            vid_titu: this.nomRef.value,
            vid_desc: this.descRef.value,
            vid_link: this.linkRef.value,
        }
        let headers = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objVideo)
        };
        console.log(this.videoRef.current.files[0]);

        //crear un formulario en codigo
        var formData = new FormData();
        formData.append('archivo',
            this.videoRef.current.files[0],
            this.videoRef.current.files[0].name);

        fetch('http://localhost:3700/api/video', headers)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.message === "created") {
                    let headersVideo = {
                        method: 'POST',
                        body: formData
                    };
                    fetch(`http://localhost:3700/api/video/upload/${data.content._id}`, headersVideo)
                        .then(response2 => {
                            return response2.json();
                        })
                        .then(data2 => {
                            if (data2.message === "updated") {
                                formulario.reset();
                                this.handleClick();
                                this.setState({
                                    idVideoCreado: data2.content._id
                                });
                            } else {
                                console.error("Error");
                            }
                        })
                }
            });
    }

    handleClick = () => {
        // setOpen(true);
        this.setState({ open: true });
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        // setOpen(false);
        this.setState({ open: false });
    }
    handleRevertir = ()=>{
        console.log("handleRevertir");
        
        let headers = {
            method: 'DELETE',
        };

        fetch(`http://localhost:3700/api/video/${this.state.idVideoCreado}`,headers).then(response=>{
            return response.json();
        }).then(data=>{
            this.handleClose();
            console.log(data);
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className="formulario" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="standard-helperText"
                        label="Nombre"
                        placeholder="Ejm: 05 - Introducción a Angular 8"
                        className="textField"
                        helperText="Ingrese el nombre del Video"
                        margin="normal"
                        inputRef={input => (this.nomRef = input)}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Descripción"
                        multiline
                        rowsMax="5"
                        className="textField"
                        margin="normal"
                        inputRef={input => (this.descRef = input)}
                    />
                    <TextField
                        id="standard-helperText"
                        label="Link (link)"
                        placeholder="Ejm: https://www.youtube.com/as3rfSDF2d"
                        className="textField"
                        helperText="Ingrese el link del Video"
                        margin="normal"
                        inputRef={input => (this.linkRef = input)}
                    />
                    <Button variant="contained" component="label" className="textField">
                        Subir Imagen del Video
                    <input type="file" style={{ display: "none" }} ref={this.videoRef} />
                    </Button>

                    <Button variant="contained" color="primary" type="submit">
                        Subir Video
                </Button>

                </form>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={this.state.open}
                    autoHideDuration={10000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Video Creado</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleRevertir}>
                            DESHACER
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </React.Fragment>
        );
    }
}