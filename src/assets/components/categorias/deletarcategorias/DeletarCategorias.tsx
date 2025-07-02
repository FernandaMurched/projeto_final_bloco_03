import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../../models/Categoria";
import { listar, deletar } from "../../../../services/Service";

function DeletarCategoria() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [carregandoCategoria, setCarregandoCategoria] = useState<boolean>(true);
    const [erro, setErro] = useState<string>('');
    
    // CORRIGIDO: Inicialização adequada
    const [categoria, setCategoria] = useState<Categoria>({
        id: undefined,
        nome: ''
    });

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            setErro('');
            await listar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            setErro('Categoria não encontrada!');
            console.error(error);
            setTimeout(() => retornar(), 2000);
        } finally {
            setCarregandoCategoria(false);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);
        setErro('');

        try {
            await deletar(`/categorias/${id}`);
            alert('Categoria apagada com sucesso');
            retornar();
        } catch (error: any) {
            setErro('Erro ao apagar a categoria');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    function retornar() {
        navigate("/categorias");
    }

    if (carregandoCategoria) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ClipLoader color="#374151" size={40} />
            </div>
        );
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-4 md:pt-6'>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-red-600'>
                Deletar Categoria
            </h1>
            
            {/* ADICIONADO: Exibição de erro */}
            {erro && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {erro}
                </div>
            )}
            
            <p className='text-center font-semibold mb-4 text-base md:text-lg'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>
            
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg'>
                <header className='py-2 px-4 md:px-6 bg-slate-600 text-white font-bold text-lg md:text-2xl'>
                    Categoria
                </header>
                <p className='p-4 md:p-8 text-xl md:text-3xl bg-white h-full text-center'>
                    {categoria.nome || 'Carregando...'}
                </p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 text-base md:text-lg transition-colors'
                        onClick={retornar}
                        disabled={isLoading}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center text-base md:text-lg transition-colors disabled:opacity-50'
                        onClick={deletarCategoria}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ClipLoader color="#ffffff" size={24} />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
