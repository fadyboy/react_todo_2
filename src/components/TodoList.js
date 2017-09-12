import React from 'react';
import _ from 'lodash';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

    renderItems(){
        return (
            _.map(this.props.todos, (todo, index)=>
                <TodoListItem key={index} {...todo} />)
        )
    }
    render() {
        return (
            <div>
                <table>
                   <TodoListHeader />
                   <tbody>
                       {this.renderItems()}
                   </tbody> 
                </table>
            </div>
        )
    }
}