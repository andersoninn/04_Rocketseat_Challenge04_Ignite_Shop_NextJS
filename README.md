# 📝 GitHub Blog - Desafio Final do Módulo 03 Rocketseat

Este repositório contém o **desafio final** do módulo 03 do curso React da Rocketseat, onde o objetivo foi criar uma plataforma de **Blog** consumindo a **API do GitHub**, utilizando **React + TypeScript**. O projeto foi desenvolvido seguindo um layout e briefing predefinidos, e a funcionalidade principal inclui um contador de visitas armazenado no **Mongo Atlas**. Utilizamos o **Next.js**, **SWR** e a **Fetch API** para consultas eficientes.

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização server-side e geração estática.
- **TypeScript**: Tipagem estática para maior segurança e escalabilidade no código.
- **MongoDB Atlas**: Banco de dados para armazenar o contador de visitas.
- **SWR**: Hook para busca de dados com cache e revalidação automática.
- **Fetch API**: Para consumo da API do GitHub e obter informações dos repositórios.
- **Styled-Components**: Para estilização da interface de forma modular e dinâmica.

## 🎨 Funcionalidades

- **Contador de visitas**: Cada visita ao blog é registrada no MongoDB Atlas, permitindo acompanhar a quantidade de acessos.
- **Exibição de repositórios GitHub**: Consome a API pública do GitHub para exibir os repositórios de um usuário específico.
- **Layout responsivo**: A interface é adaptada para diferentes tamanhos de tela, garantindo uma boa experiência de uso.
- **Consulta com SWR**: Utilização do SWR para consumir dados da API de forma eficiente, com cache e revalidação automática.
- **Página de posts**: Exibição de postagens com título, descrição e link para o repositório completo no GitHub.

## 🚀 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/andersoninn/Rocketseat_Challenge_03_GitHub_blog_NextJS.git
   
2. Instale as dependências:
   ```bash
   npm install

3. Inicie a aplicação:
   ```bash
   npm run dev
 
4. Abra o navegador e acesse:
   ```bash
   http://localhost:3000

## 📝 Lições Aprendidas
Utilização do Next.js para construção de páginas dinâmicas e estáticas.
Implementação do SWR para consumo eficiente de APIs com cache e revalidação.
Criação e manipulação de variáveis de ambiente para integrar com o MongoDB Atlas.
Exibição de dados do GitHub utilizando a Fetch API.
Construção de uma interface simples e responsiva com Styled-Components.

---

✨ **Vamos nos conectar!**  
Se você gostou do projeto ou quer trocar ideias, [me encontre no LinkedIn](https://www.linkedin.com/in/andersoninn/). 😊
