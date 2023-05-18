import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Newapifetch =()=>{
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    useEffect(()=>{
        const base_url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46aac0566df8efd7186753154c5a106`
        axios.get(base_url).then((response)=>{
            setWeather(response.data)
        })
    })
    return(
        <div>
            <h1>WEATHER APP</h1>
            <form action="">
                <input type="search"
                placeholder="Enter your city"
                value={city}
                onChange={(e)=> setCity(e.target.value)}
                name=""
                id="" />
            </form>    
            <div>
                <div className="information">
                    {
                    weather &&(
                        <div>
                            <p>{weather.coord.Ion}</p>
                            <p>{weather.coord.lat}</p>
                            <p>{Math.round(weather.main.temp -273.17)} </p>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>    
    )
}
export default Newapifetch;