import { useState } from "react"
import axios from "axios";

function Weather()
{
  const [city,setCity] = useState("")
  const [weather,setWeather]= useState("")
  const [temp,setTemp] = useState("")
  const [desc,setDesc] = useState("")
  function handleCity(evt)
  {
setCity(evt.target.value)
  }
  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=b4a81be1a0d7f71045f157772e165783`)
weatherData.then(function(success)
{
    console.log(success.data)
    setWeather(success.data.weather[0].main)
    setDesc(success.data.weather[0].description)
    setTemp(success.data.main.temp)
})

  }
    return(
        <div className="bg-cover bg-center bg-no-repeat h-screen bg-custom text-center" >
            <h1 className="text-black  text-3xl font-extrabold p-9">Weather Report</h1>
<p className="text-black  text-2xl font-semibold p-7"> I Can give you a weather report about your city...!</p>
<input className=" border border-black rounded-xl p-3 m-5 " placeholder="Enter your city name" onChange={handleCity} type="text"></input><br></br>
<button onClick={getWeather} className="bg-black border border-yellow-500  rounded-3xl p-3 m-7 text-neutral-300 text-xl">Get Report</button>
<div className="flex gap-4 justify-around m-10 text-2xl">
    <p><b>Weather : </b>{weather}</p>
    <p><b>Temperature : </b>{temp}</p>
    <p><b>Description : </b>{desc}</p>
</div>

        </div>
    )
}
export default Weather