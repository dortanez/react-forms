import React, {useState} from 'react';

const NewBoxForm = ({createBox}) => {
    const Initial_state = {
        color: '#000000',
        height: 0,
        width: 0
    }
    const [formData, setFormData] = useState(Initial_state);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => {
             if(name === 'height' || name === 'width') {
                return {...formData,[name]: Number(value)}
            } else {
                return {...formData,[name]: value}
            }
                
        })
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({...formData});
        setFormData(Initial_state);
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Create New Box</h4>
            <label htmlFor='color'>Color</label>
            <input 
                name='color' 
                value={formData.color}
                type='color' 
                id='color'
                onChange={handleChange}
            />
            <label htmlFor='height'>Height</label>
            <input 
                name='height' 
                value={formData.height}
                type='number' 
                id='height'
                onChange={handleChange}
            />
            <label htmlFor='width'>Width</label>
            <input 
                name='width' 
                value={formData.width}
                type='number' 
                id='width'
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm;