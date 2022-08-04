import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
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
                    <img src="https://ipfs.io/ipfs/QmbHRVErALrFgDhMtdgW71gtFVJGQAZHff122ZewvsNFEc?filename=download.jpg" alt="" className="logo" />
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
                    <label htmlFor="">
                        Lat:-
                        <br />
                        <input type="text" placeholder='Latitude'  onChange={(e) => {setLat(e.target.value)}}/>
                    </label>
                    <label htmlFor="">
                        Long:-
                        <br />
                        <input type="text" placeholder='Longitude' onChange={(e) => {setLong(e.target.value)}}/>
                    </label>
                    <br />
                    <br />
                    <Button variant='dark' onClick={() => {setState(1)}}>Search</Button>
                </div>
                <img src="http://bafybeielc2q4qggzagqcdpsboja5y7r4a77ejubdjy2pkk2dvk6d222xzq.ipfs.localhost:8080/?filename=city.png" alt=""  className="logo"/>
                <br />
                <h5>Enter location</h5>
            </div>
        );
    }
}
 
export default Weather;