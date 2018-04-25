import React from 'react';
import {Provider} from 'mobx-react';

import {Navigator} from 'react-onsenui';
import {tasks} from './models';
import commands from './commands';

import MainPage from './components/page-main'

export default class App extends React.Component {
    renderPage(route, navigator) {
        const props = route.props || {};
        props.navigator = navigator;
        return React.createElement(route.component, {...props, key: route.component.name});
    }

    render() {
        return (
            <Provider tasks={tasks} commands={commands}>
                <Navigator initialRoute={{component: MainPage}} renderPage={this.renderPage}/>
            </Provider>
        );
    }
}