import React, { Component } from 'react'

export default class InfoVideo extends Component {

    componentDidMount(){
        let {match:{params}} = this.props;
        console.log(params);
        
    }

    render() {
        return (
            <div>
                queda!
            </div>
        )
    }
}
