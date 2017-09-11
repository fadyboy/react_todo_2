import React from 'react';
import TodoListRow from './TodoListRow';

export default class TodoListHeader extends React.Component {
    render() {
        return (
            
            <thead>
              <TodoListRow />      
            </thead>
            
        )
    }
}