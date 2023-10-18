import React, { useState, useEffect } from "react";
import "./App.css";
import "./App.scss";

const apiKey = "2VXNCLWCN2QYBZTHRJU89EP8Q";
function App()
 {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchWeatherData = (city) => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeatherData(city);
    } else {
      alert("Please enter a city name.");
    }
  };
  return (
<>
    <div classNameName="App">
<div className="box-wrap">
  <input id="toggle" className="toggle" type="checkbox"/>
  <div className="rain">
  <i style={{left:"693px",top:"844px"}}></i>
  <i style={{left:"93px",top:"34px"}}></i>
  <i style={{left:"193px",top:"344px"}}></i>
  <i style={{left:"613px",top:"744px"}}></i>
  <i style={{left:"293px",top:"304px"}}></i>
  <i style={{left:"793px",top:"374px"}}></i>
  <i style={{left:"293px",top:"244px"}}></i>
  <i style={{left:"933px",top:"384px"}}></i>
  <i style={{left:"123px",top:"444px"}}></i>
  <i style={{left:"643px",top:"744px"}}></i>
  <i style={{left:"593px",top:"504px"}}></i>
  <i style={{left:"593px",top:"574px"}}></i>
  <i style={{left:"111px",top:"1234px"}}></i>
  <i style={{left:"1022px",top:"3084px"}}></i>
  <i style={{left:"133px",top:"4044px"}}></i>
  <i style={{left:"1324px",top:"7134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1460px",top:"574px"}}></i>
  <i style={{left:"151px",top:"1294px"}}></i>
  <i style={{left:"192px",top:"9084px"}}></i>
  <i style={{left:"1930px",top:"4994px"}}></i>
  <i style={{left:"1394px",top:"7934px"}}></i>
  <i style={{left:"1974px",top:"904px"}}></i>
  <i style={{left:"960px",top:"974px"}}></i>
  <i style={{left:"693px",top:"844px"}}></i>
  <i style={{left:"93px",top:"34px"}}></i>
  <i style={{left:"193px",top:"344px"}}></i>
  <i style={{left:"613px",top:"744px"}}></i>
  <i style={{left:"293px",top:"304px"}}></i>
  <i style={{left:"793px",top:"374px"}}></i>
  <i style={{left:"293px",top:"244px"}}></i>
  <i style={{left:"933px",top:"384px"}}></i>
  <i style={{left:"123px",top:"444px"}}></i>
  <i style={{left:"643px",top:"744px"}}></i>
  <i style={{left:"593px",top:"504px"}}></i>
  <i style={{left:"593px",top:"574px"}}></i>
  <i style={{left:"111px",top:"1234px"}}></i>
  <i style={{left:"1022px",top:"3084px"}}></i>
  <i style={{left:"133px",top:"4044px"}}></i>
  <i style={{left:"1324px",top:"7134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1460px",top:"574px"}}></i>
  <i style={{left:"1500px",top:"1004px"}}></i>
  <i style={{left:"1999px",top:"104px"}}></i>
  <i style={{left:"1030px",top:"194px"}}></i>
  <i style={{left:"1094px",top:"7034px"}}></i>
  <i style={{left:"1274px",top:"704px"}}></i>
  <i style={{left:"1960px",top:"174px"}}></i>
  <i style={{left:"93px",top:"-844px"}}></i>
  <i style={{left:"903px",top:"-34px"}}></i>
  <i style={{left:"193px",top:"-344px"}}></i>
  <i style={{left:"6013px",top:"-744px"}}></i>
  <i style={{left:"2903px",top:"-304px"}}></i>
  <i style={{left:"7093px",top:"-374px"}}></i>
  <i style={{left:"2903px",top:"-244px"}}></i>
  <i style={{left:"9303px",top:"-384px"}}></i>
  <i style={{left:"1023px",top:"-444px"}}></i>
  <i style={{left:"6403px",top:"-744px"}}></i>
  <i style={{left:"5093px",top:"-504px"}}></i>
  <i style={{left:"5930px",top:"-574px"}}></i>
  <i style={{left:"1101px",top:"-1234px"}}></i>
  <i style={{left:"102px",top:"-3084px"}}></i>
  <i style={{left:"1303px",top:"-4044px"}}></i>
  <i style={{left:"1324px",top:"-7134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1760px",top:"574px"}}></i>
  <i style={{left:"1500px",top:"-1004px"}}></i>
  <i style={{left:"1099px",top:"-104px"}}></i>
  <i style={{left:"130px",top:"-194px"}}></i>
  <i style={{left:"159px",top:"-7034px"}}></i>
  <i style={{left:"1204px",top:"-704px"}}></i>
  <i style={{left:"1760px",top:"-174px"}}></i>
  <i style={{left:"693px",top:"-844px"}}></i>
  <i style={{left:"93px",top:"-34px"}}></i>
  <i style={{left:"193px",top:"-344px"}}></i>
  <i style={{left:"613px",top:"-744px"}}></i>
  <i style={{left:"293px",top:"-304px"}}></i>
  <i style={{left:"793px",top:"-374px"}}></i>
  <i style={{left:"293px",top:"-244px"}}></i>
  <i style={{left:"933px",top:"-384px"}}></i>
  <i style={{left:"123px",top:"-444px"}}></i>
  <i style={{left:"643px",top:"-744px"}}></i>
  <i style={{left:"593px",top:"-504px"}}></i>
  <i style={{left:"593px",top:"-574px"}}></i>
  <i style={{left:"111px",top:"-1234px"}}></i>
  <i style={{left:"1022px",top:"-3084px"}}></i>
  <i style={{left:"133px",top:"-4044px"}}></i>
  <i style={{left:"1324px",top:"-7134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1460px",top:"574px"}}></i>
  <i style={{left:"1500px",top:"-1004px"}}></i>
  <i style={{left:"1999px",top:"-104px"}}></i>
  <i style={{left:"1030px",top:"-194px"}}></i>
  <i style={{left:"1094px",top:"-7034px"}}></i>
  <i style={{left:"1274px",top:"-704px"}}></i>
  <i style={{left:"1960px",top:"-174px"}}></i>
  <i style={{left:"583px",top:"734px"}}></i>
  <i style={{left:"83px",top:"24px"}}></i>
  <i style={{left:"283px",top:"234px"}}></i>
  <i style={{left:"593px",top:"634px"}}></i>
  <i style={{left:"183px",top:"174px"}}></i>
  <i style={{left:"883px",top:"264px"}}></i>
  <i style={{left:"383px",top:"334px"}}></i>
  <i style={{left:"843px",top:"294px"}}></i>
  <i style={{left:"293px",top:"314px"}}></i>
  <i style={{left:"593px",top:"814px"}}></i>
  <i style={{left:"693px",top:"404px"}}></i>
  <i style={{left:"493px",top:"679px"}}></i>
  <i style={{left:"291px",top:"704px"}}></i>
  <i style={{left:"209px",top:"784px"}}></i>
  <i style={{left:"103px",top:"404px"}}></i>
  <i style={{left:"124px",top:"234px"}}></i>
  <i style={{left:"674px",top:"704px"}}></i>
  <i style={{left:"960px",top:"274px"}}></i>
  <i style={{left:"651px",top:"284px"}}></i>
  <i style={{left:"292px",top:"84px"}}></i>
  <i style={{left:"130px",top:"194px"}}></i>
  <i style={{left:"394px",top:"7934px"}}></i>
  <i style={{left:"274px",top:"404px"}}></i>
  <i style={{left:"660px",top:"374px"}}></i>
  <i style={{left:"593px",top:"644px"}}></i>
  <i style={{left:"203px",top:"304px"}}></i>
  <i style={{left:"130px",top:"244px"}}></i>
  <i style={{left:"513px",top:"144px"}}></i>
  <i style={{left:"193px",top:"404px"}}></i>
  <i style={{left:"693px",top:"474px"}}></i>
  <i style={{left:"303px",top:"144px"}}></i>
  <i style={{left:"203px",top:"304px"}}></i>
  <i style={{left:"103px",top:"404px"}}></i>
  <i style={{left:"603px",top:"644px"}}></i>
  <i style={{left:"403px",top:"494px"}}></i>
  <i style={{left:"513px",top:"474px"}}></i>
  <i style={{left:"121px",top:"434px"}}></i>
  <i style={{left:"222px",top:"784px"}}></i>
  <i style={{left:"193px",top:"644px"}}></i>
  <i style={{left:"324px",top:"7134px"}}></i>
  <i style={{left:"874px",top:"694px"}}></i>
  <i style={{left:"1460px",top:"1574px"}}></i>
  <i style={{left:"1500px",top:"1004px"}}></i>
  <i style={{left:"1999px",top:"104px"}}></i>
  <i style={{left:"1030px",top:"194px"}}></i>
  <i style={{left:"1094px",top:"1034px"}}></i>
  <i style={{left:"1274px",top:"1704px"}}></i>
  <i style={{left:"1960px",top:"174px"}}></i>
  <i style={{left:"1193px",top:"1144px"}}></i>
  <i style={{left:"903px",top:"1340px"}}></i>
  <i style={{left:"1093px",top:"1344px"}}></i>
  <i style={{left:"1013px",top:"1744px"}}></i>
  <i style={{left:"1903px",top:"-304px"}}></i>
  <i style={{left:"1093px",top:"-374px"}}></i>
  <i style={{left:"1903px",top:"-244px"}}></i>
  <i style={{left:"1303px",top:"-384px"}}></i>
  <i style={{left:"1023px",top:"-444px"}}></i>
  <i style={{left:"1403px",top:"-744px"}}></i>
  <i style={{left:"1093px",top:"-504px"}}></i>
  <i style={{left:"1930px",top:"-574px"}}></i>
  <i style={{left:"1010px",top:"-1234px"}}></i>
  <i style={{left:"102px",top:"-1084px"}}></i>
  <i style={{left:"1303px",top:"-1044px"}}></i>
  <i style={{left:"1324px",top:"-1134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1760px",top:"574px"}}></i>
  <i style={{left:"1500px",top:"-1004px"}}></i>
  <i style={{left:"1099px",top:"-104px"}}></i>
  <i style={{left:"130px",top:"-194px"}}></i>
  <i style={{left:"159px",top:"-1034px"}}></i>
  <i style={{left:"1204px",top:"-704px"}}></i>
  <i style={{left:"1760px",top:"-174px"}}></i>
  <i style={{left:"693px",top:"-844px"}}></i>
  <i style={{left:"93px",top:"-34px"}}></i>
  <i style={{left:"1193px",top:"-344px"}}></i>
  <i style={{left:"1113px",top:"-744px"}}></i>
  <i style={{left:"293px",top:"-304px"}}></i>
  <i style={{left:"793px",top:"-374px"}}></i>
  <i style={{left:"1293px",top:"-244px"}}></i>
  <i style={{left:"1133px",top:"-384px"}}></i>
  <i style={{left:"1123px",top:"-444px"}}></i>
  <i style={{left:"1643px",top:"-744px"}}></i>
  <i style={{left:"1193px",top:"-504px"}}></i>
  <i style={{left:"1593px",top:"-574px"}}></i>
  <i style={{left:"1111px",top:"-1234px"}}></i>
  <i style={{left:"1022px",top:"-1084px"}}></i>
  <i style={{left:"1133px",top:"-1044px"}}></i>
  <i style={{left:"1324px",top:"-7134px"}}></i>
  <i style={{left:"1474px",top:"504px"}}></i>
  <i style={{left:"1460px",top:"574px"}}></i>
  <i style={{left:"1500px",top:"-1004px"}}></i>
  <i style={{left:"1199px",top:"-104px"}}></i>
  <i style={{left:"1030px",top:"-194px"}}></i>
  <i style={{left:"1094px",top:"-7034px"}}></i>
  <i style={{left:"1174px",top:"-704px"}}></i>
  <i style={{left:"1160px",top:"-174px"}}></i>
  </div>
  <div className="box-inner">
  <div className="box">
    <div className="flip front">
      <div className="city">
      </div>
    </div>
  </div>
  <label for="toggle" className="toggle-switch">
  </label>
  </div>
</div>
<div style={{display:"flex", justifyContent:"space-around"}}>
      <h1 style={{color:"white"  }}>Weather Forecast</h1>
      </div>
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" style={{backgroundColor:"rgb(24, 24, 27)"}}>Search</button>
      </form>
      </div>
      {weatherData && (
<div >
        <div className="" style={{display:"flex", justifyContent:"space-around"}}>
          <h2 style={{color:"white"}}>Location: {weatherData.resolvedAddress}</h2>
         
          </div>
          <div className="weather-details">
            {weatherData.days.slice(0, 5).map((day, index) => (
              <div className={`card day-${index + 1}`} key={day.datetime}>
                <h3>{day.datetime}</h3>
                <p>Max Temp: {day.tempmax}°C</p>
                <p>Min Temp: {day.tempmin}°C</p>
                {}
              </div>
            ))}
          </div>
        </div> 
      )}
    </div>
    </>
  );
}
export default App;
