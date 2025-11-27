# BBS with Next.js

A modern bulletin board system (BBS) built with Next.js, featuring real-time post creation, viewing, and management.

## 🌐 Live Demo

**Deployed on Vercel**: [https://bbs-with-next-js-ten.vercel.app](https://bbs-with-next-js-ten.vercel.app)

## 📋 Overview

This is a full-stack bulletin board application that allows users to create, view, and manage posts. Built with Next.js 14+ App Router and modern web technologies.

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma ORM
- **Deployment**: Vercel

## ✨ Features

- 📝 Create and manage posts
- 👀 View posts in a clean, organized layout
- 🔍 Search and filter functionality
- 📱 Responsive design
- ⚡ Fast performance with Next.js optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/takuaki-taku/bbs-with-next.js.git
cd bbs-with-next.js
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bbs-with-next.js/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── components/        # React components
│   └── types/             # TypeScript type definitions
├── components/            # Shared components
├── lib/                   # Utility functions
├── prisma/                # Prisma schema and migrations
└── public/                # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📦 Database

This project uses Prisma ORM for database management. The database schema is defined in `prisma/schema.prisma`.

## 🚢 Deployment

This project is deployed on Vercel. The deployment is automatically triggered on push to the main branch.

## 📝 License

MIT License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
