
import { useCallback, useState } from 'react'
import DropZone from './Dropzone.jsx'



export const Container = ({onHandleChange}) => {

    

  const [urlFile, setUrlFile] = useState("")
  const [droppedFile, setDroppedFiles] = useState([])



  const handleFileDrop = useCallback(
    (item) => {
      if (item) {
        const files = item.files
        setDroppedFiles(files)
        
            
        onHandleChange(URL.createObjectURL(files[0]))
       
      }
    },
    [setDroppedFiles],
  )
  return (
    <>
      <DropZone onDrop={handleFileDrop} />
     
    </>
  )
}


export default Container;