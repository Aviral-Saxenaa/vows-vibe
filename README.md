# Vows Vibe - Premium Jewelry Collection

A responsive jewelry e-commerce website showcasing premium jewelry collections with a modern, elegant design.

## Features

### ✅ Completed Improvements


1. **Fully Responsive Design**
   - **Mobile-first approach** with responsive breakpoints
   - **Header**: Responsive logo, navigation (hidden on mobile), and buttons
   - **Product Layout**: Responsive grid that stacks on mobile
   - **Product Images**: Responsive gallery with mobile-optimized thumbnails
   - **Product Details**: Responsive text sizes, buttons, and feature grid
   - **Footer**: Responsive columns that stack on mobile
   - **Breadcrumb**: Horizontal scroll on mobile for long paths

2. **Functional Authentication**
   - **Login/Register Page**: Complete form with validation
   - **Demo Accounts**: Pre-configured test accounts
     - `demo@vowsvibe.com` / `demo123`
     - `user@example.com` / `password`
     - `admin@vowsvibe.com` / `admin123`
   - **Clickable Buttons**: Header LOGIN/REGISTER buttons navigate to login page
   - **Toast Notifications**: Success/error feedback for login attempts

3. **Enhanced User Experience**
   - **Real Product Images**: High-quality jewelry images from Unsplash
   - **Interactive Elements**: All buttons are clickable with hover effects
   - **Navigation**: Logo clicks return to home page
   - **Responsive Typography**: Text scales appropriately across devices

## Demo Accounts

For testing the login functionality, use these demo accounts:

- **Email**: `demo@vowsvibe.com` **Password**: `demo123`
- **Email**: `user@example.com` **Password**: `password`
- **Email**: `admin@vowsvibe.com` **Password**: `admin123`

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

3. Open your browser and navigate to the local development URL

## Project Structure

```
├── client/
│   ├── components/          # Reusable UI components
│   │   ├── MainHeader.tsx   # Responsive header with navigation
│   │   ├── ProductDetailLayout.tsx  # Main product showcase
│   │   ├── ProductImageGallery.tsx  # Responsive image gallery
│   │   ├── ProductDetailsPanel.tsx  # Product info and actions
│   │   ├── Footer.tsx       # Responsive footer
│   │   └── ...
│   ├── pages/              # Route components
│   │   ├── Index.tsx       # Home page
│   │   ├── Login.tsx       # Authentication page
│   │   └── ...
│   └── ...
├── public/                 # Static assets
└── ...
```

## Responsive Breakpoints

- **Mobile**: `< 768px` (md)
- **Tablet**: `768px - 1024px` (md to lg)
- **Desktop**: `> 1024px` (lg+)

## Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS** for responsive styling
- **React Router** for navigation
- **Radix UI** components
- **Lucide React** icons
- **Vite** for development and building

## Notes

This is a frontend showcase project demonstrating:
- Modern responsive web design
- Component-based architecture
- User authentication flows (demo only)
- E-commerce UI patterns
- Mobile-first development approach

All functionality is for demonstration purposes. The login system uses hardcoded demo accounts and doesn't persist data.