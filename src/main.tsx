import React from 'react'
import ReactDOM from 'react-dom/client'
import { Teste1 } from './Teste1'
import { Teste2 } from './Teste2'
import { Teste3 } from './Teste3'
import './index.css'
import { Teste3Provider } from './Context/Teste3Provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Teste3Provider>
      <Teste1 />
      <Teste2 />
    </Teste3Provider>
    <Teste3 />
  </React.StrictMode>
)
