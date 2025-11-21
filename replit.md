# Nairobi Taekwondo Association Website

## Overview

A comprehensive frontend-only website for the Nairobi Taekwondo Association. Built with React, TypeScript, and Vite, the platform provides a modern, responsive experience showcasing the association's programs, coaches, events, and gallery - all without requiring a backend server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The application is a pure **frontend-only React single-page application (SPA)**:

- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack Query (React Query) for data state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system based on Taekwondo brand colors (Red #E63946, Black, White, Gold)
- **Animations**: Framer Motion for smooth transitions and interactive elements
- **Forms**: EmailJS for contact form submissions (no backend required)

**Design Rationale**: Vite was chosen for significantly faster hot module replacement during development. The shadcn/ui component library provides accessible, customizable components without the bundle size overhead of complete UI frameworks.

### Data Management

All data is stored in **mock data files** (no database required):

- **Location**: `src/lib/mockData.ts`
- **Data Types**:
  - Coaches: Profile information with photos and bios
  - Events: Upcoming competitions, workshops, and grading ceremonies
  - Announcements: News and updates for members
  - Gallery Images: Training photos and tournament highlights

**Advantages**:
- No backend infrastructure needed
- Fast page loads and instant data access
- Easy to update by editing the mock data file
- No database costs or maintenance

### Email Notifications

- **Provider**: EmailJS (client-side email service)
- **Service ID**: `service_0ayo19h`
- **Template ID**: `n3s5d4e`
- **Public Key**: `YG5OTMHMqPXhtbobk`
- **Use Cases**: 
  - Student registration form submissions
  - Contact form messages
- **Recipient**: Admin email (`telo18429@gmail.com`)

**Implementation**: Direct browser-to-EmailJS communication, eliminating the need for a backend email service.

## Project Structure

```
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable React components
│   │   └── ui/         # shadcn/ui components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and mock data
│   │   └── mockData.ts # All application data
│   ├── pages/          # Page components (routes)
│   │   ├── classes/    # Class information pages
│   │   ├── About.tsx
│   │   ├── Coaches.tsx
│   │   ├── Events.tsx
│   │   ├── Gallery.tsx
│   │   ├── Index.tsx
│   │   ├── Join.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx         # Main app with routing
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles and Tailwind
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind configuration
└── package.json        # Dependencies and scripts
```

## External Dependencies

### UI Component Library

- **shadcn/ui**: Accessible component primitives from Radix UI
- **Radix UI Packages**: Headless UI components (Dialog, Dropdown, Toast, etc.)
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework

### Form & Email

- **EmailJS Browser SDK**: Client-side email sending for forms
- **React Hook Form**: Form state management
- **Zod**: Schema validation for forms

### Development Tools

- **ESLint**: Code linting with TypeScript support
- **TypeScript**: Type checking
- **PostCSS**: For Tailwind CSS processing
- **Vite**: Build tool and dev server

## Running the Project

### Development

```bash
npm run dev
```

Starts the Vite development server on `http://localhost:5000`

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing

## Key Features

### Public Pages

1. **Home** (`/`) - Hero section, class overview, features
2. **About** (`/about`) - Organization history and mission
3. **Classes** - Detailed information about:
   - Kids Classes (`/classes/kids`)
   - Adult Classes (`/classes/adults`)
   - Private Lessons (`/classes/private`)
4. **Coaches** (`/coaches`) - Coach profiles with expandable details
5. **Events** (`/events`) - Upcoming events and announcements
6. **Gallery** (`/gallery`) - Photo gallery with category filters and lightbox
7. **Join** (`/join`) - Registration form with EmailJS integration

### Notable Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **Form Validation**: Client-side validation with Zod schemas
- **Image Lightbox**: Full-screen image viewer in gallery
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards

## Data Updates

To update website content, edit `src/lib/mockData.ts`:

```typescript
// Example: Adding a new event
export const mockEvents: Event[] = [
  {
    id: "5",
    title: "Summer Training Camp",
    date: "2024-06-15",
    time: "09:00 AM",
    location: "Nairobi TKD Academy",
    description: "Intensive summer training camp for all belt levels",
    category: "Workshop",
  },
  // ... existing events
];
```

## Deployment

This frontend-only application can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repository or drag-and-drop `dist/` folder
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect repository for automatic deployments

No server configuration or environment variables needed (EmailJS credentials are public keys).

## Migration History

**Previous Setup**: Originally built with Firebase/Supabase backend for authentication and data storage

**Current Setup** (as of Nov 2024): Migrated to frontend-only architecture
- Removed: Firebase, Supabase, Express server, admin authentication
- Replaced with: Mock data files, EmailJS for forms
- Benefits: Simpler deployment, no backend costs, faster load times

## Development Guidelines

- **No Backend**: All functionality must work client-side only
- **Mock Data**: Add new data to `src/lib/mockData.ts`
- **TypeScript**: Use strict typing for all components
- **Accessibility**: Follow WCAG guidelines, use semantic HTML
- **Performance**: Optimize images, lazy load when appropriate
- **Testing**: Manual testing across devices and browsers
