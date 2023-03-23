import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from './common/Card';


function Right_side({handelSubmit, setCity, city, data}) {
  if (data){
    return (
      <div className="right">
          <div className="search-container">
            <div className="input-container">
              <input 
                type="text" 
                value={city}
                onChange= {e => setCity(e.target.value)}
                className='input' 
                placeholder='Select City'
              />
            </div>
            <div  
              className='search-icon-container'
              onClick={handelSubmit}
            >
              <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            </div>
          </div>
          <div className="detail">
            {
              data.map(item=>
                <Card key={item.title} title={item.title} data= {item.data}/>
              )
            }
          </div>
        </div>
    );
  }
  
}

export default Right_side;