# Analytical Dashboard

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Code Quality & Linting](#code-quality--linting)
- [Storybook](#storybook)
- [Deployment](#deployment)

## Project Overview

The Analytical Dashboard is a responsive web application built using Next.js (App Router). It provides key insights and visualizations of provided data through interactive charts and metrics. The dashboard features a responsive layout with a sidebar, navigation, and main content displaying charts and analytics.

## Tech Stack

- **Next.js (App Router)**: For server-side rendering, static generation, and optimized performance.
- **TypeScript**: Provides type safety, enhancing code maintainability and reducing runtime errors.
- **Ant Design**: A powerful UI library for consistent and professional-looking components.
- **Jest & React Testing Library**: Ensures unit and integration tests for reliable code.
- **Husky**: Enforces pre-commit hooks for linting and formatting to maintain code quality.
- **ESLint & Prettier**: Ensures consistent code formatting and enforces coding standards.
- **Storybook**: For developing, testing, and showcasing UI components in isolation.
- **Atomic Design Pattern**: Helps structure UI components in a scalable and reusable way.

## Architecture & Design Decisions

### **1. Next.js (App Router)**

Next.js was chosen for its powerful server-side rendering (SSR) capabilities, static site generation (SSG), and improved performance. The app router simplifies data fetching and page structuring.

### **2. TypeScript**

TypeScript enhances development with static typing, reducing runtime errors and improving code readability.

### **3. Ant Design**

Ant Design was used for a professional, consistent UI, with built-in components for better UX and rapid development.

### **4. Atomic Design Pattern**

The project follows the Atomic Design pattern, breaking down UI components into **Atoms, Molecules, Organisms, Templates, and Pages** for better reusability and maintainability.

### **5. State Management**

The application uses the Context API for lightweight state management, ensuring efficient data flow and updates without unnecessary complexity.

### **6. Testing with Jest & React Testing Library**

Jest and React Testing Library ensure test coverage for key components, improving reliability.

### **7. Storybook**

Storybook allows isolated UI component development and documentation, ensuring consistency in design implementation.

### **8. Code Quality Tools**

Husky, ESLint, and Prettier enforce coding standards, maintaining consistency and preventing errors.

## Setup Instructions

### **Prerequisites**

Ensure you have the following installed:

- **Node.js (LTS version recommended)**
- **npm or yarn**
- **Git**

### **Installation Steps**

1. Clone the repository:
   ```sh
   git clone https://github.com/mwakazi-dev/analytical-dashboard.git
   cd analytical-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   - Create a `.env.local` file at the root of the project.
   - Add the necessary environment variables (example in `.env.example`).

## Running the Project

### **Development Mode**

```sh
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### **Production Build**

```sh
npm run build
npm start
# or
yarn build
yarn start
```

## Testing

Run tests with Jest and React Testing Library:

```sh
npm run test
# or
yarn test
```

## Code Quality & Linting

Lint and format the code before committing changes:

```sh
npm run lint
npm run format
# or
yarn lint
yarn format
```

## Storybook

To view and test UI components in isolation:

```sh
npm run storybook
# or
yarn storybook
```

It will be available at `http://localhost:6006`.

## Deployment

The project can be deployed to Vercel, Netlify, or any hosting provider supporting Next.js:

```sh
npm run build
# Deploy using Vercel CLI
vercel deploy
```
