import React from 'react';
import './css/From.css'
const Form = ({ onSubmit, inputs }) => {
    return (
        <form onSubmit={onSubmit}>
            {inputs.map((input, index) => (
                <div key={index}>
                    <label>{input.label}</label>
                    <input type={input.type} name={input.name} required={input.required} />
                </div>
            ))}
            <button type="submit">Gönder</button>
        </form>
    );
};

export default Form;
