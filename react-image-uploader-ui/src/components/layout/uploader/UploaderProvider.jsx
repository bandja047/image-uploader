import React from 'react';
import { useState } from 'react';
import Loader from '../../loader/Loader';
import Uploader from './Uploader';
import UploadSuccess from './uploadsuccess/UploadSuccess';

const UploaderProvider = () => {
  
    
    const [upload, setUpload] = useState({
        img:"",
        status:0
        
    })

    function handleImageChange(imgSelected){
        
        setUpload((prevState)=> ({img:imgSelected,status:1}))
    }

    function handleLoading(status){
        setUpload((prevState)=>({...prevState,status:status}))
    }
    function RenderUploadStep(){
        if(upload.status === 0){
            return <Uploader  onImageChange={handleImageChange}/>
        }else if(upload.status===1){
            return <Loader onLoading={handleLoading}/>
        }else{
           // console.log(upload.img)
            return <UploadSuccess image={upload.img}/>
        }
    }
    
    return   RenderUploadStep()
    
};

export default UploaderProvider;