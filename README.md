# Blogs

A modern, responsive blog website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- 🚀 Built with React + TypeScript + Vite
- 🎯 Tailwind CSS for styling
- 🔄 Dynamic content loading from DummyJSON
- 🌊 Custom wave pattern backgrounds
- ⚡ Fast and optimized performance
- 🔍 SEO-friendly structure

## Tech Stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [DummyJSON](https://dummyjson.com/) - Fake REST API for testing and prototyping

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/KartikLabhshetwar/blog-react.git
cd blog-react
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

## Project Structure

```
blog/
├── public/
│   └── images/
│       └── wave-pattern.svg
├── src/
│   ├── components/
│   │   ├── BlogCard.tsx
│   │   ├── Footer.tsx
│   │   ├── LoadingSkeleton.tsx
│   │   └── Navbar.tsx
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Component Features

### Navbar
- Responsive navigation menu
- Mobile-friendly hamburger menu
- Smooth transitions and hover effects
- Login and Join Now buttons

### BlogCard
- Clean and modern design
- Hover effects with shadow and overlay
- Wave pattern background
- Responsive image handling
- Truncated text with line clamping

### Footer
- Three-column layout
- Social media links
- Quick navigation links
- Contact information

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by modifying:
- `tailwind.config.js` for theme customization
- `src/index.css` for global styles
- Individual component files for component-specific styles

### Content
Update the blog content by:
1. Modifying the DummyJSON endpoint in `App.tsx`
2. Adjusting the data transformation in the `fetchPosts` function
3. Customizing the `BlogPost` interface in `types/index.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from modern blog websites
- [Heroicons](https://heroicons.com/) for icons
- [DummyJSON](https://dummyjson.com/) for mock content
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
