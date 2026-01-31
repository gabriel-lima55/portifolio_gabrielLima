import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <section className="max-w-2xl w-full bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Gabriel Everton Alves de Lima
        </h1>

        <p className="text-gray-600 mb-4">
          Graduando em Engenharia de Produção (UFRN) · Técnico em Informática para Internet (IFRN)
        </p>

        <p className="text-gray-700 mb-6">
          Portfólio em desenvolvimento. Este espaço está sendo organizado para
          disponibilização dos meus projetos acadêmicos em desenvolvimento web
          e programação.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Projeto em destaque
          </h2>

          <p className="text-gray-700">
            <strong>Sistema de Reserva de Salas de Estudo</strong><br />
            Projeto acadêmico desenvolvido como MVP, com front-end em React e
            back-end em Node.js, utilizando API REST, operações de CRUD testadas
            via Postman e contato acadêmico com ambiente de nuvem (Azure
            Workbench).
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/gabriel-lima55"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
