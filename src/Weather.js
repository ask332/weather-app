import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Data from "./Data";
import useWeather from './useWeather';
const Weather = () => {
    const [state, setState] = useState(0);
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    //const [data, setData] = useState(null);
    const key = '06c21fc89dc2b9f68a5e7185ca062211';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
    const {data, isPending, error} = useWeather(url);

    if(state !== 0){
        // console.log(data);
        return ( 
            <div className="weather">
                <div className="search">
                    <Button variant='dark' onClick = {() =>{setState(0)}}>Back</Button>
                </div>
                <div className="weather-header">
                    <h5>Weather at <span>{lat}</span>° N and <span>{long}</span>° W</h5>
                    <img src="./download.jpg" alt="" className="logo" />
                    <br />
                </div>
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                {!error && data && <Data data={data} />}
            </div>
         );
    }
    else{
        return(
            <div className="weather">
                <div className="search">
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter latitude:-</Form.Label>
        <Form.Control type="text" onChange={(e) => {setLat(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter longitude:-</Form.Label>
        <Form.Control type="text" onChange={(e) => {setLong(e.target.value)}}/>
      </Form.Group>
      <Button variant="success" type="submit" onClick = {() =>{setState(1)}}>
        Submit
      </Button>
    </Form>
    <br />
    <img src="./city.png" alt="" className="logo" />
                </div>
            </div>
        );
    }
}
 
export default Weather;