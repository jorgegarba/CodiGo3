import React, { Component } from 'react'

export default class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos : []
        }
    }

    componentDidMount(){
        //consumir la API de videos con un fetch
        fetch('http://localhost:3700/api/video')
                    .then(response=>{
                        return response.json();
                    }).then(data=>{
                        console.log(data.content);
                    });
    }

    
    render() {
        return (
            <div>
                Videos
            </div>
        )
    }
}
