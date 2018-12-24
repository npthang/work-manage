import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            })
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name: 'Hoc lap trinh',
                status: true
            },
            {
                id: this.generateID(),
                name: 'Di boi',
                status: false
            },
            {
                id: this.generateID(),
                name: 'An Uong',
                status: true
            }
        ]
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4(){
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID(){
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4();
    }

    onShowTaskForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    onSubmit = (data) => {
        var {tasks} = this.state;
        tasks.push(data);
        this.setState({
            tasks: tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    render() {
        var {tasks, isDisplayForm} = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} /> : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quan Ly Cong Viec</h1><hr/>
                </div>

                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {elmTaskForm}
                    </div>
                    <div className={elmTaskForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" onClick={this.onShowTaskForm}>
                            <span className="fa fa-plus mr-5">Them cong viec</span>
                        </button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>
                            Generate data
                        </button><br/>

                        <Control />

                        <TaskList tasks={tasks} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
