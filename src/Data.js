const Data = (props) => {
    const data = props.data;
    return ( 
        <div className="data">
            <div className="components">
                <h3>☁ Humidity : <span>{data.main.humidity}</span> %</h3>
            </div>
            <div className="components">
                <h3>🌪 Pressure : <span>{data.main.pressure} </span>hPa</h3>
            </div>
            <div className="components">
                <h3>🌡 Temperature : <span>{Math.trunc(data.main.temp - 273)}</span>°C</h3>
            </div>
            <div className="overall">
                <h2>Overall</h2>
                <h3>{data.weather[0].main}</h3>
            </div>
            

        </div>
     );
}
 
export default Data;