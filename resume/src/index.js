import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoListBasic from './components/TodoListBasic';
import TodoListLocalStorage from './components/TodoListLocalStorage';
import DigitalClock from './components/DigitalClock';
import AnalogClock from './components/AnalogClock';
import WeatherApp from './components/WeatherApp';
import CalculatorApp from './components/CalculatorApp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <TodoListBasic /><hr />
      <TodoListLocalStorage /><hr />
      <DigitalClock /><hr />
      <AnalogClock /><hr />
      <WeatherApp /><hr />
      <CalculatorApp /><hr />

    </>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
