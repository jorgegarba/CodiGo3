import React, { Component } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import Video from '../video/Video';
import Grid from '@material-ui/core/Grid';

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
                <Grid container item xs={12} spacing={3}>
                    {
                        videos.map(video=>(<Video key={video._id} video={video}/>))
                    }
                </Grid>
            )
        }
        return (
            <LinearProgress variant="query" />
        )
    }
}
