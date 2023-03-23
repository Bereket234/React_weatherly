import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'


function Left_side({tempreture, city}) {
  if (tempreture && city){
    return (
      <div className="left">
        <div className="top">
          <div className="logo"><h4>Weatherly</h4></div>
        </div>
        <div className="bottom">
          <div className='tempreture-container'>
            <h1>{tempreture}°C</h1>
          </div>
          <div className='city-container'>
          <div className='city'>
            <h2>{city}</h2>
          </div>
          <div className='time'>
            <p>06:09 - Monday, 9 sep '19</p>
          </div>
        </div>
        <div className='condition-container'>
          <div className='icon-container'>
            <FontAwesomeIcon className='icon' icon={faCloud}/>
          </div>
          <div className='condition'>
            <p>cloudy</p>
          </div>
        </div>
      </div>
    </div>
    );
  }else{
    return(
      <div className="loading">
        <p>Please select a city!!</p>
      </div>
    )
  }
}

export default Left_side;