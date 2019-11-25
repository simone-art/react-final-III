import React from 'react';
import './style.css'

export default function Button(props) {
    
    const {classe, onClick, children} = props;
    return (

    <button className={classe}onClick={onClick}>{children}</button>
    )
}