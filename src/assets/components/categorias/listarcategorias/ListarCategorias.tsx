import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardCategorias from '../cardcategorias/CardCategorias';
import type Categoria from '../../../../models/Categoria';
import { listar } from '../../../../services/Service';

function ListarCategorias() {
    const [isLoading, setIsLoading] = useState(true);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [erro, setErro] = useState<string>('');

    async function buscarCategorias() {
        try {
            setErro('');
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            console.error('Erro ao carregar categorias:', error);
            setErro('Erro ao carregar categorias. Tente novamente mais tarde.');
        }
    }

    useEffect(() => {
        setIsLoading(true);
        buscarCategorias().finally(() => setIsLoading(false));
    }, []);

    const recarregarCategorias = () => {
        setIsLoading(true);
        buscarCategorias().finally(() => setIsLoading(false));
    };

    if (erro) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
                <div className="text-red-600 text-xl mb-4 text-center">
                    {erro}
                </div>
                <button 
                    onClick={recarregarCategorias}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                    Tentar Novamente
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center bg-slate-100 pt-4 min-h-screen">
            <div className="px-4 my-4 container flex flex-col">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-slate-800">
                        Categorias de Medicamentos
                    </h1>
                    <Link 
                        to="/cadastrarcategoria"
                        className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition-colors"
                    >
                        Nova Categoria
                    </Link>
                </div>
                
                {isLoading ? (
                    <div className="flex justify-center items-center my-16">
                        <div className="text-2xl text-slate-600">Carregando...</div>
                    </div>
                ) : categorias.length === 0 ? (
                    <div className="text-center my-8">
                        <p className="text-2xl text-slate-600 mb-4">Nenhuma categoria encontrada</p>
                        <Link 
                            to="/cadastrarcategoria"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Criar Nova Categoria
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categorias.map((categoria) => (
                            <CardCategorias
                                key={categoria.id || Math.random()}
                                categoria={categoria}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ListarCategorias;
