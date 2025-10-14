<!-- Note: You can replace the h1 tag with your actual logo once you have one. -->

<!-- <p align="center"><img src="link_to_your_logo.svg" width="200"></p> -->

<h1 align="center">Jazzed</h1>

<p align="center">
<strong>Build, automate, and scale complex data workflows with ease.</strong>
</p>

<p align="center">
<img alt="Project Status" src="https://www.google.com/search?q=https://img.shields.io/badge/status-pre--alpha-red%3Fstyle%3Dfor-the-badge">
<img alt="License" src="https://www.google.com/search?q=https://img.shields.io/badge/license-MIT-blue%3Fstyle%3Dfor-the-badge">
<img alt="Contributions Welcome" src="https://www.google.com/search?q=https://img.shields.io/badge/contributions-welcome-brightgreen%3Fstyle%3Dfor-the-badge">
</p>

Jazzed is an open-source, self-hostable workflow automation platform designed for developers and data teams. It provides the tools to visually connect different APIs and services, manipulate data, and trigger complex chains of actions, putting you in complete control of your data and infrastructure.

Inspired by amazing tools like n8n and Clay, Jazzed aims to provide a powerful, pluggable, and transparent alternative for building internal tools and data enrichment pipelines.
✨ Core Features

    Visual Workflow Builder: A modern, node-based editor to visually map out complex logic without getting lost in boilerplate code.

    🔌 Pluggable Integration System: Easily add new data sources or private APIs. Each integration is a simple module, making the system endlessly extensible.

    🚀 Real-time Execution & Debugging: Watch your workflows run step-by-step and inspect the data at every stage, making debugging intuitive and fast.

    🐳 Self-Host with One Command: All services are packaged with Docker for a simple, one-command setup on your own infrastructure.

    🔒 Secure Credential Management: Securely store and manage your API keys and secrets.

    👥 Built for Teams: (Coming Soon) Collaboration features, shared workflows, and access controls.

⚠️ Project Status: Pre-Alpha

Jazzed is currently under heavy development and is in a pre-alpha state. It is not yet ready for production use. We welcome early contributors who are excited to shape the future of the project!
🚀 Getting Started (Local Development)

Follow these instructions to get the Jazzed development environment up and running on your local machine.
Prerequisites

    Node.js (v18 or later)

    pnpm (v8 or later)

    Docker and Docker Compose

1. Clone the Repository

git clone [https://github.com/your-username/jazzed.git](https://github.com/your-username/jazzed.git)
cd jazzed

2. Install Dependencies

This project is a monorepo using pnpm workspaces. Install all dependencies from the root directory.

pnpm install

3. Configure Environment Variables

Create a local environment file by copying the example.

cp .env.example .env.local

Now, open .env.local and fill in the required variables. The initial file will have sane defaults for local development that match the docker-compose.yml file.
4. Start Dependent Services

Jazzed requires PostgreSQL and Redis to run. We've included a docker-compose.yml file to make this easy.

docker-compose up -d

This will start the databases in the background.
5. Run the Development Servers

Start all the applications (UI, API, Worker) in development mode using Turborepo.

pnpm dev

You're all set!

    The UI will be running at http://localhost:3000

    The Backend API will be running at http://localhost:3001

🛠️ Technology Stack

    Monorepo: Turborepo & pnpm

    Frontend: Next.js (React) & TypeScript

    Backend: NestJS (Node.js)

    Database: PostgreSQL

    Job Queue: Redis

    Containerization: Docker

📁 Repository Structure

This repository is a monorepo containing the entire Jazzed platform.

jazzed/
├── integrations/     # Pluggable connectors for external APIs
└── packages/         # Internal applications and shared libraries
    ├── api/          # The NestJS backend API and workflow engine
    ├── core/         # Shared code (types, utils) used across packages
    ├── ui/           # The Next.js frontend application
    └── worker/       # The asynchronous job worker

🤝 Contributing

We are excited to build a community of contributors! Whether you want to fix a bug, add a new integration, or improve the documentation, your help is welcome.

Please see our CONTRIBUTING.md guide to get started. (Note: This file will be created soon).
📄 License

Jazzed is open-source and licensed under the MIT License.
