# Jobber 🏢

Jobber is an application developed in [Django](https://www.djangoproject.com/) by Avanti with the goal of facilitating communication between the company and its clients, as well as providing efficient control over service requests and demands. The system allows Avanti’s clients to submit requests, track their progress, and receive real-time updates on the status of their projects and demands.

*Jobber is currently for the exclusive use of Avanti.*


[![My Skills](https://skillicons.dev/icons?i=django,py,aws,gcp,apple,postgres,firebase,heroku)](https://skillicons.dev)

## 🌐 Select your Language

- [English ( Default )](#english) 🇺🇸
- [Português (BR)](#português) 🇧🇷

---

## English

### 🛠️ Features

- Job, request, and demand management.
- Role-based access control (Dev and Admin)
- Task and job management with a real-time dashboard.
- Communication between clients and the responsible team.
- Generate and import jobs with a spreadsheet.

### 🏗️ Tech Stack

- **Framework**: Django
- **Database**: PostgreSQL
- **AWS**:  Used for file storage (AWS S3) and other cloud infrastructure services.
- **Authentication**: Google and Apple. 
- **Hosting**: Heroku

### 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/avanti/jobber-core.git
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```
4. Create a **postgreSQL database** in local and set the **URL in Enviroments**.
5. Install a backup of database from jobber-core in heroku.
   ```bash
      # 1. Login to Heroku to configure the CLI
      heroku login

      # 2. List all database backups for the production app ("jobber-core")
      heroku pg:backups --app jobber-core

      # 3. Download a specific backup using its ID (example: "b001")
      heroku pg:backups:download b001 --app jobber-core

      # 4. Restore the backup to your local PostgreSQL
   ```
6. Set up environment variable in **.env.example**.

7. You can create a **SUPERUSER** manually in PostgreSQL to get access to all application.

8. Apply migrations:
   ```bash
      python manage.py makemigrations
      python manage.py migrate
   ```

9. Run the development server:
   ```bash
      python manage.py runserver
   ```

### 📂 Project Structure

   ```bash
   jobber-core/
   ├── api/           
   ├── app/    
   ├── backend/      
   ├── community/         
   ├── core/         
   ├── notification/      
   ├── report_builder/  
   ├── report_builder_scheduled/      
   ├── static/
   ├── templates/   
   └── youtube/         
   ```

---

## Português 

### 🚀 Visão Geral do Projeto

O Jobber é uma aplicação desenvolvida em [Django](https://www.djangoproject.com/) pela Avanti com o objetivo de facilitar a comunicação entre a empresa e seus clientes, além de fornecer um controle eficiente sobre solicitações e demandas de serviços. O sistema permite que os clientes da Avanti enviem pedidos, acompanhem o progresso e recebam atualizações em tempo real sobre o status de seus projetos e demandas.

*No momento o Jobber é de uso exclusivo da Avanti.*

### 🛠️ Features

- Gestão de jobs, solicitações e demandas.
- Controle de acesso baseado em funções (Desenvolvedor e Administrador).
- Gerenciamento de tarefas e jobs com um painel em tempo real.
- Comunicação entre clientes e a equipe responsável.
- Gerar e importar Jobs com planilha.

### 🏗️ Tech Stack

- **Framework**: Django
- **Database**: PostgreSQL
- **AWS**: Utilizado par   a armazenamento de arquivos (AWS S3) e outros serviços de infraestrutura em nuvem.
- **Authentication**: Google and Apple. 
- **Hosting**: Heroku

### 🚀 Como rodar o projeto

1. Faça um clone do projeto:
   ```bash
   git clone https://github.com/avanti/jobber-core.git
   ```

2. Configure um ambiente virtual:
   ```bash
   python -m venv env
   source env/bin/activate
   ```

3. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```
4. Crie um **banco de dados postgreSQL** no local e defina a **URL em Ambientes**.
5. Instale um backup do banco de dados do jobber-core no heroku.
   ```bash
      # 1. 1. Faça login no Heroku para configurar a CLI
      heroku login

      # 2.  2. Liste todos os backups de banco de dados para o aplicativo de produção ("jobber-core")
      heroku pg:backups --app jobber-core

      # 3.  Baixe um backup específico usando seu ID (exemplo: "b001")
      heroku pg:backups:download b001 --app jobber-core

      # 4. Restaure o backup para seu PostgreSQL local
   ```
6. Configure a variável de ambiente em **.env.example**.

7. Você pode criar um **SUPERUSER** manualmente no PostgreSQL para obter acesso a todos os aplicativos.

8. Aplique as migrations:
   ```bash
      python manage.py makemigrations
      python manage.py migrate
   ```

9. Execute o servidor de desenvolvimento:
   ```bash
      python manage.py runserver
   ```

### 📂 Estrutura do Projeto

   ```bash
   jobber-core/
   ├── api/           
   ├── app/    
   ├── backend/      
   ├── community/         
   ├── core/         
   ├── notification/      
   ├── report_builder/  
   ├── report_builder_scheduled/      
   ├── static/
   ├── templates/   
   └── youtube/         
   ```

---
