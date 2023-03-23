import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Left_side from './components/Left_side';
import Right_side from './components/Right_side';
import { listify } from './util/listify';

function App() {

  const [city, setCity]= useState('')
  const [submit, setSubmit]= useState(0)
  const [locations, setLocation]= useState({lat: '', lon: ''})
  const [tempreture, setTempreture]= useState(0)
  const [data, setData]= useState([])

  useEffect(()=>{
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f8f91469a52f8da248e97d9a088581a7`)
      .then(response=> {
        const {name}= response.data[0]
        setCity(name)
        setLocation(response.data[0])
      })
      .catch(e=> console.log("can't find city or check your connection"))
  }, [submit])


  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locations.lat}&lon=${locations.lon}&units=metric&appid=f8f91469a52f8da248e97d9a088581a7`)
        .then(res => {
          const {temp}= res.data.main
          setTempreture(temp)
          return res
        })
        .then((res)=> {
          setData(listify(res.data))
        })
        .catch(e=> console.log(" check your connection"))
  }, [locations])

//const url= "https://api.openweathermap.org/data/2.5/weather?lat=51.5156177&lon=0.0919983&units=metric&appid=f8f91469a52f8da248e97d9a088581a7"
// const url_convert= "http://api.openweathermap.org/geo/1.0/direct?q=Addis_Ababa&limit=5&appid=f8f91469a52f8da248e97d9a088581a7"


const handelSubmit= (e)=> {
  e.preventDefault()
  setSubmit(()=> submit + 1)
}
  return (
    <div className="app">
      <Left_side tempreture={tempreture} city= {city} />
      <Right_side submit={submit} handelSubmit={handelSubmit} setCity= {setCity} city={city} data= {data} />
    </div>
  );
}

export default App;
