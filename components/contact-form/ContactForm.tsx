"use client";

import { ContactFormProps } from "./types";

export function ContactForm({ products, color }: ContactFormProps) {
  return (
    <form className="max-w-3xl mx-auto space-y-5 pt-7">
      {/* NOME */}
      <div>
        <label
          htmlFor="name"
          className={`flex items-center justify-between text-sm text-${color} mb-2`}
        >
          Nome*
          <small className="text-xs text-gray">*obrigatório</small>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Digite seu nome completo"
          className={`w-full border border-light p-4 text-dark-gray focus:outline-none focus:ring-2 focus:ring-${color}`}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className={`flex items-center justify-between text-sm text-${color} mb-2`}
        >
          E-mail*
          <small className="text-xs text-gray">*obrigatório</small>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="email@email.com"
          className={`w-full border border-light p-4 text-dark-gray focus:outline-none focus:ring-2 focus:ring-${color}`}
        />
      </div>

      {/* TELEFONE */}
      <div>
        <label
          htmlFor="phone"
          className={`flex items-center justify-between text-sm text-${color} mb-2`}
        >
          Telefone*
          <small className="text-xs text-gray">*obrigatório</small>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          placeholder="+00 (00) 00000-0000"
          className={`w-full border border-light p-4 text-dark-gray focus:outline-none focus:ring-2 focus:ring-${color}`}
        />
      </div>

      {/* CPF */}
      <div>
        <label htmlFor="cpf" className={`block text-sm text-${color} mb-2`}>
          CPF
        </label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          inputMode="numeric"
          placeholder="000.000.000-00"
          className={`w-full border border-light p-4 text-dark-gray focus:outline-none focus:ring-2 focus:ring-${color}`}
        />
      </div>

      {/* EMPREENDIMENTO */}
      <div>
        <label htmlFor="project" className={`block text-sm text-${color} mb-2`}>
          Empreendimento
        </label>
        <select
          id="project"
          name="project"
          required
          className={`w-full border border-light p-4 text-dark-gray bg-white focus:outline-none focus:ring-2 focus:ring-${color}`}
          defaultValue=""
        >
          <option value="" disabled>
            Empreendimento de interesse
          </option>

          {products?.map((product) => (
            <option key={product.value} value={product.value}>
              {product.label}
            </option>
          ))}
        </select>
      </div>

      {/* POLÍTICA */}
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className={`h-[18px] w-[18px] accent-${color}`}
        />
        <label htmlFor="privacy" className="text-sm text-dark-gray">
          Concordo com a{" "}
          <a href="/politica-de-privacidade" className={`underline text-${color}`}>
            Política de Privacidade
          </a>
        </label>
      </div>

      {/* BOTÃO */}
      <button
        type="submit"
        className={`button bg-${color} text-white`}
      >
        Solicitar atendimento
      </button>
    </form>
  );
}
