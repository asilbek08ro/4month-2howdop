import { useState } from "react";
import axios from "axios";

export default function Form({data, setData}) {
  const [cityName, setCityName] = useState('');
  

  const getData = (city) =>{
    let KEY = 'f4833cf990dc92ef43563c9b00da2a78';
    let APIlink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    axios(APIlink)
    .then(({data})=>{
      console.log(data);
      setData(data)
    });
  }
  return (
    <div>
        <input type="text" onChange={(event)=>{
      setCityName(event.target.value);
     }} />
     <br />
        <button onClick={() => {
          getData(cityName);
        }}>get weather</button>
    </div>
  )
}

