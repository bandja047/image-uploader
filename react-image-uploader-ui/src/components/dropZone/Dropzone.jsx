import React from 'react';
import './dropZone.css';
import { useDrop } from 'react-dnd'
import { NativeTypes } from 'react-dnd-html5-backend'


const DropZone = (props) => {

    
    const { onDrop } = props
    const [{ canDrop, isOver }, drop] = useDrop(
        () => ({
            accept: [NativeTypes.FILE],
            drop(item) {
                if (onDrop) {
                    onDrop(item)
                }
            },

            canDrop(item) {
                //console.log('canDrop', item.files, item.items)
                return true
            },
            hover(item) {
               // console.log('hover', item.files, item.items)
            },

            collect: (monitor) => {
                const item = monitor.getItem()
                if (item) {
                    console.log('collect', item.files, item.items)
                }
                return {
                    isOver: monitor.isOver(),
                    canDrop: monitor.canDrop(),
                }
            },

        })
    )

    return (
        <div ref={drop} className='dropZone' >
            <img src="../../image.svg" alt='zzz'/>
            <p>drag & drop your image here</p>
        </div>
    );
};

export default DropZone;