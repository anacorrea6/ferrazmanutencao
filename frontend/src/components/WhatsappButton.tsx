'use client';

import { useState } from 'react';

export default function WhatsAppForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    assunto: '',
    mensagem: '',
  });

  // Atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Monta a mensagem e redireciona para o WhatsApp
  const enviarParaWhatsApp = (e) => {
    e.preventDefault();

    // Substitua pelo número que vai receber a mensagem (com DDI e DDD)
    const numeroWhatsApp = '5511969390437'; 

    // Organizando a mensagem com quebras de linha e negrito (*)
    const textoMensagem = `*Novo Contato pelo Site* 🚀\n\n*Nome:* ${formData.nome}\n*Assunto:* ${formData.assunto}\n*Mensagem:* ${formData.mensagem}`;

    // Codificando o texto para formato de URL (transforma espaços e quebras de linha)
    const textoCodificado = encodeURIComponent(textoMensagem);

    // Cria o link final e abre em uma nova aba
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;
    window.open(url, '_blank');
    
    // Opcional: fechar o formulário após enviar
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Botão para abrir o formulário */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        Falar no WhatsApp
      </button>

      {/* Overlay escuro de fundo (fecha o form se clicar fora) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Formulário Lateral (Ocupa 40% da tela no desktop e 100% no mobile) */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out w-full md:w-[40%] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Envie sua mensagem</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          <form onSubmit={enviarParaWhatsApp} className="flex flex-col gap-4 flex-1">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
              <input
                type="text"
                name="assunto"
                required
                value={formData.assunto}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Ex: Orçamento"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                name="mensagem"
                required
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none resize-none"
                placeholder="Como podemos te ajudar?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition mt-auto"
            >
              Enviar para o WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}