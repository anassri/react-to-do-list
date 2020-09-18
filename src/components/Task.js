import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super()
    }

    handleClick = () => {
        this.props.deleteTask(this.props.task.id);
    }

    render() {
        return (
            <li>
                <h1>{this.props.task.message}</h1>
                <button onClick={this.handleClick}>Delete Task</button>
            </li >
        )
    }
}

export default Task;