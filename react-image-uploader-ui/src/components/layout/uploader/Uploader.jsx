import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../button/Button';
import Card from '../../card/Card'
import DropZone from '../../dropZone/Dropzone';
import './uploader.css';

const Uploader = ({ onImageChange }) => {

    

    function handleChange(img){
        onImageChange(img)
    }

   
    
    return (
        <Card>
            <div className='upload'>
                <h1>Upload your image</h1>
                <h2>File should be Jpeg, Png,...</h2>
                <form>
                    <DropZone  />
                  
                    <span>Or</span>
                    <Button  onHandleChange={handleChange}/>
                </form>

            </div>
        </Card>

    );
};

export default Uploader;