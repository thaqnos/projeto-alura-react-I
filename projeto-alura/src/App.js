import React from 'react';
import './App.css';
import Tabela from './Tabela'

function App() {
  const autores = [
    {
      nome: 'Thamires',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniela',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Maria',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruna',
      livro: 'DevOps',
      preco: '100'
    }
  ]


  return (
    <div className="App">
      <Tabela />
    </div>
  );
}

export default App;
