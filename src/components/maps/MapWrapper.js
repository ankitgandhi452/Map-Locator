import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Loader from 'helpers/components/Loader';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { mapUrl } from '../../configurations/urls/mapUrl';
import Map from './components/Map';

export default class MapWrapper extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        currentLocation: PropTypes.object.isRequired,
        places: PropTypes.array.isRequired,
        types: PropTypes.array.isRequired,
        selectedTypes: PropTypes.array.isRequired,
        setCurrentLocation: PropTypes.func.isRequired,
        filterChange: PropTypes.func.isRequired,
        onMapMounted: PropTypes.func,
    }

    getCheckBox = (type, index) => {
        const isChecked = this.props.selectedTypes.includes(type);
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={this.props.filterChange(type)}
                        value={type}
                        color='primary'
                    />
                }
                label={type}
                key={index}
            />
        )
    }

    render() {
        console.log('map wrapper render')
        return (
            <Grid key={1} container style={{overflow: 'auto'}}>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{marginBottom: 40}}>
                    <Map
                        latitude={this.props.currentLocation.latitude}
                        longitude={this.props.currentLocation.longitude}
                        googleMapURL={mapUrl.base}
                        loadingElement={<Loader />}
                        containerElement={<div style={{  height: `400px` }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        setCurrentLocation={this.props.setCurrentLocation}
                        onMapMounted={this.props.onMapMounted}
                        places={this.props.places}
                    />
                            
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Box color="text.primary" p={4}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Filter Places</FormLabel>
                                <FormGroup>
                                {this.props.types.map((type, index) => (
                                    this.getCheckBox(type, index)
                                ))}
                                </FormGroup>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
        )
        
    }
}
