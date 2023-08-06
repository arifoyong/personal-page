## Overview

A resume page for me, developed by NextJS
To run locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

## Additional note

The /chat page is a bot to simulate interview session with me. 
It is based on google/flan-t5-xxl, hosted in huggingface. It was chose over ChatGPT because it is free. 
The backend is deployed in AWS Lambda.
Unfortunately the backend code is not part of this repo.

## Stack

# Frontend:
- NextJS

# Backend:
- Python
- HuggingFace library
