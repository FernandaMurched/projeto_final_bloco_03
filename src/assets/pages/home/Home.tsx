function Home() {
    return (
        <>
            <div className="bg-teal-100 flex justify-center">
                <div className='container grid grid-cols-2 text-gray-800'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4 text-center">
                        <h2 className='text-5xl font-bold'>
                            Boas-vindas
                        </h2>
                        <p className='text-xl'>
                            Cuidando da sua saúde com atenção, qualidade e carinho.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-teal-700 border-teal-700 border-solid border-2 py-2 px-4 cursor-pointer hover:bg-teal-200 hover:text-gray-800 transition'>
                                Ver Produtos
                            </div>
                            <div className='rounded text-teal-700 border-teal-700 border-solid border-2 py-2 px-4 cursor-pointer hover:bg-teal-200 hover:text-gray-800 transition'>
                                Fale Conosco
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/txvje9hzw/farmaceutico-minusculo-com-pilulas-e-vitaminas-ilustracao-vetorial-plana-medicos-prescrevendo-antibioticos-trabalhando-juntos-ajudando-pacientes-a-se-curarem-negocio-de-farmacia-conceito-de-farmacia.png?updatedAt=1751462182138"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
