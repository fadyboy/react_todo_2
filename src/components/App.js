import React from 'react';
import TodoList from './TodoList';

const todos = [
    {
        task: "Complete ABC challenge",
        isCompleted: false
    },

    {
        task: "Build fullstack React app",
        isCompleted: false
    }
]

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos  // same as todos:todos
        }
    }
    render() {
        return (
            <div>
                <h1>My Todo App</h1>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}