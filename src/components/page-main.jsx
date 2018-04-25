import React, {Component} from 'react';
import {Toolbar, Page, Button, Row, Col} from 'react-onsenui';

import PageWateringList from './page-watering-list';

class Item extends Component {
    onClick = () => {
        const {pushPage} = this.props;
        pushPage(this.props);
    }

    render() {
        const {title} = this.props;
        return (
            <div className="app-main-col" onClick={this.onClick}>
                <div className="app-main-content">{title}</div>
            </div>

        )
    }
}

export default class MainPage extends Component {
    pushPage = ({component}) => {
        this.props.navigator.pushPage({component});
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="center">Home95</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <div className="app-main-row">
                    <Item title={"Информация"} pushPage={this.pushPage} component={PageWateringList}/>
                    <Item title={"Поливалка"} pushPage={this.pushPage} component={PageWateringList}/>
                </div>

            </Page>
        );
    }
}