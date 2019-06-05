import React, { Component } from 'react'

export default class InfoVideo extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }
    

    // componentDidMount(){
    //     let {match:{params}} = this.props;
    //     console.log(params);
    // }
    render() {
        return (
            <div>
                Info del Video - #Queda!
                <hr/>
                {this.props.match.params.id}
            </div>
        )
    }
}
