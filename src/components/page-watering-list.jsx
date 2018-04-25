import React, {Component} from 'react';
import ons from 'onsenui';
import {observer, inject} from 'mobx-react';
import {TASK_REMOVE} from '../commands/const'

import ModelTask from '../models/task';
import {
    Toolbar,
    Page,
    Button,
    BackButton,
    List,
    ListItem,
    Icon,
    BottomToolbar,
    Row,
    Col
} from 'react-onsenui';

import Task from './page-watering-task';


@observer
class Item extends Component {
    render() {
        const {row, onDelete, onSelect} = this.props;
        return (
            <Row>
                <Col width={"10%"} onClick={() => onDelete(row)}>
                    <Icon icon="md-delete" size={20}/>
                </Col>
                <Col width={"90%"} onClick={() => onSelect(row)}>
                    <div className={row.active ? "app-task-active" : "app-task-disabled"}>
                        {row.name}
                        {/*<span> </span>*/}
                        {/*{row.active ? : null}*/}
                    </div>
                </Col>
            </Row>
        )
    }
}

@inject("tasks", "commands")
@observer
export default class WateringList extends Component {

    onNew = () => {
        const {commands, navigator} = this.props;
        const data = new ModelTask();
        const props = {data, commands, options: {isNew: true}};
        navigator.pushPage({component: Task, props});
    }

    onSelect = (task) => {
        const {commands, navigator} = this.props;
        const data = task.clone();
        navigator.pushPage({component: Task, props: {data, commands}});
    }

    onDelete = (props) => {
        const {commands} = this.props;
        ons.notification
            .confirm(`Удалить задачу "${props.name}" ?`, {title: "Предупреждение"})
            .then(isOk => {
                if (isOk) {
                    commands(TASK_REMOVE, props);
                }
            });
    }

    popPage() {
        this.props.navigator.popPage();
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className="left"><BackButton>Back</BackButton></div>
                <div className="center">List task</div>
            </Toolbar>
        );
    }

    render() {
        const {tasks} = this.props;
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    dataSource={tasks.peek()}
                    renderRow={(row) =>
                        <ListItem tappable modifier="chevron" key={row.id}>
                            <Item row={row} onSelect={this.onSelect} onDelete={this.onDelete}/>
                        </ListItem>
                    }/>
                <BottomToolbar modifier="material">
                    <Button
                        onClick={() => this.onNew()}
                        modifier='large--quiet'>Новая задача</Button>
                </BottomToolbar>
            </Page>
        );
    }
}