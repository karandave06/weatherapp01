import  { useState } from "react";
import axios from "axios";
import "./css/app.scss";

function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState("");
 
  const URL =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f300bbe7324c7dc715def34d343a4b09`
   


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(URL).then((response) => {
        setdata(response.data)
     
      })
      setlocation('')
    }
  }
   
    


  return (
    <>
      <div className="app">
        <div className="search">
          <input
            value={location}
            onChange={(event) => setlocation(event.target.value)}
            type="text"
            placeholder="Enter Location"
            onKeyPress={searchLocation}
          />
        </div>
        <div className="container">
     
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
             {data.main ? <h1>{data?.main?.temp} °C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>

          {/* bottom section */}
          <div className="bottom">
            <div className="feels">
              {data?.main ? <p>{data?.main?.feels_like}</p> : null}
              <p>Feels Like</p>
            </div>

            <div className="humidity">
            {data?.main ? <p>{data?.main?.humidity} %</p> : null}
              <p>Humidity</p>
            </div>

            <div className="wind">
            {data?.wind ? <p>{data?.wind?.speed} KM/H</p> : null}

              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
