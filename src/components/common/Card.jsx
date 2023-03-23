import React from 'react';

function Card({title, data}) {
    return (
        <div className='card'>
           <div className="title">
                <h5>{title}</h5>
            </div> 
            <div className="rows-container">
            {
                data.map((row)=><div key= {row[0]} className="row">
                    {
                        row.map(col =><div className="col" key={col}><p>{col}</p></div>)
                    }
                </div>
                )
            }
            </div>
        </div>
    );
}

export default Card;