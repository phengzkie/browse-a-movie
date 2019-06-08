import React from 'react';
import MovieBrowser from './modules/movie-browser/movie-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

function App() {
  return (
    // Provides the Material UI theme to child components
    <MuiThemeProvider>
      <MovieBrowser />
    </MuiThemeProvider>
  );
}

export default App;
