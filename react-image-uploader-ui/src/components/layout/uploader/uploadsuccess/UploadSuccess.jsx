import React from 'react';
import Card from '../../../card/Card';
import './uploadSuccess.css';
import '../../../button/button.css'
const UploadSuccess = ({  image }) => {

   function handleCopy(){
    return navigator.clipboard.writeText(image)
   }
    return (
        <Card>
            <div className='upload'>
                <h1>Success</h1>
                <h2>Upload Successfull</h2>
                <div>
                    <img style={{marginTop:"36px",borderRadius:"8px"}} width="500" height="350" src={image} alt={image} />

                    <div className='copy'>
                        <input className='imgPath' type="text" value={image} disabled />
                        <input type="button" className='btnCopy' value="copy" onClick={()=>navigator.clipboard.writeText(image)} onCopy={()=>handleCopy()}/>
                    </div>

                </div>

            </div>
        </Card>
    );
};

export default UploadSuccess;