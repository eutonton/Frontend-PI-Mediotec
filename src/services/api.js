// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';
const API_URL_PROF = ''; // Defina a URL da API para professores aqui

// Cria uma instância do Axios
const api = axios.create({
    baseURL: API_URL,
});

// Adiciona um interceptor para incluir o token em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken'); // Obtém o token do localStorage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`; // Adiciona o token ao cabeçalho
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Função para buscar todos os alunos
export const fetchAlunos = async () => {
    try {
        const response = await api.get('/users/allStudents'); // Usa a instância do Axios
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para buscar um aluno específico pelo ID
export const fetchUsuario = async (id) => {
    try {   
        const response = await api.get(`/${id}`); // Usa a instância do Axios
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Cadastrar aluno
export const cadastrarAluno = async (alunoData) => {
    try {
        const response = await api.post('http://localhost:8080/api/users/register/student', alunoData, { // Adicione a vírgula aqui
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Se aplicável
                'Content-Type': 'application/json' // Opcional
            }
        }); // Usa a instância do Axios
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};


// Cadastrar Professor
export const cadastrarProfessor = async (alunoData) => {
    try {
        const response = await api.post(API_URL_PROF, alunoData); // Usa a instância do Axios
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para editar um aluno
export const editarUsuario = async (id, newName) => {
    try {
        const response = await api.put(`/users/update/student/${id}`, { nome: newName }); // Corrigido 'usuers' para 'users'
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para deletar um aluno
export const deleteAluno = async (id) => {
    try {
        await api.delete(`/${id}`); // Usa a instância do Axios
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para autenticar usuário
export const autenticarUsuario = async (cpf, password) => {
    try {
        const response = await api.post('/auth/login', {
            cpf: cpf,
            senha: password,
        });
        return response.data; // Retorna os dados do usuário autenticado
    } catch (error) {
        throw new Error('Erro ao autenticar: ' + error.response?.data?.message || error.message);
    }
};

// Função para cadastrar coordenador
export const cadastrarCoordenador = async (dados) => {
    try {
        const response = await api.post('http://localhost:8080/api/users/register/coordinator', dados, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Se aplicável
                'Content-Type': 'application/json' // Opcional
            }
        }); 
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar coordenador:', error); // Log detalhado do erro
        throw new Error('Erro ao cadastrar coordenador: ' + error.response?.data?.message || error.message);
    }
};


// Função cadastrarDisciplina
export const cadastrarDisciplina = async (disciplinaData) => {
    const token = localStorage.getItem('authToken'); // Obter o token do localStorage

    const response = await fetch('http://localhost:8080/api/disciplines/insertDiscipline', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Adiciona o token ao cabeçalho
        },
        body: JSON.stringify(disciplinaData),
    });

    if (!response.ok) {
        throw new Error('Erro ao cadastrar a disciplina');
    }
    return response.json();
};


// Função para cadastrar Turma
export const cadastrarTurma = async (turmaData) => {
    const response = await fetch('SUA_API_ENDPOINT/turma', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(turmaData),
    });
    if (!response.ok) {
        throw new Error('Erro ao cadastrar a turma');
    }
    return response.json();
};

export function deleteTurma(id) {
    return api.delete(`/turmas/${id}`);
}

export function fetchTurmas() {
    return api.get('/turmas');
}

export default api; // Exporte a instância do Axios para uso em outros arquivos

