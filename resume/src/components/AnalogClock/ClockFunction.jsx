import React, {useEffect, useState} from 'react';
import "./styles.css";

const numerals = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const ClockFunction = (props) =>{
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        let date = new Date();
        date.setHours(date.getHours() + props.datediff);
        const interval = setInterval(()=> setTime(date), 1000);

        let ampm = "";
        const hr = hour12();
        const min = time.getMinutes().toLocaleString('en-US');
        const sec = time.getSeconds();

        function hour12(){
            let hour = time.getHours();
            if(hour < 12){
                ampm = "am";
            } 
            if(hour >= 12 ){
                hour = hour -12;
                ampm = "pm";
            }
            if(hour === 0){
                hour = 12;
            }
            return hour;
        }

        const hourLabel = "hourHand_"+ props.datediff;
        const minuteLabel = "minuteHand_"+ props.datediff;
        const secondHandLabel = "secondHand_"+ props.datediff;
        const digitalLabel = "digital_"+ props.datediff;
        

        const hourHand = document.getElementById(hourLabel);
        const minuteHand = document.getElementById(minuteLabel);
        const secondHand = document.getElementById(secondHandLabel);
        const digital = document.getElementById(digitalLabel);

        hourHand.style.transform = `rotate(${hr*30 + min*0.5 - 180}deg)`
        minuteHand.style.transform = `rotate(${min*6 - 180}deg)`
        secondHand.style.transform = `rotate(${sec*6 - 180}deg)`
        digital.innerHTML = hr + ":" + min + ":" + sec + " " + ampm;
        
        return () => clearInterval(interval);
    }, [time])

    return (
        <div className="clock_block">
            <h5>{props.title}</h5>
            <div className="clock_circle">
                <div className="face">
                    <div id={"secondHand_"+props.datediff} className={"hand second"} />
                    <div id={"minuteHand_"+props.datediff} className={"hand minute"} />
                    <div id={"hourHand_"+props.datediff} className={"hand hour"} />
                    <div className="hand center"></div>
                    {
                        Array(12).fill().map((_, i) => { 
                            let rotation = i * 30 + 'deg';
                            return <div key={i} className="numbers" style={{"--rotation":rotation}}>{numerals[i]}</div>
                        })
                    }
                </div>
            </div>
            <div id={"digital_"+props.datediff} className="digital"></div>
        </div>
    )


}

export default ClockFunction;