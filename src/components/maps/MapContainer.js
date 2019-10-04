import _ from 'lodash';
import React, { Component } from 'react';
import { geoPropTypes } from "react-geolocated";
import { stateSetter, types } from '../../helpers/global';
import CurrentLocation from './components/CurrentLocation';
import MapWrapper from './MapWrapper';

class MapContainer extends Component {
    static propTypes = {
        ...geoPropTypes
    }
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentLocation: {},
            places: [],
            types: types,
            selectedTypes: []
        }
        this.mapRef = null;
        this.google = null;
        this.setter = stateSetter(this)
    }

    componentDidMount() { 
        this.google = window.google;
    }

    setCurrentLocation = ({ latitude, longitude }) => {
        console.log('setCurrentLocation called')
        // this.setter.setState({ loading: true }, () => {
        let currentLocation = { ...this.state.currentLocation, latitude, longitude }
        this.fetchPlaces(latitude, longitude, this.state.selectedTypes).then(places => {
            console.log( places)    
            this.setter.setState({currentLocation: currentLocation, places, loading: false})
        })
        // })
    }
    
    onMapMounted = ref => { 
        this.mapRef = ref
    }

    filterChange = name => event => { 
        console.log(name, event.target.checked)
        const isChecked = event.target.checked;
        let selectedTypes = [...this.state.selectedTypes];
        if (!isChecked) {
            let index = _.findIndex(selectedTypes, (type) => { 
                return type === name
            })
            if (index >= 0) {
                selectedTypes.splice(index, 1)
            }
        } else {
            selectedTypes.push(name);
        }
        this.fetchPlaces(this.state.currentLocation.latitude, this.state.currentLocation.longitude, selectedTypes).then(places => {
            this.setter.setState({ places: places, selectedTypes: selectedTypes })
        })
    }

    fetchPlaces = (latitude, longitude, types) => {
        return new Promise((resolve, reject) => {
            if (this.mapRef) {
                let places = [];
                const google = window.google;
                // const bounds = this.mapRef.getBounds();
                const service = new google.maps.places.PlacesService(this.mapRef.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    // bounds: bounds,
                    type: types ? types : this.state.selectedTypes,
                    location: {
                        lat: latitude ? latitude : this.state.currentLocation.latitude,
                        lng: longitude ? longitude : this.state.currentLocation.longitude,
                    },
                    radius: 5000
                };
                service.nearbySearch(request, (results, status) => {
                    console.log(results);
                    if (status === google.maps.places.PlacesServiceStatus.OK && !_.isEmpty(types)) {
                        _.map(results, (place) => {
                            let placeObj = {
                                latitude: place.geometry.location.lat(),
                                longitude: place.geometry.location.lng(),
                                icon: place.icon,
                                name: place.name,
                                id: place.place_id,
                                vicinity: place.vicinity
                            }
                            places.push(placeObj)
                        })
                        // this.setter.setState({places})
                    }
                    resolve(places)
                })
            } else {
                resolve([])
            }
        })
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    getComponent = () => {
        if (this.state.loading) {
            return (
                <CurrentLocation
                    key={0}
                    getLocation={this.state.loading}
                    setCurrentLocation={this.setCurrentLocation}
                />)
        } else { 
            return (
                <MapWrapper
                    key={1}
                    loading={this.state.loading}
                    currentLocation={this.state.currentLocation}
                    setCurrentLocation={this.setCurrentLocation}
                    onMapMounted={this.onMapMounted}
                    fetchPlaces={this.fetchPlaces}
                    places={this.state.places}
                    types={this.state.types}
                    selectedTypes={this.state.selectedTypes}
                    filterChange={this.filterChange}
                />
            )
        }
    }
    
    render() {
        return this.getComponent()
    }
}

export default MapContainer;
