import React, {useState} from 'react';

const NewBoxForm = ({createBox}) => {
    const [formData, setFormData] = useState();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => (
            {...formData,[name]: value}
        ))
    }
    const handleSubmit = () => {
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Create New Box</h4>
            <label htmlFor='color'>Color</label>
            <input 
                name='color' 
                value='color' 
                type='color' 
                id='color'
                onChange={handleChange}
            />
            <label htmlFor='height'>Height</label>
            <input 
                name='height' 
                value='height' 
                type='number' 
                id='height'
                onChange={handleChange}
            />
            <label htmlFor='width'>Width</label>
            <input 
                name='width' 
                value='width' 
                type='number' 
                id='width'
                onChange={handleChange}
            />
            <button onClick={handleSubmit}></button>
        </form>
    )
}

export default NewBoxForm;