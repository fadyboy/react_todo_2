import React from 'react';

export default class CreateTodo extends React.Component {
    
    render() {
        return (
            <form>
                <input type="text" placeholder="Enter task" />
                <button>Create Todo</button>
            </form>
            
        )
    }
}