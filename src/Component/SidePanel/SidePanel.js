import React, { useEffect, useState } from 'react';
import './SidePanel.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SidePanel = (props) => {
    const [breaks, setBreaks] = useState(0);

    const retrievedData = JSON.parse(localStorage.getItem('break-time'));

    useEffect(() => {
        if (retrievedData) {
            setBreaks(retrievedData)
        }
    }, [breaks, retrievedData])

    const handleAddBreak = (breaks) => {
        setBreaks(breaks);
        localStorage.setItem('break-time', JSON.stringify(breaks));
    }

    const { panel } = props;


    let totalTaskAllocationTime = 0;

    for (const task of panel) {
        totalTaskAllocationTime = totalTaskAllocationTime + task.timeRequired;
    }
    const notify = () => {
        toast.success('Congratulations!! your daily Exercises is done.', {
            position: "top-center",

            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    return (
        <div className='panel'>
            <div className='name'>
                <img src="https://www.formula1points.com/images/driver/charles-leclerc.jpg" alt="" />
                <h3>
                    Charles Leclerc
                </h3>
                <p>Monte Carlo, Monaco</p>
            </div>
            <div className='personal-info'>
                <div className="info">
                    <h4><span>69 Kgs</span> <br />Weigth</h4>
                    <h4><span>1.78 m</span><br />
                        Height </h4>
                    <h4><span>23 years</span><br /> Age</h4>
                </div>
            </div>
            <div className="break-section">
                <h3>Take a Break</h3>
                <div className='break-times'>
                    <button onClick={(e) => handleAddBreak(2)}>
                        <span>2 </span> <small>min</small>
                    </button>
                    <button onClick={(e) => handleAddBreak(5)}>
                        <span>5 </span> <small>min</small>
                    </button>
                    <button onClick={(e) => handleAddBreak(10)}>
                        <span>10 </span> <small>min</small>
                    </button>
                    <button onClick={(e) => handleAddBreak(15)}>
                        <span>15 </span> <small>min</small>
                    </button>
                    <button onClick={(e) => handleAddBreak(20)}>
                        <span>20 </span> <small>min</small>
                    </button>
                </div>
            </div>
            <div className="task-details-section">
                <h3>Exercise Time Allocations</h3>
                <div className='task-time-panel'>
                    <h4>Exercises Time</h4>
                    <h4>{totalTaskAllocationTime} Minutes</h4>
                </div>
                <div className='break-time-panel'>
                    <h4 >Break Time</h4>
                    <h4>{breaks} Minutes</h4>
                </div>
                <button onClick={notify} className='finish-tasks'>
                    Activity Completed
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SidePanel;