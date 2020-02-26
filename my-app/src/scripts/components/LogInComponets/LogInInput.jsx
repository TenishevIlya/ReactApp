import React from 'react';

const Input = (props) => {
    return <input type={props.type} className={props.class} placeholder={props.name}></input>
}

export default Input;