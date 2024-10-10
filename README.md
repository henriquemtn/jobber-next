# Frontend Jobber 🏢

[![My Skills](https://skillicons.dev/icons?i=ts,nextjs,postgres,react,tailwind)](https://skillicons.dev)

## 🌐 Select your Language

- [Português (BR)](#português-br) 🇧🇷
- [English](#english) 🇺🇸

---

## English

### 🚀 Project Overview

Frontend Jobber is a web application built using [Next.js 14](https://nextjs.org/), designed to streamline job management, task tracking, and report generation for teams. It leverages the latest features of Next.js and other modern libraries like React Query, Formik, and TailwindCSS to provide a responsive, user-friendly interface.

### 🛠️ Features

- User authentication with email and password
- Role-based access control (Customer, Staff, Admin)
- Task and job management with a real-time dashboard
- Dynamic form validation using Formik and Yup
- Full responsiveness with TailwindCSS
- API integration using React Query

### 🏗️ Tech Stack

- **Framework**: Next.js 14
- **UI Components**: TailwindCSS, Lucide Icons
- **Forms**: Formik + Yup
- **State Management**: React Query
- **Authentication**: Custom authentication system
- **Backend API**: Axios integration with Jobber Core ( Django API )

### 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/frontend-jobber.git
2. Install the dependencies:
   ```bash
   npm install
3. Create an **.env.local** file and set the environment variables:

   ```bash
   NEXT_PUBLIC_API_URL=<your_api_url>
   NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN=false

4. Run the development server:
   ```bash
   npm run dev

5. Now open http://localhost:3000 to view it in the browser.

### 📂 Project Structure

   ```bash
   frontend-jobber/
   ├── app/           # App with pages and layouts
   ├── components/    # Reusable UI components
   ├── contexts/      # Context API for managing global state
   ├── hooks/         # Custom hooks (e.g., authentication)
   ├── pages/         # Next.js pages (routing)
   ├── services/      # API services
   ├── styles/        # Global styles and TailwindCSS config
   └── utils/         # Utility functions
   ```

---

## Português (BR)

### 🚀 Visão Geral do Projeto

Jobber Frontend é uma aplicação web desenvolvida usando Next.js 14, projetada para otimizar o gerenciamento de trabalhos, rastreamento de tarefas e geração de relatórios para equipes. Ele utiliza os recursos mais recentes do Next.js e outras bibliotecas modernas, como React Query, Formik e TailwindCSS, para fornecer uma interface responsiva e fácil de usar.

### 🛠️ Funcionalidades

- Autenticação de usuários com e-mail e senha
- Controle de acesso baseado em função (Cliente, Funcionário, Administrador)
- Gerenciamento de tarefas e trabalhos com um dashboard em tempo real
- Validação dinâmica de formulários usando Formik e Yup
- Totalmente responsivo com TailwindCSS
- Integração com API usando React Query

### 🏗️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **UI Components**: TailwindCSS, Lucide Icons
- **Formulários**: Formik + Yup
- **Gerenciamento de Estado**: React Query
- **Autenticação**: Sistema de autenticação personalizado
- **API Backend**: Integração com Jobber Core ( Django ) via Axios

### 🚀 How to Run the Project

1. Clone o repositório:
   ```bash
   git clone https://github.com/yourusername/frontend-jobber.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo **.env.local** e defina as variáveis de ambiente::

   ```bash
   NEXT_PUBLIC_API_URL=<your_api_url>
   NEXT_PUBLIC_ENABLE_SOCIAL_LOGIN=false
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra http://localhost:3000 no navegador para visualizar o projeto.

### 📂 Estrutura do Projeto

   ```bash
   frontend-jobber/
   ├── app/           # App with pages and layouts
   ├── components/    # Reusable UI components
   ├── contexts/      # Context API for managing global state
   ├── hooks/         # Custom hooks (e.g., authentication)
   ├── pages/         # Next.js pages (routing)
   ├── services/      # API services
   ├── styles/        # Global styles and TailwindCSS config
   └── utils/         # Utility functions
```
