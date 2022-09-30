import React from 'react';
import './Task.css'
const Task = (props) => {
    const { task } = props;
    const { picture, taskName, timeRequired } = task;
    return (
        <div className='task'>
            <img src={picture} alt="" />
            <div>
                <p className='task-name'>{taskName}</p>
                <p className='task-time'> Allocated Time: {timeRequired} Minutes</p>
            </div>
            <button className='btn-task-assign'>
                <p>Add to Exercise</p>
            </button>

        </div>
    );
};

export default Task;