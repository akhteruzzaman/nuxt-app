# Nuxt Docker Starter

## Docker Setup

### Build Docker Image

To build the Docker image for production and development

```bash
docker-compose build
```

To run both production and development

```bash
docker-compose up
```

### Install packages locally

```bash
yarn install
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

## Linting Rules

This project uses ESLint and Prettier for linting and code formatting. Below are the key linting rules and configurations:

### ESLint

- **Enforces Code Quality:** Ensures consistent code quality and catches potential errors.
- **Key Rules:**
  - No unused variables (`no-unused-vars`).
  - Consistent use of semicolons (`semi`).
  - Enforces single quotes for strings (`quotes`).
  - Disallows `console.log` in production (`no-console`).

#### Vue-Specific Rules

- **Template Rules:**
  - Enforces self-closing tags in templates where possible (`vue/html-self-closing`).
  - Requires consistent spacing in template attributes (`vue/attribute-hyphenation`).
- **Script Rules:**
  - Enforces PascalCase for component names (`vue/component-name-in-template-casing`).
  - Disallows unused components (`vue/no-unused-components`).
  - Requires `prop` definitions to have a type (`vue/require-prop-types`).

### Prettier

- **Code Formatting:** Automatically formats code to maintain consistency.
- **Key Rules:**
  - Line width: 80 characters.
  - Use of single quotes.
  - Trailing commas where valid in ES5 (`es5`).
  - Tabs for indentation.

### Running Linting

To check for linting errors, run:

```bash
yarn lint
```

To automatically fix linting issues, run:

```bash
yarn lint --fix
```

> **Note:** Ensure that linting is run before committing code to maintain code quality.

### Writing `.vue` Files

When creating `.vue` files, follow this sequence for better readability and maintainability:

1. **`<script>` Section**:

   - Place the `<script>` section at the top.
   - Use the `setup` syntax if applicable.
   - Must define lang="ts"
   - Define all logic, imports, and reactive data here.

2. **`<template>` Section**:

   - Place the `<template>` section after the `<script>` section.
   - Use clean and semantic HTML.
   - Ensure proper indentation and self-closing tags where applicable.

3. **`<style>` Section**:
   - Place the `<style>` section at the bottom.
   - Use scoped styles (`<style scoped>`) to avoid global CSS conflicts.
   - Follow the project's CSS conventions (e.g., BEM, Tailwind, etc.).

### Example `.vue` File

```vue
<script setup lang="ts">
// your code here
</script>

<template>
  <div class="example-component">
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.example-component {
  color: blue;
}
</style>
```

> **Note:** Always maintain this sequence to ensure consistency across the project.
