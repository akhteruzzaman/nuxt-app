# Stage 1: Build
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and optionally package-lock.json and yarn.lock to install dependencies
COPY package.json package-lock.json* yarn.lock* ./

# Copy the .env file
COPY .env ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the project
RUN yarn build

# Stage 2: Production
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/.output ./

# Copy the .env file
COPY .env ./

# Install only production dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --production

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the application in production mode
CMD ["node", "server/index.mjs"]

# Stage 4: Mock Server
FROM node:20-alpine AS mockserver

# Set the working directory
WORKDIR /app

# Install json-server for API mocking
RUN yarn global add json-server

# Copy package.json for any dependencies
COPY package.json ./

# Copy mock data directory or create it if needed
COPY ./mocks ./mocks

# Expose port for mock server
EXPOSE 3001

# Start the mock server
CMD ["json-server", "--watch", "./mocks/db.json", "--host", "0.0.0.0", "--port", "3001"]

# Stage 3: Development (optional)
FROM node:20-alpine AS development

# Set the working directory
WORKDIR /app

# Install bash
RUN apk add --no-cache bash

# Copy package.json and optionally package-lock.json and yarn.lock to install dependencies
COPY package.json package-lock.json* yarn.lock* ./

# Copy the .env file
COPY .env ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "dev"]
