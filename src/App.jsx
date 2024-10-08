import { jwtDecode } from 'jwt-decode';
import './App.css';
import Header from './Components/Header/Header';
import HeaderProfessor from './Components/Header/HeaderProfessor';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();

  const [token, setToken] = useState("")

  // Condições para não exibir cabeçalhos em determinadas rotas ou escolher qual cabeçalho exibir
  const isLoginRoute = location.pathname === '/';
  const isProfessorLogin = location.pathname === '/login/professor';
  const isCoordenadorLogin = location.pathname === '/login/coordenador';

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const decode = jwtDecode(getToken);
      setToken(decode.role);
      
    }
  }, []); 
 

  return (
    <div className="App">
      {/* Renderizar cabeçalhos baseados na rota */}
      {!isLoginRoute && ( // Não exibir cabeçalho na tela de login
        <>
          {token === "PROFESSOR" && <HeaderProfessor />}
          {token === "COORDENADOR" && <Header />}
          {token === "ADMIN" && <Header />}
        </>
      )}
      <main>
        <Outlet /> {/* Renderiza os componentes correspondentes às rotas */}
      </main>
    </div>
  );
}

export default App;