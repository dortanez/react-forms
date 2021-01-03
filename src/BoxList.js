import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([{height: 100, color: 'blue', width: 100, key: uuid()}]);
    const createBox = (newBox) => {
        setBoxes(boxes => 
            [...boxes,{...newBox, key: uuid()}])
    }
    return (
        <div>
            <NewBoxForm createBox={createBox}/>
            <div className='BoxList-boxes'>
                {boxes.map(({height, width, color, key}) => (
                    <Box height={height} width={width} color={color} key={key}/>
                ))}
            </div>
        </div>
    )
}

export default BoxList;