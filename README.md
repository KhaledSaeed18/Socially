# Socially - Modern Social Media Platform

A full-stack social media application built with cutting-edge technologies for optimal performance, security, and user experience.

![Next JS](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-7B68EE?style=for-the-badge&logo=clerk&logoColor=white)

## 🚀 Tech Stack

- **Frontend Framework:** Next.js with App Router
- **UI Components:** shadcn/ui (Built on Tailwind CSS)
- **Authentication:** Clerk
- **Database:** Neon PostgreSQL (Serverless)
- **ORM:** Prisma
- **File Storage:** UploadThing
- **Styling:** Tailwind CSS

## ✨ Features

- Modern authentication with Clerk
- Real-time social interactions
- Responsive and accessible UI components
- Image uploads and management
- Serverless PostgreSQL database
- Type-safe database operations with Prisma

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/KhaledSaeed18/Socially.git

# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run dev
```

## 🔑 Environment Variables

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Database
DATABASE_URL=

# UploadThing
UPLOADTHING_TOKEN=
```

## 📚 Documentation

For detailed documentation on the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [UploadThing Documentation](https://docs.uploadthing.com)
