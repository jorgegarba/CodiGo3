import React, { Component } from 'react'

export default class Productos extends Component {

    constructor(props){
        super(props);
        this.state = {
            load:false
        }
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list')
                .then(response=>{
                    return response.json();
                }).then(data=>{
                    console.log(data);
                    this.setState({
                        load:true
                    });
                })
    }

    render() {
        let {load} = this.state;
        if(!load){
            return (<div>cargando...</div>)
        }
        return (
            <div>
                CARGADO! =)
            </div>
        )
    }
}
