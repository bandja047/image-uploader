import React from 'react';

import './button.css';
const Button = ({onHandleChange}) => {
  
   

    function handleChange(e){
        console.log('image : ' + e.target.files[0].size);
        let value =  URL.createObjectURL(e.target.files[0]);
        console.log("value " + value);
        onHandleChange(value)
    }
    return (
        <div >
           
            <label htmlFor="img">Choose a file</label>
            <input type="file" id="img" name="img" accept="image/*" hidden className ="btnPrimary" onChange={(e)=>handleChange(e)} />
        </div>
    );
};

export default Button;