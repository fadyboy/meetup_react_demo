import React from 'react';

export default class CreateItem extends React.Component {
    
    addItem(event){
        event.preventDefault();
        let item = {
            text: this.refs.todoInput.value,
            key: Date.now()
        }
        this.props.createTask(item);
        this.refs.todoInput.value = "";
        
    }

    render(){
        return (
            <form onSubmit={this.addItem.bind(this)}>
                <input type="text"
                 placeholder="Enter todo item"
                 ref="todoInput"
                 />
                 <button type="submit">Add item</button>
            </form>
        )
    }
}