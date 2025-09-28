# ThinkerRoot Ideathon 2025 - Frontend

Registration platform for the ThinkerRoot Ideathon 2025, fostering innovation and entrepreneurship across 6 groundbreaking themes.

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **pnpm** (package manager)

## Quick Start

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KingAkku/ThinkerRoot-2025
   cd ThinkerRoot-2025
   ```

2. **Install dependencies**:

   ```bash
   npm -g pnpm
   pnpm install
   ```

3. **Set environment variables**:
   Create `.env.local` and add:

   ```
   API_URL=your_backend_url
   ```

4. **Run development server**:

   ```bash
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173`

## Features

- **Interactive Landing Page** with animated particles background
- **Registration Modal** for participant sign-up
- **Volunteer Registration** for campus ambassadors
- **6 Theme Categories**: Robotics & AI, Sustainability, Quantum Computing, Web3, Biotech, Gaming
- **LinkedIn Sharing Integration**
- **Mobile-Responsive Design**
- **Success Toast Notifications**
- **Sponsor Showcase**
- **Event Details & Timeline**

## Project Structure

```
thinkerRoot-frontend/
├── components/           # React components
│   ├── AnnouncementBanner.tsx
│   ├── EventDetails.tsx
│   ├── Header.tsx
│   ├── Navbar.tsx
│   ├── RegistrationModal.tsx
│   ├── VolunteerModal.tsx
│   └── ...
├── public/              # Static assets
│   ├── poster.png
│   ├── thinkerroot.svg
│   └── ...
├── utils/               # Utility functions
│   └── linkedinShare.ts
├── App.tsx              # Main application component
├── constants.tsx        # Theme and content constants
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite configuration
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations
- **TSParticles** - Particle effects
- **CSS** - Styling (no framework)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Variables

| Variable  | Description     | Required |
| --------- | --------------- | -------- |
| `API_URL` | Backend API URL | Yes      |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to ThinkerRoot Ideathon 2025.
