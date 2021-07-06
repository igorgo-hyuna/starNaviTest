import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/redux-store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
      </React.StrictMode>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
