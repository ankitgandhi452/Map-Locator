import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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

    refresh = () => {
        window.location.reload()
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
                    bgcolor={'rgba(0,0,0,1)'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    p={4}
                >
                    <Card >
                        <CardContent>
                            <Typography variant="h4" component="h2" color='error'>
                                Unable to fecth the location
                                
                            </Typography>
                            <Typography variant='h5'>
                                <br />
                                Possible problem would be:
                            </Typography>
                            <Typography color="textSecondary">
                                <br />
                                1. Please enable the location service on your browser. To enable it please refresh the page and allow the location service.
                            </Typography>
                            <Typography color="textSecondary">
                                <br />
                                2. If you are running in development mode please run on chrome browser.
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.refresh} size="small">Refresh</Button>
                        </CardActions>
                    </Card>
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
                        bgcolor={'rgba(0,0,0,1)'}
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