

import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
import Button from '../../button/Button';
import Card from '../../card/Card'
import Container from '../../dropZone/Container';

import './uploader.css';

const Uploader = ({ onImageChange }) => {



    function handleChange(img) {
        onImageChange(img)
    }



    return (
        <Card>
            <div className='upload'>
                <h1>Upload your image</h1>
                <h2>File should be Jpeg, Png,...</h2>
                <form>
                    <DndProvider backend={HTML5Backend}>
                        <Container onHandleChange={handleChange}/>
                    </DndProvider>


                    <span>Or</span>
                    <Button onHandleChange={handleChange} />
                </form>

            </div>
        </Card>

    );
};

export default Uploader;