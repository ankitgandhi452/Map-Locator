import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';


export default class SearchPalces extends Component {
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
    render() {
        return (
            <Autocomplete
                style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '16px',
                    marginTop: '10px',
                    marginBottom: '100px'
                }}
                onPlaceSelected={ this.onPlaceSelected }
                types={['(regions)']}
            />
        )
    }
}
