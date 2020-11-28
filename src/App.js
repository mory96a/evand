import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import Routes from './AppRoutes/Routes';
import { storeCreator } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import './App.css';

const {store, persistor} = storeCreator();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <Routes/>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

