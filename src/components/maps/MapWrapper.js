import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import FilterListIcon from '@material-ui/icons/FilterList';
import Loader from 'helpers/components/Loader';
import _ from 'lodash';
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
        clearFilter: PropTypes.func.isRequired,
        onMapMounted: PropTypes.func,
    }

    getCheckBox = (type, index) => {
        const isChecked = this.props.selectedTypes.includes(type);
        const showString = _.startCase(type);
        if (isChecked) {
            return (
                <Chip
                    key={index}
                    avatar={<Avatar>{_.first(showString)}</Avatar>}
                    label={showString}
                    clickable
                    color={"primary"}
                    onClick={() => { this.props.filterChange(type, !isChecked) }}
                    onDelete={() => { this.props.filterChange(type, !isChecked) }}
                    deleteIcon={<DoneIcon /> }
                    style={{margin: "5px"}}
                />
            )
        } else {
                return (
                    <Chip
                        key={index}
                        avatar={<Avatar>{_.first(showString)}</Avatar>}
                        label={showString}
                        clickable
                        color={"default"}
                        onClick={() => { this.props.filterChange(type, !isChecked) }}
                        style={{margin: "5px"}}
                    />
                )
        }
    }

    render() {
        const maxHeight = (window.innerWidth > window.innerHeight) ? "400px" : "300px"
        return (
            <Grid key={1} container style={{overflow: 'auto'}}>
                <Grid item xs={12} sm={8} md={8} lg={8} style={{marginBottom: 40}}>
                    <Map
                        latitude={this.props.currentLocation.latitude}
                        longitude={this.props.currentLocation.longitude}
                        googleMapURL={mapUrl.base}
                        loadingElement={<Loader />}
                        containerElement={<div style={{  height: `${window.innerWidth}px`, maxHeight: `${maxHeight}` }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                        setCurrentLocation={this.props.setCurrentLocation}
                        onMapMounted={this.props.onMapMounted}
                        places={this.props.places}
                    />
                            
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <Box px={2} height='100%'>  
                        <Paper style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', height: '100%' }}>
                            <Box color="text.primary" p={2}>  
                                <Typography variant="h4" component="h2" color='textPrimary' gutterBottom={true}>
                                <FilterListIcon /> Filters {this.props.selectedTypes.length > 0 && <Chip
                                        avatar={<Avatar>{`X`}</Avatar>}
                                        label={`clear`}
                                        clickable
                                        variant={'outlined'}
                                        style={{ float: 'right' }}
                                        onClick={this.props.clearFilter}
                                    />}
                                </Typography>
                                {this.props.types.map((type, index) => (
                                        this.getCheckBox(type, index)
                                ))}
                            </Box>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        )
        
    }
}
