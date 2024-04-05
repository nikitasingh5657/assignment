import React, {useState} from 'react';
import Routes from './src/component/Routes';
import {store, persistor} from './src/redux/store';

import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
