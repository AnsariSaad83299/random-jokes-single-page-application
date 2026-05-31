# Dad Joke Desk

A small React + Vite front-end that fetches dad jokes from the public `icanhazdadjoke` REST API.

## API Used

- API: [icanhazdadjoke](https://icanhazdadjoke.com/api)
- Authentication: none required
- Random joke endpoint: `GET https://icanhazdadjoke.com/`
- Response format: JSON, requested with the `Accept: application/json` header

## Features

- Fetches a random joke when the app loads
- Lets users request a new random joke
- Shows loading and error states for API requests
- Displays API data in a responsive, user-friendly layout

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

```text
http://localhost:5173/
```

Build for production:

```bash
npm run build
```
