import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/router'
import './assets/style/style.less'
ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
);