import React from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';

import MainPage from './MainPage'

export default class App extends React.Component {
    renderPage(route, navigator) {
        const props = route.props || {};
        //route.props.key = route.title;
        props.navigator = navigator;
        //debugger;
        return React.createElement(route.component, {...props, key: route.component.name});
    }

    render() {
        return (
            <Navigator initialRoute={{component: MainPage}} renderPage={this.renderPage}/>
        );
    }
}