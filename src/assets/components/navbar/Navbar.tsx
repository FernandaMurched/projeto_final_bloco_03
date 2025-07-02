import { House, List, Plus } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Pill } from '@phosphor-icons/react'

function Navbar() {
    return (
        <div className='w-full flex justify-center py-4 bg-teal-700 text-white shadow-lg'>
            <div className="container flex justify-between items-center text-lg">
                <Link to="/" className="flex items-center gap-2 font-bold text-xl">
                    <Pill size={32} />
                    Health+
                </Link>

                <div className='flex gap-6'>
                    <Link to="/" className="flex items-center gap-1 hover:text-indigo-300 transition-colors">
                        <House size={18} />
                        Home
                    </Link>
                    <Link to="/categorias" className="flex items-center gap-1 hover:text-indigo-300 transition-colors">
                        <List size={18} />
                        Categorias
                    </Link>
                    {/* CORRIGIDO: Mudança do caminho para corresponder à rota definida */}
                    <Link to="/cadastrarcategoria" className="flex items-center gap-1 hover:text-indigo-300 transition-colors">
                        <Plus size={18} />
                        Cadastrar Categoria
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
