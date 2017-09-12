import React from 'react';

export default class TodoListItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        }

        this.onEditClick = this.onEditClick.bind(this);
    }

    onEditClick(){
        this.setState({
            isEditing: true
        });
    }

    renderActionsSection(){
        if(this.state.isEditing){
            
            <td>
                <button>Save</button>
                <button>Cancel</button>
            </td>
        }
        return (
            <td>
                <button onClick={this.onEditClick}>Edit</button>
                <button>Delete</button>
            </td>
        )
    }

    render () {
        return (
            <tr>
                <td>{this.props.task}</td>
                {this.renderActionsSection()}
            </tr>
        )
    }

}