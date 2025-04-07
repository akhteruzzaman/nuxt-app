# Nuxt Docker Starter

## Docker Setup

### Build Docker Image

To build the Docker image for production and development

```bash
docker-compose build
```

### To run both dev and prod

```bash
docker-compose up
```

### Run Development Server

To run the development server (port 3000):

```bash
docker-compose up fdr-development
```

### Run Production Server

To run the production server (port 3001):

```bash
docker-compose up fdr-production
```

> **Note:** To run the latest production server, you must first build the system using the `docker build` command.

### Run the system locally (not recommended)

```bash
yarn install
yarn dev
```

> **Note:** Please use yarn
