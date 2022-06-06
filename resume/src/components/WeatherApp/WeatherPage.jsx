/*
import React,{useState, useEffect} from 'react';
import Weather from './Weather';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


const WeatherPage = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            });
      
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
              setData(result)
              console.log(result);
            });
        } 
        fetchData();
    },[lat, long]);  
    
    return (
        <div className="app">
            {
                (typeof data.main != 'undefined') ? (<Weather weatherData={data}/>) : ( <div>
                      Loading..
                 </div>)
            }
        </div>
    )
}

export default WeatherPage;

*/

import React,{useState, useEffect} from 'react';
import Weather from './Weather';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const WeatherPage = () => {
    const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("london");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ifClicked();
  }, []);

  function ifClicked() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="app">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location_input"
          />
          <button className="location_searcher" onClick={ifClicked}>
            Search Location
          </button>
        </div>
        <div className="app__data">
          <p className="temp">Current Temparature: {weather?.main?.temp}</p>
        </div>
        <img className="app__image" src={photos} alt="" />
      </div>
    </div>
  );
}

export default WeatherPage;
