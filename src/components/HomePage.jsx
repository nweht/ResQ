import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import MyButton from './MyButton';

function HomePage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <div>
        <img
          className="d-block w-100"
          src="https://i.imgur.com/7syzTBa.png"
          alt="mainPic"
        />
      </div>
      <div className="mt-3"><Link to={'/modosDeUso'}>
      <MyButton buttonText="Modos de Uso" /></Link>
      </div>
    </div>
  );
}

export default HomePage;

