import indigo from '@material-ui/core/colors/indigo';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

const activeColor = indigo[500];
export default class SearchPalces extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#fff"
        }
    }
    static propTypes = {
        setCurrentLocation: PropTypes.func
    }

    onPlaceSelected = (place) => {
        if (place.geometry) {
            let currentPostion = {
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            }
            this.props.setCurrentLocation(currentPostion);
        }
    }

    focus = () => {
        this.setState({color: activeColor})
    }

    blur = () => { 
        this.setState({color: "#fff"})
    }
    
    render() {
        return (
            <Autocomplete
                style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '16px',
                    marginTop: '10px',
                    marginBottom: '100px',
                    outline: 'none',
                    color: '#fff',
                    backgroundColor: 'transparent',
                    border: '0px',
                    borderBottom: `1px solid ${this.state.color}`
                }}
                placeholder={'Enter area to explore'}
                onPlaceSelected={ this.onPlaceSelected }
                types={['(regions)']}
                onFocus={this.focus}
                onBlur={this.blur}
            />
        )
    }
}
