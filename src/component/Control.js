import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';

class Control extends Component {
    render() {
        return (
            <div className="row mt-15">
                <TaskSortControl />
                <TaskSearchControl />
            </div>
        );
    }
}

export default Control;
