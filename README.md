# Online Guitar Shop - VibeStrings

A sleek and dynamic web app built with **React**, fetching data via **Apollo Client + GraphQL**, that allows users to explore top-quality branded guitars, view detailed model specs, and discover musicians who played them.

## Features

- **HomePage** with eye-catching hero, brand showcase, and curated favorites  
-  **Model Listings** per brand, with:
  - Text search
  - Type filters (Electric, Bass, Acoustic)
  - Pagination
-  **Model Details** with:
  - Specs tab (wood, pickups, bridge, etc.)
  - Musicians tab with artist info and bands  
  - Powered by GraphQL:  
  - Brands, Models, and Details fetched from `https://graphql-api-brown.vercel.app/api/graphql`

## Tech Stack

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Vite](https://vitejs.dev/) for lightning-fast dev server

## 📂 Folder Structure

src/
├── assets/ # Static images/assets
├── components/ # Reusable components (Header, Footer, Tabs, etc.)
├── pages/ # Page components (Home, Models, ModelDetails)
├── App.jsx # Routing config
├── index.jsx # Entry point
├── apolloClient.js # GraphQL Client



## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AgronZz/Online-Guitar-Shop.git
cd Online-Guitar-Shop
npm install
npm run dev

Open your browser at:
http://localhost:5173


