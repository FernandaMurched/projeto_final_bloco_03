import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../../models/Categoria";
import { listar, atualizar, cadastrar } from "../../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string>("");

  // CORRIGIDO: Inicialização adequada com 'nome' em vez de 'tipo'
  const [categoria, setCategoria] = useState<Categoria>({
    id: undefined,
    nome: "",
  });

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      setErro("");
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      const mensagemErro = "Categoria não encontrada!";
      setErro(mensagemErro);
      console.error("Erro ao buscar categoria:", error);
      setTimeout(() => retornar(), 2000);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function validarFormulario(): boolean {
    if (!categoria.nome || categoria.nome.trim().length < 2) {
      setErro("O campo categoria deve ter pelo menos 2 caracteres");
      return false;
    }
    return true;
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    setIsLoading(true);
    setErro("");

    try {
      if (id !== undefined) {
        await atualizar('/categorias', categoria, setCategoria);
        alert("Categoria atualizada com sucesso");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("Categoria cadastrada com sucesso");
      }

      retornar();
    } catch (error: any) {
      const mensagemErro =
        id !== undefined
          ? "Erro ao atualizar a categoria"
          : "Erro ao cadastrar a categoria";
      setErro(mensagemErro);
      console.error("Erro na operação:", error);
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto px-2 pt-4">
      <h1 className="text-3xl md:text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      {erro && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-md">
          {erro}
        </div>
      )}

      <form
        className="w-full max-w-md md:max-w-1/2 flex flex-col gap-4 px-2"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="font-semibold">
            Categoria
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            className="bg-white border-2 border-slate-700 rounded p-2 text-base md:text-lg"
            required
            minLength={2}
            value={categoria.nome || ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-slate-400 hover:bg-slate-800 w-full md:w-1/2 py-2 mx-auto flex justify-center text-base md:text-lg disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
