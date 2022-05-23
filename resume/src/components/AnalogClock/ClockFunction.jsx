import React, {useEffect, useState} from 'react';
import "./styles.css";

const ClockFunction = (props) =>{
    // const clockInterval = "";
    // const [timer, setTimer] = useState({
    //     hours:"",
    //     minutes:"",
    //     seconds:""
    // });
    // const handleDate = () => {
    //     const date = new Date();
    //     date.setHours(date.getHours() + props.datediff);
    //     let hours = this.formatTime(date.getHours());
    //     console.log("sss=>", date, hours); 
    //     // let minutes = this.formatTime(date.getMinutes());
    //     // let seconds = this.formatTime(date.getSeconds());
    //     // this.setState({ hours, minutes, seconds });
    // }
    // const formatTime = (time)=> {
    //     return time < 10 ? `0${time}` : time;
    // }
    // useEffect(()=>{
    //     const timering = setInterval(() => handleDate, 1000);
    //     return () => clearInterval(timering);
    // },[])
    

    // const secondsStyle = { transform: `rotate(${timer.seconds * 6}deg)`};
    // const minutesStyle = { transform: `rotate(${timer.minutes * 6}deg)`};
    // const hoursStyle = { transform: `rotate(${timer.hours * 30}deg)`};
    // return (
    //     <div className={"clock"}>
    //         <h3>{props.title}</h3>
    //         <div className={"analog-clock"}>
    //             <div className={"dial seconds"} style={secondsStyle} />
    //             <div className={"dial minutes"} style={minutesStyle} />
    //             <div className={"dial hours"} style={hoursStyle} />
    //         </div>
    //         <div className={"digital-clock"}>
    //             {timer.hours}:{timer.minutes}:{timer.seconds}
    //         </div>
    //     </div>
    // )  
    // render(){
        // const { hours, minutes, seconds } = this.state;
        // const secondsStyle = { transform: `rotate(${seconds * 6}deg)`};
        // const minutesStyle = { transform: `rotate(${minutes * 6}deg)`};
        // const hoursStyle = { transform: `rotate(${hours * 30}deg)`};
        // const { title } = this.props;
        
    // }

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
            <h3>{props.title}</h3>
            <div className="clock_circle">
                <div className="face">
                    <div id={"secondHand_"+props.datediff} className={"hand second"} />
                    <div id={"minuteHand_"+props.datediff} className={"hand minute"} />
                    <div id={"hourHand_"+props.datediff} className={"hand hour"} />
                    <div className="hand center"></div>
                </div>
            </div>
            <div id={"digital_"+props.datediff} className="digital"></div>
        </div>
    )


}

export default ClockFunction;