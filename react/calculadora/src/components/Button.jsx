import React from 'react';
import './Button.css';

export default function mainButtons(props){ 
    return <button className='button'>{props.label}</button>
}