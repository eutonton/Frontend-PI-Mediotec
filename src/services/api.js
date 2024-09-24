// api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/alunos';

// Função para buscar todos os alunos
export const fetchAlunos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para buscar um aluno específico pelo ID
export const fetchUsuario = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Cadastrar aluno
export const cadastrarAluno = async (alunoData) => {
    try {
        const response = await axios.post(API_URL, alunoData);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para editar um aluno
export const editarUsuario = async (id, newName) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { nome: newName });
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para deletar um aluno
export const deleteAluno = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        throw new Error(error.message);
    }
};

// Função para autenticar usuário
export const autenticarUsuario = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            email: username,
            senha: password,
        });
        return response.data; // Retorna os dados do usuário autenticado
    } catch (error) {
        throw new Error('Erro ao autenticar: ' + error.response?.data?.message || error.message);
    }
};