import React from 'react';

import GlobalStyle from './styles/global';

// import AppProvider from './hooks/index';

import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    {/* <AppProvider> */}
    <Dashboard />
    <GlobalStyle />
    {/* </AppProvider> */}
  </>
);
export default App;
