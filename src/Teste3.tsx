import { useContext } from 'react';

import { Teste3Context } from './Context/Teste3Provider';
import './App.css'

/**
 * @description
 * Nesse teste, temos 2 erros acontecendo:
 * 1. erro de tipagem no valorGlobal
 * 2. o valorGlobal não está sendo renderizado na tela
 */

export function Teste3() {
  const { valorGlobal } = useContext(Teste3Context);

  return (
    <div className="App">
      <h2>Teste 3</h2>
      <div className="card">
        O valor global é: {valorGlobal}
      </div>
    </div>
  )
}