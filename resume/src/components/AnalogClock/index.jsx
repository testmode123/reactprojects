import React from 'react';
import Clock from './Clock';
import ClockFunction from './ClockFunction';

class AnalogClock extends React.Component{
    render(){
        return (
            <>
                <div className={"analog-clock-block"}>
                    <h3>Analog Clock Class Based</h3>
                    <Clock title="India"  datediff={0} />
                    <Clock title="Tokyo"  datediff={9}/>
                    <Clock title="London"  datediff={-2}/>
                    <Clock title="New York"  datediff={-6}/>
                </div>
                <div className={"analog-clock-block"}>
                    <h3>Analog Clock function Based</h3>
                    <ClockFunction title="India"  datediff={0} />
                    <ClockFunction title="Tokyo"  datediff={9}/>
                    <ClockFunction title="London"  datediff={-2}/>
                    <ClockFunction title="New York"  datediff={-6}/>
                </div>
            </>
        )
    }
}

export default AnalogClock;