import React from 'react';
import App from './App';
import TodoContext from './contexts/TodoContext';

class AppWithContext extends React.Component {
    constructor() {
        super();
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        this.state = {
            tasks: storedTasks || {},
            createTask: this.createTask,
            deleteTask: this.deleteTask,
        }
    }
    createTask = (task) => {
        const nextTaskId = new Date().getTime();
        const newTask = {
            [nextTaskId]: {
                id: nextTaskId,
                message: task,
            },
        };
        this.setState((state, props) => {
            return {
                tasks: { ...this.state.tasks, ...newTask }
            }
        }, () => this.updateLocalStorageTasks());

    }
    deleteTask = (id) => {
        this.setState((state, props) => {
            const tasksWithDeletion = { ...state.tasks };
            delete tasksWithDeletion[id];
            return {
                tasks: tasksWithDeletion,
            };
        }, () => this.updateLocalStorageTasks());
    }
    updateLocalStorageTasks = () => {
        console.log(this.state.tasks);
        const jsonTasks = JSON.stringify(this.state.tasks);
        localStorage.setItem('tasks', jsonTasks);
    }

    render() {
        return (
            <TodoContext.Provider value={this.state}>
                <App />
            </TodoContext.Provider>
        )
    }
}

export default AppWithContext;