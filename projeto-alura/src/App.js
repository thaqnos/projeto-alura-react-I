import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela'

class App extends Component {
  state = {
    autores: [
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
    ],
  }

  render() {
    return (
      <div className="App">
        <Tabela autores={this.state.autores} />
      </div>
    );
  }
}

export default App;
