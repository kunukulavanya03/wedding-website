# wedding-website

A modern online wedding invitation website with RSVP system, gallery, and story timeline.

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/FfnnHRPoygOhto1mMckkHd/Wedding-Service-Website--Community-?node-id=1-1389&t=sqxqeENx42iYCZay-1))

## Project Structure

```
wedding-website/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- RSVP system
- Gallery
- Story timeline
- User registration and login
- Wedding event management

## API Endpoints

- `GET /api/weddings` - Retrieve a list of all wedding events.
- `GET /api/weddings/:id` - Retrieve a specific wedding event by ID.
- `POST /api/weddings/:id/rsvp` - RSVP to a wedding event.
- `GET /api/weddings/:id/gallery` - Retrieve the gallery for a specific wedding event.
- `POST /api/weddings/:id/gallery` - Upload a photo to the gallery for a specific wedding event.
- `GET /api/weddings/:id/timeline` - Retrieve the story timeline for a specific wedding event.
- `POST /api/weddings/:id/timeline` - Create a new story for a specific wedding event.
- `POST /api/register` - Register a new user account.
- `POST /api/login` - Log in to an existing user account.

## License

MIT
