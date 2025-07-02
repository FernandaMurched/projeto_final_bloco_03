import axios from "axios";

const api = axios.create({
  baseURL: "https://farmacia-jk1x.onrender.com",
});

export const listar = async (url: string, setDados: Function) => {
  try {
    const resposta = await api.get(url);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao listar:", error);
    throw error;
  }
};

export const cadastrar = async (url: string, dados: object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw error;
  }
};

export const atualizar = async (url: string, dados: object, setDados: Function) => {
  try {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    throw error;
  }
};

export const deletar = async (url: string) => {
  try {
    await api.delete(url);
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw error;
  }
};
