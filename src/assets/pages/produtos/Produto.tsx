import type Produto from '../../../models/Produto';

const produtosMock: Produto[] = [
  {
    id: 1,
    nome: 'Leave In',
    preco: '52.99',
    foto: 'https://acdn-us.mitiendanube.com/stores/001/154/387/products/leave-in-cavalo-150g1-c413e87180531ba34f15940432227173-1024-10241-e0bcca2d3797cafb7c16449559269435-1024-1024.jpg',
    categoria: { id: 1, nome: 'Cosmético' }
  },
  {
    id: 2,
    nome: 'Vitamina C 1g',
    preco: '19.90',
    foto: 'https://www.farmasesi.com.br/estatico/sesi/images/produto/31524.jpg',
    categoria: { id: 2, nome: 'Vitaminas' }
  }
];

function Produtos() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">Produtos Disponíveis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {produtosMock.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={produto.foto}
              alt={produto.nome}
              className="w-full h-full object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-bold text-gray-800">{produto.nome}</h2>
              <p className="text-sm text-gray-500">{produto.categoria?.nome}</p>
              <span className="text-teal-600 font-semibold text-lg">R$ {produto.preco}</span>
              <button className="mt-2 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produtos;
