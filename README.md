# Personal Website

## Description

This is my personal website, built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Dark mode
- Contact form with email notifications

## Tech Stack

- Next.js
- Tailwind CSS
- TypeScript
- Vercel
- ReSend
- Framer Motion

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

## Blogs

the blog pages is a seperate project, you can find it [here](https://github.com/aydenjahola/personal-website-blog). It is hosted on Vercel and can be found [here](https://blog.aydenjahola.com). The blog is built with Next.js, Tailwind CSS, and Sanity. The blog is a seperate project because I wanted to keep the main website as light as possible and I wanted to be able to update the blog without having to redeploy the main website which is why I decided to use Sanity as a headless CMS. you can read about sanity [here](https://www.sanity.io/).

the blogs uses sanity studio as a CMS, you read more about sanity studio [here](https://www.sanity.io/docs/sanity-studio). the studio is hosted on vercel and can be found [here](https://blog.aydenjahola.com/studio).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file

- `RESEND_API_KEY` (must be a valid API key from ReSend)
- `FROM_EMAIL` (must be a verified email address (domain) in ReSend)
- `TO_EMAIL` (can by any email address you want to receive the contact form submissions)
