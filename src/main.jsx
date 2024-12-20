import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Login/Login.jsx';
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import CadastroProfessor from './Components/Cadastro/CadastroProfessor.jsx';
import DataDisplay from './Components/Usuarios/Alunos.jsx'
import EditUsuario from './Components/EditUser/EditAluno.jsx';
import Home from './Components/Home/Home.jsx'
import HomeProf from './Components/Home/HomeProf.jsx'
import Comunicados from './Components/Comunicados/Comunicados.jsx';
import CadastroCoordenador from './Components/Cadastro/CadastroCoordenador.jsx';
import CadastroDisciplina from './Components/Cadastro/CadastroMateria.jsx';
import CadastroTurma from './Components/Cadastro/CadastroTurma.jsx';
import TurmasDisplay from './Components/Usuarios/Turmas.jsx';
import ProfessorDisplay from './Components/Usuarios/Professores.jsx';
import CoordenadoresDisplay from './Components/Usuarios/Coordenadores.jsx';
import CadastroNotas from './Components/Notas/CadastroNotas.jsx'; 
import NotasPorTurma from './Components/viewNotas/viewNotas.jsx';
import EditarProfessor from './Components/EditUser/EditProfessor.jsx';
import EditarCoordenador from './Components/EditUser/EditCoordenador.jsx'; 
import AssociarTurmaDisciplina from './Components/Associoar/AssociarTurmaDiscipli.jsx';
import EditarTurma from './Components/EditUser/EditTurmas.jsx';
import ListaComunicados from './Components/Comunicados/ListaComunicados.jsx';
import { RoleProvider } from './Components/Contexts/RoleContext.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <RoleProvider>
      <App />
    </RoleProvider>
    , // Renderiza o App
    children: [
      {
        path: '/',
        element: <Login /> // Login como rota padrão
      },
      {
        path: 'cadastro',
        element:<Cadastro/>
      },
      {
        path: 'alunos',
        element:<DataDisplay/>
      },
      {
        path: '/edit/:id',
        element:<EditUsuario/>
      },
      {
        path: 'home',
        element:<Home/>
      },
      {
        path: 'cadastroProfessor',
        element:<CadastroProfessor/>
      },
      {
        path: 'homeProf',
        element:<HomeProf/>
      },
      {
        path: 'comunicados',
        element:<Comunicados/>
      },
      {
        path: 'cadastroCoordenador',
        element:<CadastroCoordenador/>
      },
      {
        path: 'cadastroDisciplina',
        element:<CadastroDisciplina/>
      },
      {
        path: 'cadastroTurma',
        element:<CadastroTurma/>
      },
      {
        path: 'turmas',
        element:<TurmasDisplay/>
      },
      {
        path: 'professores',
        element:<ProfessorDisplay/>
      },
      {
        path: 'coordenadores',
        element:<CoordenadoresDisplay/>
      },
      {
        path: 'notas',
        element:<CadastroNotas/>
      },
      {
        path: 'view-notas',
        element:<NotasPorTurma/>
      },
      {
        path: 'editProf/:id',
        element:<EditarProfessor />
      },
      {
        path: 'editCoord/:id',
        element:<EditarCoordenador />
      },
      {
        path: 'associar',
        element:<AssociarTurmaDisciplina />
      },
      {
        path: 'editTurma/:id',
        element:<EditarTurma/>
      },
      {
        path: 'listaComunicados',
        element:<ListaComunicados/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => console.log('Service Worker registrado com sucesso!'))
    .catch((err) => console.error('Erro ao registrar o Service Worker:', err));
}
