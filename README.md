# 🎺 jazzed

**The open-source, self-hostable platform for building powerful data enrichment and automation workflows.**

Think of Jazzed as an open-source, extensible alternative to [Clay](https://clay.com/), built with a modern, developer-friendly architecture inspired by [n8n](https://n8n.io/). Chain together APIs, enrich data, and automate the tedious parts of your work, all while maintaining full control over your data and infrastructure.

[![Build Status](https://img.shields.io/github/actions/workflow/status/your-username/jazzed/ci.yml?branch=main&style=flat-square)](https://github.com/your-username/jazzed/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Join our Discord](https://img.shields.io/discord/your-discord-id?color=7289DA&label=discord&logo=discord&logoColor=white&style=flat-square)](https://discord.gg/your-invite-link)
[![Follow on Twitter](https://img.shields.io/twitter/follow/your-twitter-handle?style=social&logo=twitter)](https://twitter.com/your-twitter-handle)

---

![Screenshot of the Jazzed workflow builder interface, showing nodes like "Get LinkedIn Profile" connected to "Enrich with PDL" and "Find Tech Stack", with a results table below.](https://via.placeholder.com/800x450.png?text=Jazzed+Workflow+Builder+UI)

## ✨ Core Features

*   **Visual Workflow Builder**: Intuitively chain together data sources and actions with a simple, step-by-step or node-based interface.
*   **Extensible Integration System**: Easily add new data sources and APIs. Every integration is a simple module, allowing you or the community to add new capabilities without touching the core code.
*   **Self-Hostable & Open-Source**: Run Jazzed on your own infrastructure with a single Docker command. You own your data, you control your costs.
*   **Scalable & Performant**: Built on a modern, asynchronous architecture using a job queue and dedicated workers to handle heavy-lifting without slowing you down.
*   **Secure Credential Management**: Safely store and use your API keys for various services, encrypted at rest.
*   **Spreadsheet-Style Results**: View, sort, and manage the data from your workflow runs in a familiar table interface.

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

Jazzed is a distributed system designed for scalability and resilience. For local development, all components are neatly packaged in our `docker-compose.yml`.

*   **`ui` (Frontend)**: A Next.js/React app where users build workflows and view results.
*   **`api` (Backend)**: A Node.js (NestJS) API that manages users, workflows, and delegates tasks.
*   **`worker` (Worker)**: A dedicated Node.js process that listens for jobs and executes the core logic (e.g., making external API calls).
*   **`PostgreSQL` (Database)**: The primary data store for users, workflows, results, and encrypted credentials.
*   **`Redis` (Job Queue)**: A message broker that decouples the API from the Workers, ensuring a fast and responsive user experience.

## 🧩 Building Your First Integration

One of Jazzed's most powerful features is its pluggable integration system. Want to add a new data source? Just create a new folder in the `integrations/` directory.

Each integration is a self-contained module. For example, to add a "People Data Labs" integration:

**Directory Structure:**
```
integrations/
└── pdl/
    ├── metadata.json
    ├── run.ts
    └── logo.svg
```

*   **`metadata.json`**: Defines the integration's name, description, and the actions it can perform.
    ```json
    {
      "name": "People Data Labs",
      "description": "Enrich person and company data.",
      "actions": [
        {
          "id": "enrichPerson",
          "name": "Enrich Person by Profile",
          "description": "Takes a LinkedIn URL and returns enriched data."
        }
      ]
    }
    ```

*   **`run.ts`**: Contains the TypeScript/JavaScript logic to execute the action.
    ```typescript
    // A simplified example of what the run function might look like
    export async function enrichPerson(credentials: { apiKey: string }, inputs: { profileUrl: string }) {
      const { apiKey } = credentials;
      const { profileUrl } = inputs;

      const response = await fetch(`https://api.pdl.com/v5/person/enrich?api_key=${apiKey}&profile_url=${profileUrl}`);
      const data = await response.json();

      return data;
    }
    ```

The core application dynamically loads all modules from the `integrations/` directory on startup.

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