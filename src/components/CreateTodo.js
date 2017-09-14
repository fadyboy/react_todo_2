import React from 'react';
import _ from 'lodash';

export default class CreateTodo extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            error: null
        };
    }

    renderError(){
        if(!this.state.error){
            return null;
        }
        return (
            <div style={{ color: 'red'}}>{this.state.error}</div>
        )
    }
    
    handleCreate(event){
        event.preventDefault(); // prevent form default behaviour

        // use the createTask method from the App component to create task
        let task = this.refs.createInput.value; // value from input element
        let validateInput = this.validateInput(task);

        if(validateInput){
            this.setState({
                error: validateInput
            });
            return;
        }
        this.props.createTask(task);
        this.refs.createInput.value = " ";

    }

    validateInput(task){
        if(!task){
            return "Please enter a task";
        } else if (_.find(this.props.todos, todo => todo.task === task)){
            return "Task already exists";
        } else {
            null;
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Enter task" ref="createInput" />
                <button>Create Todo</button>
                {this.renderError()}
            </form>
            
        )
    }
}