import React, { Component } from 'react';

const Mismemes = ({memazos, buscar}) => {
    return (
        <>
            
            {memazos.filter((item) => item.name.toLowerCase().includes(buscar.toLowerCase())).map((momo) => {
              return <div key={momo.id} className="col-lg-3">
                          <div className="card wrap-card">
                              <figure className='mb-0'>
                                <img className="w-100" src={momo.url} alt="momos" />
                              </figure>
                              <div className="card-body">
                                <h5 className="card-title">{momo.name}</h5>
                                <a className="link-full-img" target='_blank' href={momo.url}>Full image</a>
                              </div>
                          </div>
                    </div>
               })}
        </>
    )
    
}

export default Mismemes;