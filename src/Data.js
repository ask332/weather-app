const Data = (props) => {
    const data = props.data;
    return ( 
        <div className="data">
            <div className="components">
                <h3>☁ Humidity : <span>{data.main.humidity}</span></h3>
            </div>
            <div className="components">
                <h3>🌪 Pressure : <span>{data.main.pressure}</span></h3>
            </div>
            <div className="components">
                <h3>🌡 Temperature : <span>{data.main.temp}</span></h3>
            </div>
            <div className="overall">
                <h2>Overall</h2>
                <h3>{data.weather[0].main}</h3>
            </div>
            

        </div>
     );
}
 
export default Data;