import React, { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import Card from '../card/Card';
import './loader.css'
const Loader = ({onLoading}) => {

   useLayoutEffect(() => {
       
    
        async function wait() {
            console.log("uploading start ...");
            await new Promise(resolve => setTimeout(resolve, 3000));
            onLoading(2)
          }
          
          wait();
      

      
    }, [])

    
    
    console.log("an uploading");
    return (
       
                <div className='loader'>

                    <div className="loaderBar"></div>
                </div>
               
         

    );
};

export default Loader;