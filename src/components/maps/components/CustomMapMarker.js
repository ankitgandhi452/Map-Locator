import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { mapUrl } from 'configurations/urls/mapUrl';
import PropType from 'prop-types';
import React, { Component } from 'react';
import { InfoWindow, Marker } from "react-google-maps";
import { stateSetter } from '../../../helpers/global';

export default class CustomMapMarker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoShown: false
        }

        this.setter = stateSetter(this)
    }

    static propTypes = {
        marker: PropType.object.isRequired
    }

    toggleInfo = () => {
        this.setter.setState({infoShown: !this.state.infoShown})
    }

    getDirection = () => {
        const { marker } = this.props;
        const destination = encodeURIComponent(marker.name + ", " +marker.vicinity)
        window.open(`${mapUrl.direction}&destination_place_id=${marker.place_id}&destination=${destination}`)
    }

    componentWillUnmount() {
        this.setter.cancel()
    }

    render() {
        const { marker } = this.props
        return (
            <Marker
                position={{ lat: marker.latitude, lng: marker.longitude }}
                onClick={this.toggleInfo}
            >
                {
                    this.state.infoShown &&
                    <InfoWindow
                        onCloseClick={this.toggleInfo}
                        visible={this.state.infoShown}
                    >
                        <div style={{padding: 16}}>
                            <div>
                                <Typography variant="body2">
                                    {`${marker.name}, ${marker.vicinity}`}
                                </Typography>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <Button color="secondary" onClick={this.getDirection}>
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </InfoWindow>
                }
            </Marker>
        )
    }
}
