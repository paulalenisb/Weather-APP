import React, { useState } from 'react';

export default function TodayWheaterInfo({weather}) {
    const sunsetTime = weather.sys.sunset;
    const timeSunset = new Date(sunsetTime * 1e3)
    const dateSunset = timeSunset.toLocaleString([], {hour: '2-digit', minute: '2-digit'});

    const sunriseTime = weather.sys.sunrise;
    const timeSunrise = new Date(sunriseTime * 1e3)
    const dateSunrise = timeSunrise.toLocaleString([], {hour: '2-digit', minute: '2-digit'});


    const [showMore, setShowMore] = useState(false)

    return (
    <div>
        <div className='card card-body'>
            <h5 className='mb-1'>{weather.name}, {weather.sys.country}</h5>
            <h2 className="text-muted">{Math.round(weather.main.temp)}°c</h2>
            <p className='lead'>{weather.weather[0].main}</p>
        </div>

        <div className="card-group temp">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Temp max {Math.round(weather.main.temp_max)}°c</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">Temp min {Math.round(weather.main.temp_min)}°c</h5>
                </div>
            </div>
        </div>

        <div className="btn-show">
            <button 
            type="button" 
            className="btn btn-info"
            onClick={()=>setShowMore(close => !close)}>More info</button></div>
        {
            showMore ? (
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-subtitle">Wind Speed   {Math.round(weather.wind.speed)} m/s</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Humidity {Math.round(weather.main.humidity)}%</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Pressure {Math.round(weather.main.pressure)} hPa</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Sunrise time {dateSunrise}</h5>
                    </div>
                </div>
                
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Sunset time {dateSunset}</h5>
                    </div>
                </div>

            </div>
            ) 
        : null } 


    </div>
    );
}

