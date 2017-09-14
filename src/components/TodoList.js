import React from 'react';
import _ from 'lodash';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

    renderItems(){
        const props = _.omit(this.props, 'todos'); // leave out the todos props
        return (
            _.map(this.props.todos, (todo, index)=>
                <TodoListItem key={index} {...todo} {...props} />)
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