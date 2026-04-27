# Overview

This is a modern portfolio website built with React and Express.js for 김현국, showcasing a business management professional's experience, career history, and achievements. The application features a single-page design with smooth scrolling navigation, responsive layout, and form handling capabilities. The site includes sections for hero introduction, about, career & education history, major business achievements, and contact form submission.

# User Preferences

Preferred communication style: Simple, everyday language (Korean).
Name: 김현국 (Kim Hyun-gook)
Profession: 경영기획 및 경영지원 전문가 (Business Planning and Management Support Specialist)
Profile image: Uses attached photo displayed in circular format
Remove "작업보기" (View Work) button from hero section
Navigation sections: 홈, 소개, 이력 및 경력, 주요 업무성과, 연락처

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **UI Components**: Extensive use of Radix UI primitives wrapped in shadcn/ui components for accessibility and consistency
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **Routing**: Wouter for lightweight client-side routing with minimal bundle size
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for type consistency
- **API Design**: Simple REST endpoints with JSON request/response format
- **Validation**: Zod schemas for runtime type validation and error handling
- **Storage**: In-memory storage implementation with interface-based design for easy database migration

## Build System and Development
- **Bundler**: Vite for fast development server and optimized production builds
- **Development**: Hot module replacement and TypeScript checking during development
- **Production**: Optimized builds with static asset generation and Express server bundling
- **Package Management**: npm with package-lock.json for dependency consistency

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definitions in shared directory for client-server consistency
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Current State**: Basic user schema defined but not actively used in current portfolio implementation

## API Structure
- **Contact Form**: POST `/api/contact` endpoint for handling contact form submissions
- **Validation**: Server-side validation using Zod schemas with Korean language error messages
- **Error Handling**: Centralized error handling middleware with appropriate HTTP status codes
- **Logging**: Request/response logging for API endpoints with timing information

## Styling and Design System
- **Design Tokens**: CSS custom properties for colors, spacing, and typography
- **Component Library**: Comprehensive UI component library based on Radix UI primitives
- **Theme**: Light theme with blue and emerald accent colors, neutral base palette
- **Typography**: Inter font family with multiple weights for modern appearance
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Project Structure
- **Monorepo Layout**: Client and server code in separate directories with shared schema
- **Path Aliases**: TypeScript path mapping for clean imports and better developer experience
- **Asset Management**: Vite-based asset handling with optimization for production
- **Configuration**: Centralized configuration files for TypeScript, Tailwind, and build tools

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database with connection pooling
- **Drizzle ORM**: Type-safe database operations with schema generation
- **Drizzle Kit**: Database migration and schema management tools

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Animation library for smooth transitions and scroll effects
- **Lucide React**: Consistent icon library for UI elements

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for forms and API endpoints
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

## Development and Build Tools
- **Vite**: Fast build tool with development server and production optimization
- **TypeScript**: Static type checking throughout the entire application
- **ESLint and Prettier**: Code quality and formatting tools (implied by modern setup)
- **PostCSS**: CSS processing with Tailwind CSS integration

## External Services (Planned)
- **Email Service**: Ready for integration with SendGrid or similar for contact form notifications
- **Image Hosting**: Currently using Unsplash for placeholder images, ready for CDN integration
- **Analytics**: Structure prepared for Google Analytics or similar tracking services