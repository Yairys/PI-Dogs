import React from 'react';
import { useDispatch} from 'react-redux'



export default function Filter (){
  return(
    <div>
      <div>
      <form className="form"/>
      <p>Order Dogs:</p>  
      </div>

    <div>
    <input
      /* onClick={handleSubmit} */
      className='orderBtn'
      type="button"
      id="A to Z"
      name="order"
      value="A to Z" />

    </div>

    <div>
    <input
      /* onClick={handleSubmit} */
      className='orderBtn'
      type="button"
      id="Z to A"
      name="order"
      value="Z to A" />
    </div>






    </div>

   

       
)}