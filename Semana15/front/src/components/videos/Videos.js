import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Video from '../video/Video';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            cargado: false
        }
    }
    componentDidMount() {
        //consumir la API de videos con un fetch
        fetch('http://localhost:3700/api/video')
            .then(response => {
                return response.json();
            }).then(data => {
                this.setState({
                    videos: data.content,
                    cargado: true
                })
            });
    }
   
    render() {
        let { cargado, videos } = this.state;
        
        if(cargado){
            return(
                <React.Fragment>
                    <Grid container item spacing={3}>
                        {
                            videos.map(video=>(<Video key={video._id} video={video}/>))
                        }
                    </Grid>
                    <Fab color="secondary" aria-label="Edit" style={{position:'fixed',bottom:'50px', right:'50px'}} component={Link} to="/crearvideo">
                            <Icon style={{color:'white'}}>add_icon</Icon>
                    </Fab>
                </React.Fragment>
            )
        }
        return (
            <LinearProgress variant="query" />
        )
    }
}
