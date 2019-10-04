import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import CustomMapMarker from './CustomMapMarker';
import SearchPalces from './SearchPalces';

class Map extends Component {
    // constructor(props) {
    //     super(props);
    // }
    static propTypes = {
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        isMarkerShown: PropTypes.bool,
        setCurrentLocation: PropTypes.func
    }

    static defaultProps = {
        isMarkerShown: true,
        // latitude: 18.9908177,
        // longitude: 72.8382547
    }
    
    render() {
        return (
            <GoogleMap
                ref={this.props.onMapMounted}
                defaultZoom={12}
                center={{ lat: this.props.latitude, lng: this.props.longitude }}
            >
                {this.props.isMarkerShown && <Marker position={{ lat: this.props.latitude, lng: this.props.longitude }} />}
                
                {this.props.places.map(marker => (
                    <CustomMapMarker
                        key={marker.id}
                        marker={marker}
                    />
                ))}
                
                <SearchPalces
                    setCurrentLocation={this.props.setCurrentLocation}
                />
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(Map))
