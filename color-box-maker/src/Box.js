import React from 'react';

const Box = ({color, height, width, id, deleteBox}) => {
    return (
        <div style={{backgroundColor: color, height: height, width: width}}>
            <button onClick={() => deleteBox(id)}>X</button>
        </div>
    )
}

export default Box;