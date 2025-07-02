import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-jk1x.onrender.com",
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// ADICIONADO: Interceptors para debug
api.interceptors.request.use(
  (config) => {
    console.log(`Enviando requisição: ${config.method?.toUpperCase()} ${config.url}`, config.data);
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`Resposta recebida: ${response.status}`, response.data);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const listar = async <T>(url: string, setDados: (dados: T) => void): Promise<void> => {
  try {
    const resposta = await api.get<T>(url);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao listar:", error);
    throw error;
  }
};

export const cadastrar = async <T>(url: string, dados: object, setDados: (dados: T) => void): Promise<void> => {
  try {
    const resposta = await api.post<T>(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
};

// CORRIGIDO: Função de atualizar melhorada
export const atualizar = async <T>(url: string, dados: object, setDados: (dados: T) => void): Promise<void> => {
  try {
    const resposta = await api.put<T>(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    throw error;
  }
};

export const deletar = async (url: string): Promise<void> => {
  try {
    await api.delete(url);
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw error;
  }
};
