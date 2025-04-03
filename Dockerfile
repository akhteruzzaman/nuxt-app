# Use an official Node.js image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose the port Nuxt runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "preview"]
