# Telpark Client

This is the web client for the Telpark technical test. It allows you to manage Organizations and Charge Points via a REST API.

## Features

- CRUD for Organizations
- CRUD for Charge Points
- Clean, modern UI
- No authentication required

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd telpark-client
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root of the project with the following content:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

Adjust the URL if your API runs on a different port or path.

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default (or the port you configure).

## Project Structure

```
telpark-client/
├── src/
│   ├── config/           # Environment config
│   ├── data/             # Models
│   ├── infrastructure/   # API services
│   └── presentation/
│       ├── components/   # UI components
│       ├── hooks/        # Custom hooks
│       ├── pages/        # Pages
│       └── routes/       # AppRouter
├── public/
├── styles/
│   └── theme/            # Theme styles
└── ...
```

## Notes

- The API must be running and accessible at the URL specified in `.env`.
- No authentication or authorization is required.
- All code and UI are in English.

## License

MIT

---

**Developed for the Full Stack Telpark technical test.**
