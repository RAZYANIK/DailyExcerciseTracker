import React, { useEffect, useState } from 'react';
import SidePanel from '../SidePanel/SidePanel';
import Task from '../Task/Task';

import './LandingPage.css'
const LandingPage = () => {
    const [tasks, setTasks] = useState([]);
    const [panel, setPanel] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, []);

    const handleAssignTask = (task) => {
        // console.log("clicked",task);
        const newPanel = [...panel, task];
        setPanel(newPanel);
    }

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
                            handleAssignTask={handleAssignTask}
                        ></Task>)
                    }
                </div>
                <div className="panel-container">
                    <SidePanel>
                        panel={panel}
                    </SidePanel>
                </div>
            </div>


        </div>
    );
};

export default LandingPage;