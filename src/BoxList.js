import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState();
    const createBox = (newBox) => {
        setBoxes(boxes => {
            return [...boxes,{...newBox}]
        })
    }
    return (
        <div>
            {boxes.map(({height, width, color}) => {
                <Box height={height} width={width} color={color}/>
            })}
            <NewBoxForm createBox={createBox}/>
        </div>
    )
}

export default BoxList;