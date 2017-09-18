import React from 'react';
import CreateItem from './CreateItem';
import ListItems from './ListItems';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    createTask(task){
        this.state.items.push(task);
        this.setState({
            items: this.state.items
        });
    }

    render() {
        return (
            <div>
                <h2>Todo List Items</h2>
                <CreateItem items={this.state.items} createTask={this.createTask.bind(this)}/>
                <ListItems items={this.state.items} />
            </div>
        )
    }
}