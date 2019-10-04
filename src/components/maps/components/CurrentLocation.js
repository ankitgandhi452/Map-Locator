import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Loader from 'helpers/components/Loader';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { geolocated, geoPropTypes } from "react-geolocated";
import { stateSetter } from '../../../helpers/global';

class CurrentLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialLocationSet: false
        }
        this.setter = stateSetter(this)
    }
    
    static propTypes = {
        ...geoPropTypes,
        setCurrentLocation: PropTypes.func.isRequired,
        getLocation: PropTypes.bool
    }

    static defaultProps = {
        getLocation: true
    }

    componentDidMount() {
        // console.log(window.navigator.geolocation)
    }

    componentDidUpdate() {
        if (
            this.props.getLocation &&
            this.props.isGeolocationAvailable &&
            this.props.isGeolocationEnabled && 
            !this.state.initialLocationSet
            
        ) {
            console.log("!this.state.initialLocationSet", !this.state.initialLocationSet)
            if (
                this.props.coords 
                
            ) {
                this.setter.setState({ initialLocationSet: true }, () => { 
                    console.log('calling if setCurrentLocation', this.props.coords)
                    this.props.setCurrentLocation(this.props.coords)
                })
            } else {
                this.setter.setState({ initialLocationSet: true }, () => { 
                    console.log('calling else setCurrentLocation')
                    this.props.setCurrentLocation({
                        latitude: 18.9908177,
                        longitude: 72.8382547
                    }) 
                }) 
            }
        } 
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    renderComponent = () => {
        if (this.props.getLocation && (!this.props.isGeolocationAvailable || !this.props.isGeolocationEnabled)) {
            return (
                <Box
                    position={'absolute'}
                    top={0}
                    left={0}
                    height={'100vh'}
                    width={'100vw'}
                    bgcolor={'rgba(255,255,255, 0.7)'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Typography variant="h6">
                        Please try on chrome if you are running on a local host.
                        Unable to get the geoloaction
                    </Typography>
                </Box>
            )
        } else {
            if (!this.state.initialLocationSet) {
                return (
                    <Box
                        position={'absolute'}
                        top={0}
                        left={0}
                        height={'100vh'}
                        width={'100vw'}
                        bgcolor={'rgba(255,255,255, 0.7)'}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Loader />
                    </Box>
                )
            } else {
                return (
                    null
                )
            }
        }
    }
    
    render() {
        return this.renderComponent()
    }
}

export default geolocated()(CurrentLocation)