import React from 'react';
import './App.css';
import Tabela from './Tabela'

function App() {
  const autores = [
    {
      nome: 'Thamires',
      livro: 'React',
      preco: 'R$ 1000'
    },
    {
      nome: 'Daniela',
      livro: 'Java',
      preco: 'R$ 99'
    },
    {
      nome: 'Maria',
      livro: 'Design',
      preco: 'R$ 150'
    },
    {
      nome: 'Bruna',
      livro: 'DevOps',
      preco: 'R$ 100'
    }
  ]


  return (
    <div className="App">
      <Tabela autores = { autores } />
    </div>
  );
}

export default App;
