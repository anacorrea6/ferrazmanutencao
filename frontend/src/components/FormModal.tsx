'use client'

import React from 'react'

export default function FormModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <aside 
        className="drawer" 
        onClick={(e) => e.stopPropagation()} // Impede de fechar ao clicar dentro do formulário
      >
        <div className="drawer__header">
          <h2>Solicitar Orçamento</h2>
          <button className="drawer__close" onClick={onClose} aria-label="Fechar">
            &times;
          </button>
        </div>

        <div className="drawer__body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="nome da empresa" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="seu@email.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Detalhes do Projeto</label>
              <textarea id="mensagem" rows={4} placeholder="Conte mais sobre o que precisa..."></textarea>
            </div>

            <button type="submit" className="btn btn--primary btn--full">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </aside>
    </div>
  )
}