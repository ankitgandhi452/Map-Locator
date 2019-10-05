import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import MapIcon from '@material-ui/icons/Map';
import { ThemeProvider } from '@material-ui/styles';
import MapContainer from 'components/maps/MapContainer';
import { theme } from 'configurations/materialUI/theme';
import AppBarCustom from 'helpers/components/AppBarCustom';
import React from 'react';
import 'typeface-roboto';

function App() {
  return (
    <NoSsr defer={true}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
          <Box width="100vw" bgcolor={'primary.main'}>
            <Container fluid="true" style={{ minHeight: '100%', padding: 0, }} >
              <AppBarCustom
                icon={<MapIcon />}
                heading={"Map Locator"}
              />
              <Box height="95vh" width="100%" display={'flex'} boxShadow={3} bgcolor={'background.default'} p={2} overflow="visible">
                <MapContainer />
              </Box>
            </Container>
          </Box>
      </ThemeProvider>
    </NoSsr>
  );
}

export default App;
