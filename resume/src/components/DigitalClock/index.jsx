import React, { useState, useEffect } from 'react';
import './style.css';

const DigitalClock = () => {
    const currTime = new Date().toLocaleTimeString('en-US');
    const [ctime, setCTime] = useState(currTime);
    
    const updateTime = ()=>{
        let curtime = new Date().toLocaleTimeString('en-US');
        setCTime(curtime);
    }

    setInterval(updateTime, 1000);

    return (
        <div className="container">
            <div className="content">
                <div className="row">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Digital Clock</h5>
                            <p>{ctime}</p>
                        </div>
                    </div> 
                </div>  
            </div> 
        </div>
    )
}

export default DigitalClock;