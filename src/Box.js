import React from 'react';

const Box = ({color, height, width}) => {
    return (
        <div style={{backgroundColor: color, height: height, width: width}}>
        </div>
    )
}

export default Box;