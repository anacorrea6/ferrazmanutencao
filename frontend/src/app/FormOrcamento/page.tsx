'use client';

import React, { useState } from "react";

export default function FormOrcamento() {
  const [formData, setFormData] = useState({
    empresa: "",
    cep: "",
    restricaoHorario: "",
    tipoManutencao: "",
    equipamento: "",
    descricaoProblema: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const numeroWhatsApp = "5511969390437";

    const mensagem = ` 🛠️ *NOVO PEDIDO DE ORÇAMENTO* 🛠️

*📋 DADOS DO CLIENTE*
• *Empresa:* ${formData.empresa}
• *CEP:* ${formData.cep}
• *Restrição Horário:* ${formData.restricaoHorario}
• *Tipo Manutenção:* ${formData.tipoManutencao}
• *Tipo Equipamento:* ${formData.equipamento}
• *Problema:* ${formData.descricaoProblema}`;

    const textoCodificado = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-sm">
        
        {/* Cabeçalho */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-4 w-1 bg-amber-500 rounded-full inline-block"></span>
            <span className="text-xs font-bold tracking-widest text-amber-500 uppercase">
              Atendimento Técnico
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
            Solicitar <span className="text-amber-500">Orçamento</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Preencha os dados abaixo para direcionarmos o seu atendimento diretamente no WhatsApp.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={enviarParaWhatsApp} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Empresa */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="empresa" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                placeholder="Nome da empresa"
                value={formData.empresa}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
              />
            </div>

            {/* CEP */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cep" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                CEP
              </label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                value={formData.cep}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
              />
            </div>

            {/* Restrição de Horário */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="restricaoHorario" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Restrições de Horário
              </label>
              <input
                type="text"
                id="restricaoHorario"
                name="restricaoHorario"
                placeholder="Ex: Comercial, Turno Noturno"
                value={formData.restricaoHorario}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
              />
            </div>

            {/* Tipo de Manutenção */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="tipoManutencao" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                Tipo de Manutenção
              </label>
              <input
                type="text"
                id="tipoManutencao"
                name="tipoManutencao"
                placeholder="Ex: Preventiva, Corretiva"
                value={formData.tipoManutencao}
                onChange={handleChange}
                required
                className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Tipo de Equipamento */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="equipamento" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Tipo de Equipamento
            </label>
            <input
              type="text"
              id="equipamento"
              name="equipamento"
              placeholder="Ex: Compressores, Painéis Elétricos, Injetoras"
              value={formData.equipamento}
              onChange={handleChange}
              required
              className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
            />
          </div>

          {/* Descrição do Problema */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="descricaoProblema" className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
              Descrição do Problema
            </label>
            <textarea
              id="descricaoProblema"
              name="descricaoProblema"
              rows={4}
              placeholder="Descreva o que está acontecendo, sintomas, defeitos, etc."
              value={formData.descricaoProblema}
              onChange={handleChange}
              required
              className="w-full bg-zinc-800/80 border border-zinc-700/80 rounded-lg px-4 py-3 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200 resize-none"
            />
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="w-full mt-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold py-4 px-6 rounded-lg uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>Enviar para o WhatsApp</span>
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 2c-5.517 0-9.997 4.48-9.997 9.998 0 2.149.68 4.138 1.83 5.772L2 22l4.372-1.815a9.946 9.946 0 005.659 1.813h.005c5.517 0 9.997-4.48 9.997-9.998 0-2.67-1.04-5.18-2.93-7.07B17.15 17.15 0 0012.031 2zm5.8 14.155c-.24.675-1.401 1.29-1.936 1.341-.535.052-1.229.237-3.992-.904-3.344-1.381-5.495-4.796-5.663-5.02-.167-.225-1.365-1.817-1.365-3.468 0-1.65 0.865-2.463 1.171-2.798.307-.335.67-.42.894-.42.224 0 .447.002.643.01.21.008.49-.08.766.58.278.66.948 2.311 1.031 2.48.084.168.14.364.028.587-.112.224-.168.363-.335.56-.168.196-.355.438-.508.588-.168.168-.343.35-.147.685.196.336.87 1.436 1.868 2.325 1.283 1.142 2.365 1.498 2.7 1.638.336.14.532.112.728-.112.196-.224.84-0.978 1.063-1.314.224-.335.448-.28.755-.168.308.112 1.956.922 2.29 1.09.336.168.56.252.643.392.084.14.084.811-.156 1.486z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}