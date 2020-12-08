import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/lib/integration/react";
import Routes from './AppRoutes/Routes';
import { storeCreator } from "./redux/store";
import moment from 'moment-jalaali';
import './App.css';


moment.loadPersian();

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

