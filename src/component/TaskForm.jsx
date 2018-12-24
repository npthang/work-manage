import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false,
        }
    }

    hideTaskForm = () => {
        this.props.onCloseForm()
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Them cong viec<span className="fa fa-times-circle text-right" onClick={this.hideTaskForm}></span></h3>
                    
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <label>Ten: </label>
                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                    
                        <label>Trang thai: </label>
                        <select name="status" className="form-control" value={this.state.status} onChange={this.onChange}>
                            <option value={true}>Kich hoat</option>
                            <option value={false}>An</option>
                        </select><br/>

                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Luu lai</button>&nbsp;
                            <button type="reset" className="btn btn-danger">Huy bo</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
