import { useEffect, useState } from 'react'
import { IUser, getUsersApi } from './utils/sleep'
import './App.css'

/**
 * @description
 * Aqui temos um erro grave no ciclo de vida do react.
 * Consegue enxergar o erro e resolve-lo?
 * Dica: use console.log para entender o erro.
 */

export function Teste2() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function getUsers() {
      const response = await getUsersApi();

      setUsers(response)
    }

    getUsers();

  }, [users])

  return (
    <div className="App">
      <h2>Teste 2</h2>
      <div className="card">
        <ul>
          {
            users.map((user, index) => <li key={index}>{ user.name }</li>)
          }
        </ul>
      </div>
    </div>
  )
}
