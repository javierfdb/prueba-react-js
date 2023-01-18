import React from "react";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './components/Loading'
import MiApi from './components/MiApi'
import Tooltip from './components/Tooltip'
import Buscar from './components/Buscar'
import BtnOrder from './components/BtnOrder'

const App= () => { 
const [memazos, setMemazos] = useState([]);
const [buscar, setBuscar] = useState('');
const [ordenarAsc, setordenarAsc] = useState([]);
const [ordenarDsc, setordenarDsc] = useState([]);
const [loading, setLoading] = useState(true);

const getMemes = async () => {
  const url = 'https://api.imgflip.com/get_memes';
  const response = await fetch(url)
  const allMemes = await response.json();
  setMemazos(allMemes.data.memes);
}

useEffect(() => {
  getMemes();
  cambiarEstado();
}, [])

const handleOrdenarAsc = () => {
  const newArrayAsc = memazos.sort(( a, b ) => {
    return  a.name < b.name ? -1 : a.name > b.name ? 1 : 0;  
}).splice(0);
setMemazos(newArrayAsc);
};

const handleOrdenarDsc = () => {
    const newArrayDsc = memazos.sort(( a, b ) => {
      return  b.name < a.name ? -1 : b.name > a.name ? 1 : 0;  
});
setordenarDsc(newArrayDsc);
};

const handleOrdenarRes = () => {
  Refresh();
  getMemes();
};

const cambiarEstado = () => {
  setTimeout(() => {
    setLoading(false);
  }, 750);
}

const Refresh = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 750);
}
  
  return (

    <> 
    
        <h1 className='text-center mb-5'>Top 100 Most Popular Memes</h1>
        <div className="row mb-4">
          <div className="col-lg-6 box-search">
            <div className="form-group">
              <Buscar setBuscar={setBuscar} buscar={buscar}></Buscar>
            </div>
            
            <div>
            <Tooltip></Tooltip>
            </div>

          </div>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6 d-flex box-orden">
            <h4>Sort:</h4>

            <BtnOrder 
              funcion={handleOrdenarAsc}
              clases="fas fa-arrow-up"
            ></BtnOrder>

              <BtnOrder 
              funcion={handleOrdenarDsc}
              clases="fas fa-arrow-down"
            ></BtnOrder>

            <BtnOrder 
              funcion={handleOrdenarRes}
              clases="fas fa-undo"
            ></BtnOrder>

          </div>
        </div>
     
        <div className="row">
          {
            loading === true ? <Loading/> : <MiApi memazos={memazos} buscar={buscar}/> 
          }
        </div>
    </>

  )

}

export default App
