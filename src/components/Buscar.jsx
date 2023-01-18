import React, { Component } from 'react';

const Buscar = ({setBuscar, buscar}) => {
    return (
        <>
            <input onChange={(e) => setBuscar(e.target.value)} className='form-control' type="text" placeholder='Find your meme ;D' value={buscar}/>
            <i className="fas fa-search"></i>
        </>
    )
    
}

export default Buscar;