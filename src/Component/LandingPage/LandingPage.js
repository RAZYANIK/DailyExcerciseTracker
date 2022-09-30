import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';


import './LandingPage.css'
const LandingPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('fakadata.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return (
        <div>
            <div className='header'>
                <h1>Daily Exercises Tracker</h1>
                <h3 >Select Your Today's Exercise</h3>
            </div>
            <div className='dashboard-container'>
                <div className="tasks-container">
                    {
                        tasks.map(task => <Task
                            key={task.id}
                            task={task}

                        >
                        </Task>)
                    }
                </div>

            </div>


        </div>
    );
};

export default LandingPage;