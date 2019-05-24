import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Presupuesto extends Component {
    render() {
        return (
            <div className="alert alert-primary">
                Tu presupuesto: <strong>S./ {this.props.presupuesto}</strong>
            </div>
        )
    }
}

Presupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired
}
