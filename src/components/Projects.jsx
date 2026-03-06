export default function Projects() {
  return (
    <section className="section" id="projects">

      <div className="container">
        <h2>Projetos</h2>

        <div className="card">
          <h3>Sistema de Reserva de Salas de Estudo</h3>
          <p>
            Projeto acadêmico desenvolvido durante o curso técnico em Informática para Internet no IFRN,
            com o objetivo de resolver a dificuldade de reservar salas de estudo dentro da instituição.
            O projeto buscou digitalizar o processo de solicitação e gestão de reservas entre alunos e gestores.
          </p>

          <ul>
            <li>Levantamento de requisitos e regras de negócio</li>
            <li>Estruturação de API REST para gerenciamento de reservas</li>
            <li>Modelagem e integração com banco de dados em nuvem</li>
            <li>Testes de requisições utilizando Postman</li>
            <li>Protótipo navegável mobile desenvolvido no Figma</li>
          </ul>

          <strong>Tecnologias utilizadas:</strong>
          <p>Figma | API REST | Banco de Dados em Nuvem | Postman</p>

          <p>
            <a href="https://www.figma.com/design/szbWXFWyHcNa8uOQW4PeGQ/Master-File---Troubleshooter-Salas-de-estudo?node-id=0-1&t=LKjMGevklXfoLYHR-1" target="_blank">Ver Protótipo</a>
          </p>
        </div>

        <div className="card">
          <h3>Sistema de Cadastro de Projetos Integradores (TCC)</h3>
          <p>
            Trabalho de Conclusão de Curso desenvolvido para evoluir o processo de cadastro e gestão
            de Projetos Integradores para o meio digital. O sistema permite o envio e gerenciamento
            de dados através de requisições seguras entre frontend e backend.
          </p>

          <ul>
            <li>Modelagem do sistema com diagrama de classes e casos de uso</li>
            <li>Implementação de operações CRUD via API REST</li>
            <li>Autenticação e proteção de rotas utilizando JSON Web Token</li>
            <li>Testes de requisições utilizando Postman</li>
            <li>Interface web para interação com o sistema</li>
          </ul>

          <strong>Tecnologias utilizadas:</strong>
          <p>JavaScript | Node.js | React | API REST | SQL | JSON Web Token | Postman</p>

          <p>
            Código não publicado
          </p>
        </div>

        <div className="card">
          <h3>Finance Dashboard</h3>
          <p>
            Sistema web de controle financeiro Full Stack que permite registrar receitas,
            despesas e metas financeiras. O sistema realiza cálculos automáticos de saldo
            e apresenta os dados em um dashboard interativo.
          </p>

          <ul>
            <li>Interface responsiva desenvolvida em React</li>
            <li>API REST para gerenciamento de dados financeiros</li>
            <li>Integração com banco de dados PostgreSQL em nuvem</li>
            <li>Deploy do backend e frontend em ambiente cloud</li>
            <li>Organização de dados e visualização em dashboard</li>
          </ul>

          <strong>Tecnologias utilizadas:</strong>
          <p>React | Node.js | API REST | PostgreSQL (Neon) | Tailwind CSS | Render</p>

          <p>
            <a href="https://finance-dashboard-lovat-six.vercel.app/" target="_blank">Ver Sistema</a> |{" "}
            <a href="https://github.com/gabriel-lima55/finance-dashboard" target="_blank">Ver Código</a>
          </p>
        </div>

      </div>
    </section>
  );
}