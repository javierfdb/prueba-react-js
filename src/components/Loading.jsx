import React, { Component } from 'react';
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/loading.css';

const Loading = () => {
    return (
        <div className="padre">
            <div className="hijo">
                <Spinner color="primary" className='splinter'/>
            </div>
        </div>
    )
    
}

export default Loading;