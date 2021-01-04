import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const createBox = newBox => {
        setBoxes(boxes => 
            [...boxes,{...newBox, key: uuid()}])
    }
    const deleteBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id))
    }
    return (
        <div>
            <NewBoxForm createBox={createBox}/>
            <div className='BoxList-boxes'>
                {boxes.map(({height, width, color, id}) => (
                    <Box 
                        deleteBox={deleteBox} 
                        height={height} 
                        width={width} 
                        color={color} 
                        key={id} 
                        id={id}
                    />
                ))}
            </div>
        </div>
    )
}

export default BoxList;