# Personal Website

## Description

This is my personal website, built with Next.js and Tailwind CSS.

## Features

-   Responsive design
-   Dark mode
-   Contact form with email notifications

## Tech Stack

-   Next.js
-   Tailwind CSS
-   TypeScript
-   Vercel
-   ReSend
-   Framer Motion

## Run Locally

1. Clone the project

```bash
git clone git@github.com:aydenjahola/personal-website.git
```

2. Go to the project directory

```bash
cd portfolio-website
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

- `RESEND_API_KEY` (must be a valid API key from ReSend)
- `FROM_EMAIL` (must be a verified email address (domain) in ReSend)
- `TO_EMAIL` (can by any email address you want to receive the contact form submissions)