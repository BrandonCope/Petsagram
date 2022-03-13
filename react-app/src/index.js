import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import { NestedContextProvider } from './context/NestedContext';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NestedContextProvider>
        <ModalProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalProvider>
      </NestedContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
