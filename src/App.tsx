import {useEffect, useMemo, useState} from "react";

import api from "./api";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const matches = users.filter((user) => user.name.toLocaleLowerCase().trim().normalize("NFD").includes(query.toLocaleLowerCase().trim().normalize("NFD")));
  const [isLoading, setIsLoading] = useState(false)

  // Optimizacion de memo, evita recalcular valores si es que algun estado del mismo componente se re-renderiza
  const matchesMemo = useMemo(() => {
    return users.filter((user) => user.name.toLocaleLowerCase().trim().normalize("NFD").includes(query.toLocaleLowerCase().trim().normalize("NFD")));
  }, [query, users])


  useEffect(() => {
    setIsLoading(true)
    api.list().then(users => setUsers(users)).finally(() => setIsLoading(false))
  }, []);

  return (
    <main>
      <h1>Directorio de usuarios</h1>
      <h2>Numero total de estudiantes: {users.length} </h2>
      <h3>{matchesMemo.length} resultados de {users.length} usuarios</h3>
      <input
        placeholder="Buscar por nombre"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {isLoading ? (
        <span>Cargando...</span>
        ):
        <>
          {matchesMemo.length !== 0 ? matchesMemo.map((user) => (
          <li key={user.id}>
            <div>
              <strong>{user.name}</strong>
              <span>{user.email}</span>
            </div>
          </li>
        )): <span>Sin coincidencias</span>}
        </>
        }
      </ul>
    </main>
  );
}

export default App;
