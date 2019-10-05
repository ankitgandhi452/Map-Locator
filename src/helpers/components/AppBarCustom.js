import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import React, { Component } from 'react';



function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default class AppBarCustom extends Component {
    static propTypes = {
        icon: PropTypes.element,
        heading: PropTypes.string
    }
    render() {
        return (
            <React.Fragment>
                <ElevationScroll>
                    <AppBar position='fixed' color='primary'>
                    <Toolbar>
                        {this.props.icon}
                        <Typography variant="h6" style={{marginLeft: '5px'}}>
                        {this.props.heading}
                        </Typography>
                    </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />
            </React.Fragment>
        )
    }
}
