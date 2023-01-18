import React, { Component } from 'react';

const BtmOrder = ({funcion, clases }) => {
    return (
        <>
            <button onClick={funcion} className="btn btn-primary">
            <i className={`${clases}`}></i>
            </button>
        </>
    )
    
}

export default BtmOrder;