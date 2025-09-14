# BT Digital Next.js Website

A modern, responsive website built with Next.js, TypeScript, and Tailwind CSS, optimized for static site hosting.

## 🚀 Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🔧 **TypeScript** for type safety
- 📦 **Static Export** ready for hosting
- 🎯 **SEO Optimized**
- 🚀 **Performance Optimized**

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Build Tool**: Turbopack

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 4. Build Static Export

```bash
npm run build:static
# or
yarn build:static
# or
pnpm build:static
```

This will create an `out` folder with static files ready for deployment.

## 📁 Project Structure

```
btdigital-nextjs/
├── src/
│   └── app/                 # App Router pages
│       ├── globals.css      # Global styles
│       ├── layout.tsx       # Root layout
│       └── page.tsx         # Home page
├── public/                  # Static assets
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Styling

This project uses Tailwind CSS for styling. You can:

- Modify `src/app/globals.css` for global styles
- Use Tailwind utility classes in your components
- Customize the design system in `tailwind.config.ts`

## 🚀 Deployment

### Static Hosting (Recommended)

This project is configured for static export and can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect your repository
- **GitHub Pages**: Use the `out` folder
- **AWS S3**: Upload the `out` folder
- **Any static hosting service**

### Build Commands

```bash
# Build static export
npm run build:static

# Preview static build locally
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:static` - Build static export
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run clean` - Clean build artifacts
- `npm run preview` - Preview static build

## 🔧 Configuration

### Next.js Configuration

The project is configured in `next.config.ts` with:

- Static export enabled (`output: 'export'`)
- Image optimization disabled for static hosting
- Trailing slash enabled for better hosting compatibility

### Tailwind CSS

Tailwind CSS is configured with:

- Modern CSS features
- Responsive design utilities
- Custom color palette (can be extended)

## 📱 Responsive Design

The website is built with a mobile-first approach:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🎯 Performance

- **Static Export**: No server required
- **Image Optimization**: Configured for static hosting
- **Code Splitting**: Automatic with Next.js
- **CSS Optimization**: Tailwind CSS purging
- **TypeScript**: Compile-time error checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help, please:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. Open an issue in this repository

---

Built with ❤️ using Next.js and Tailwind CSS