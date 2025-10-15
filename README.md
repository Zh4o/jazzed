# 🎺 jazzed

**The open-source, self-hostable platform for building powerful data enrichment and automation workflows.**

Think of Jazzed as an open-source, extensible alternative to [Clay](https://clay.com/), built with a modern, developer-friendly architecture inspired by [n8n](https://n8n.io/). Orchestrate enrichment APIs and automate the tedious parts of GTM engineering, without paying the middle-man tax.

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/jazzed/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/jazzed/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---
![Placeholder screenshot of the Jazzed table builder interface, showing columns like "Get LinkedIn Profile" connected to "Enrich with PDL" and "Find Tech Stack"](https://via.placeholder.com/800x450.png?text=Jazzed+Workflow+Builder+UI)

## ✨ Core Features

*   **Visual Workflow Builder**: Intuitively chain together data sources and actions with a simple, step-by-step, table or node-based interface.
*   **Extensible Integration System**: Easily add new data sources and APIs. Every integration is a simple module, allowing you or the community to add new capabilities without touching the core code.
*   **Self-Hostable & Open-Source**: Run Jazzed on your own infrastructure with a single Docker command. You own your data, you control your costs.
*   **Scalable & Performant**: Built on a modern, asynchronous, polygot architecture using a job queue and dedicated workers to handle heavy-lifting without slowing you down.
*   **Secure Credential Management**: Safely store and use your API keys for various services, encrypted at rest.

## 🚀 Quick Start: Run locally with Docker

Get a full local instance of Jazzed running in under 5 minutes.

### Prerequisites

*   [Git](https://git-scm.com/)
*   [Docker](https://www.docker.com/get-started) & [Docker Compose](https://docs.docker.com/compose/install/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/jazzed.git
    cd jazzed
    ```
2.  **Set up environment variables:**
    (We'll add a `.env.example` soon. For now, no action is needed for the default setup.)

3.  **Launch the application:**
    ```bash
    docker-compose up -d
    ```

That's it! The application stack (Frontend, API, Worker, PostgreSQL, Redis) is now running.

*   **Frontend UI**: [http://localhost:3000](http://localhost:3000)
*   **Backend API**: [http://localhost:8000](http://localhost:8000)

## 🏗️ Architecture Overview

Jazzed is a polyglot (multi-language) distributed system designed for scalability and resilience. We use the best tool for the job: TypeScript for the frontend and Python for data-intensive backend services. For local development, all components are orchestrated via `docker-compose.yml`.

*   **`ui` (Frontend)**: A Next.js/React app where users build workflows and view results. Written in TypeScript.
*   **`api` (Backend)**:  A Python (FastAPI) API that manages users, workflows, validates data, and delegates tasks to the worker. It serves as the single source of truth for the frontend.
*   **`worker` (Worker)**: A dedicated Python process that listens for jobs and executes the core data enrichment and integration logic (e.g., web scraping, external API calls).
*   **`PostgreSQL` (Database)**: The primary data store for users, workflows, results, and encrypted credentials.
*   **`Redis` (Job Queue)**: A message broker that decouples the API from the Workers, ensuring a fast and responsive user experience. It may also be used for caching.

## 🤝 Contributing

We are building Jazzed in the open and welcome contributions of all kinds! Whether you're a developer, a designer, or just an enthusiast, we'd love for you to get involved.

Check out our **[CONTRIBUTING.md](CONTRIBUTING.md)** guide to learn more about how you can help.

## 🗺️ Roadmap

We're just getting started! Here's a glimpse of what we're planning:

*   [ ] More core integrations (Clearbit, Hunter, BuiltWith, etc.)
*   [ ] Webhook and Cron Job triggers for workflows
*   [ ] Team collaboration and workspace features
*   [ ] Full documentation site
*   [ ] A paid, managed cloud offering for those who don't want to self-host

## 📄 License

Jazzed is open-source software licensed under the **[MIT license](LICENSE)**.