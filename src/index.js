import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store = {store}>
    <MantineProvider>
      <NotificationsProvider>

    <App />
      </NotificationsProvider>
    </MantineProvider>
  </Provider>
  
);

