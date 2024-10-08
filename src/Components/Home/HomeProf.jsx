import { FaRegFileAlt, FaRegClipboard, FaPaperPlane, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProfHome.css'; // Importando o novo CSS

const HomeProfessores = () => {
    return (
        <div className="home-prof-container">
            <h1>Bem-vindo ao Sistema de Gestão</h1>
            <div className="card-prof-container">
                <Link to="/notas" className="card-prof">
                    <FaRegFileAlt size={48} />
                    <h2>Gerenciar Notas</h2>
                </Link>
                <Link to="/view-notas" className="card-prof">
                    <FaRegClipboard size={48} />
                    <h2>Notas Cadastradas</h2>
                </Link>
                <Link to="/comunicados" className="card-prof">
                    <FaPaperPlane size={48} />
                    <h2>Enviar Comunicado</h2>
                </Link>
                <Link to="/listaComunicados" className="card-prof">
                    <FaUsers size={48} />
                    <h2>Ver Comunicados</h2>
                </Link>
            </div>
        </div>
    );
};

export default HomeProfessores;
