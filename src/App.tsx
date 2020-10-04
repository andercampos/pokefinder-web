import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Route from './routes';

const App: React.FC = () => (
  <Router>
    <Route />
    <GlobalStyle />
  </Router>
);
export default App;
