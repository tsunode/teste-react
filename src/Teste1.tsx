import './App.css'

/**
 * @description 
 * Neste teste precisamos renderizar o contador em tela,
 * mas por algum motivo toda vez que eu mudo o counter, isso não refle na dom.
 */

export function Teste1() {
  let count = 0

  function add() {
    count += 1;

    console.log('Count', count);
  }

  return (
    <div className="App">
      <h2>Teste 1</h2>
      <div className="card">
        <button onClick={add}>
          count is {count}
        </button>
      </div>
    </div>
  )
}
