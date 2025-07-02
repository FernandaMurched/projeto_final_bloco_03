import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="bg-teal-100 flex justify-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 text-gray-800 items-center">
          <div className="flex flex-col gap-4 items-center justify-center py-8 px-4 text-center">
            <h2 className="text-5xl font-bold">Boas-vindas</h2>
            <p className="text-xl">
              Cuidando da sua saúde com atenção, qualidade e carinho.
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <Link to="/produtos">
                <div className="rounded text-teal-700 border-teal-700 border-solid border-2 py-2 px-4 cursor-pointer hover:bg-teal-200 hover:text-gray-800 transition text-center w-40">
                  Ver Produtos
                </div>
              </Link>

              <Link to="/contato">
                <div className="rounded text-teal-700 border-teal-700 border-solid border-2 py-2 px-4 cursor-pointer hover:bg-teal-200 hover:text-gray-800 transition text-center w-40">
                  Fale Conosco
                </div>
              </Link>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <img
              src="https://ik.imagekit.io/txvje9hzw/farmaceutico-minusculo-com-pilulas-e-vitaminas-ilustracao-vetorial-plana-medicos-prescrevendo-antibioticos-trabalhando-juntos-ajudando-pacientes-a-se-curarem-negocio-de-farmacia-conceito-de-farmacia.png?updatedAt=1751462182138"
              alt="Imagem Página Home"
              className="w-2/3 max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
