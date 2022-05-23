import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const currTime = new Date().toLocaleTimeString('en-US');
    const [ctime, setCTime] = useState(currTime);
    
    const updateTime = ()=>{
        let curtime = new Date().toLocaleTimeString('en-US');
        setCTime(curtime);
    }

    setInterval(updateTime, 1000);

    return (
        <>
            <h3>Digital Clock</h3>
            <p>{ctime}</p>
        </>
    )
}

export default DigitalClock;