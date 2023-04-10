import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { StyledEngineProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>,
);
