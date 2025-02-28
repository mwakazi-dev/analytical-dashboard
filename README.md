# Analytical Dashboard

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Setup Instructions](#setup-instructions)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Code Quality & Linting](#code-quality--linting)
- [Storybook](#storybook)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

## Project Overview

The **Analytical Dashboard** is a responsive web application built using **Next.js (App Router)**. It provides interactive visualizations and insights from structured data using **charts, metrics, and filters**. The project follows the **Atomic Design Pattern** for UI structuring and adheres to the **Container-Presentation Design Pattern** for better component separation.

## Tech Stack

- **Next.js (App Router)**: Chosen because **React Create-React-App is deprecated** [(React Announcement)](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). It enables **server-side rendering (SSR), static generation (SSG), and API routes**.
- **TypeScript**: Provides static typing, reducing runtime errors and improving maintainability.
- **Ant Design**: Offers pre-built UI components for a clean and professional UI.
- **Jest & React Testing Library**: Ensures reliable code with unit and integration tests.
- **Husky**: Enforces pre-commit hooks for linting and formatting.
- **ESLint & Prettier**: Enforces coding standards and ensures consistent formatting.
- **Storybook**: Enables isolated development and testing of UI components.
- **Atomic Design Pattern**: Structures UI into **Atoms, Molecules, Organisms, Templates, and Pages** [(More on Atomic Design)](https://atomicdesign.bradfrost.com/chapter-2/).
- **Container-Presentation Design Pattern**: Separates business logic from UI components, making them reusable and easier to test.

## Folder Structure

The project follows a **modular folder structure**:

```
/analytical-dashboard
│── /app          # Next.js App Router (pages and API routes)
│── /components   # Reusable UI components (following Atomic Design)
│── /constants    # Global constants used across the app
│── /context      # React Context API for state management
│── /lib          # Utility functions and helper methods
│── /providers    # Context providers for global state management
│── /services     # API calls and data-fetching logic (e.g., Firebase API requests)
│── /styles       # Global and component-level styles
│── /types        # TypeScript types and interfaces
│── /tests        # Unit and integration tests for components
```

### **Why Atomic Design?**

- **Scalability**: Helps break UI into smaller, reusable components.
- **Maintainability**: Ensures a structured hierarchy for UI components.
- **Efficiency**: Components can be developed and tested independently.

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
   - Add the following environment variable:
     ```sh
     FIREBASE_PROJECT_ID=analytical-dashboard-12c75-default-rtdb
     ```
   - Ensure `.env.local` is **not committed** to version control.

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

Unit and integration tests are implemented for **components**. More tests are planned for **API calls and business logic**.

Run tests using:

```sh
npm run test
# or
yarn test
```

## Code Quality & Linting

Ensure the code follows proper standards before committing:

```sh
npm run lint
npm run format
# or
yarn lint
yarn format
```

## Storybook

To develop and test UI components in isolation:

```sh
npm run storybook
# or
yarn storybook
```

It will be available at `http://localhost:6006`.

## Deployment

This project supports deployment on **Vercel**.

```sh
npm run build
# Deploy using Vercel CLI
vercel deploy
```

## Future Improvements

1. **Complete Filters**: The filtering functionality is not yet finished.
2. **Expand Unit Tests**: Add more tests for API calls and complex business logic.
3. **Enhance Performance**: Optimize data fetching and caching.
4. **Improve UI/UX**: Add better transitions, animations, and interactive elements.

---

This project is a work in progress, and contributions or feedback are welcome!
