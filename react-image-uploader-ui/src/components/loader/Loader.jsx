import React from 'react';
import { useEffect } from 'react';

import './loader.css'
const Loader = ({onLoading}) => {

   useEffect(() => {
       
    
        async function wait() {
            console.log("uploading start ...");
            await new Promise(resolve => setTimeout(resolve, 3000));
            onLoading(2)
          }
          
          wait();
      

      
    }, [onLoading])

    
    
    console.log("an uploading");
    return (
       
                <div className='loader'>

                    <div className="loaderBar"></div>
                </div>
               
         

    );
};

export default Loader;