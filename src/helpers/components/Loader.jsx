import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Loader extends Component {
    static propTypes = {
        visible: PropTypes.bool
    }

    static defaultProps = {
        visible: true
    }
    render() {
        return (
            this.props.visible && <CircularProgress color="primary" />
        )
    }
}
