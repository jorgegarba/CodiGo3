import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';
import './App.css';

function App() {
  let datos = {
    titulo: "Titulo de la App",
    subtitulo: "Slogan de la App",
    visitas: 789
  }
  let productos = [
    {
      nombre: 'Laptop',
      precio: 7000
    },{
      nombre: 'Mouse',
      precio: 40
    }
  ];
  return (
    <div>
      <Header datos={datos} />
      <Productos productos={productos}/>
      <Footer datos={datos} />
    </div>
  );
}
export default App;