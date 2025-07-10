function Contato() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-50 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-6">Fale Conosco</h1>

      <form className="flex flex-col gap-6 w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome" className="text-sm font-semibold text-gray-700">Nome</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@exemplo.com"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="mensagem" className="text-sm font-semibold text-gray-700">Mensagem</label>
          <textarea
            id="mensagem"
            placeholder="Digite sua mensagem..."
            className="p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded transition-colors"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}

export default Contato;
