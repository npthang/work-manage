import React, { Component } from 'react';

class TaskSortControl extends Component {
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            	<div className="input-group">
            		<input type="text" name="keywork" className="form-control" placeholder="Nhap tu khoa..."/>
            		<span className="input-group-btn">
            			<button type="button" className="btn btn-primary">Tim</button>
            		</span>
            	</div>
            </div>
        );
    }
}

export default TaskSortControl;
