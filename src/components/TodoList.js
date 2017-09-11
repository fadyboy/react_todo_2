import React from 'react';
import TodoListHeader from './TodoListHeader';

export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                <table>
                   <TodoListHeader />
                   <tr>
                       {this.renderItems()}
                   </tr> 
                </table>
            </div>
        )
    }
}