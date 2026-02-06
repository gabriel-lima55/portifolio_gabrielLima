export default function Projects() {
  return (
    <section className="section" id="projects">

      <div className="container">
      <h2>Projetos</h2>

        <div className="card">
          <h3>Sistema de Reserva de Salas de Estudo</h3>
          <p>
            Projeto acadêmico desenvolvido com foco no backend para gerenciamento de reservas de salas de estudo.
          </p>

          <ul>
            <li>Cadastro e processamento de reservas</li>
            <li>Banco de dados relacional em nuvem (Azure SQL Database)</li>
            <li>Estruturação de API REST</li>
            <li>Testes de requisições utilizando Postman</li>
            <li>Aplicação sem interface gráfica, com foco em regras de negócio e serviços</li>
          </ul>
          <strong>Tecnologias utilizadas:</strong>
          <p>Node.js | API REST | Postman | Microsoft Azure</p>
        </div>

        <div className="card">
          <h3>Sistema de cadastro de Projetos Integradores "TCC"</h3>
          <p>
            Trabalho de Conclusão de Curso, desenvolvido em backend e frontend, para solicitação de operações de gestão de Projetos Integradores com dados protegidos.
          </p>

          <ul>
            <li>Interface web interativa</li>
            <li>Comunicação com serviços backend via requisições HTTP</li>
            <li>Autenticação com tokens</li>
            <li>Testes e validações utilizando Postman</li>
            <li>Estrutura preparada para integração com banco de dados</li>
          </ul>

          <strong>Tecnologias:</strong>
          <p> Node.js | React | Postman</p>
        </div>
        
      </div>
    </section>
  );
}