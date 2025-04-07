# Stage 1: Build
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and optionally package-lock.json and yarn.lock to install dependencies
COPY package.json package-lock.json* yarn.lock* ./

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

# Install only production dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN yarn install --production

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the application in production mode
CMD ["node", "server/index.mjs"]

# Stage 3: Development (optional)
FROM node:20-alpine AS development

# Set the working directory
WORKDIR /app

# Copy package.json and optionally package-lock.json and yarn.lock to install dependencies
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the application in development mode
CMD ["yarn", "dev"]
