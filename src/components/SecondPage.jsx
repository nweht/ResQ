import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MyButton from './MyButton';

function SecondPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="mt-3"><Link to={'/dronSub'}>
      <MyButton buttonText="DRON SUBACUÁTICO" width="200px" height="70px"/></Link>
      </div>
      <div className="mt-3"><Link to={'/salvavidas'}>
      <MyButton buttonText="SALVAVIDAS EXPLOSIVO" width="200px" height="70px"/></Link>
      </div>
      <div className="mt-3"><Link to={'/andas'}>
      <MyButton buttonText="ANDAS FLOTANTE" width="200px" height="70px"/></Link>
      </div>
      <div className="mt-3"><Link to={'/'}>
      <MyButton buttonText="Volver Atras" /></Link>
      </div>
    </div>
  );
}

export default SecondPage;
