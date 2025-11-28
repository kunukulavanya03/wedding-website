# Wedding Website Backend

## Setup

1. Install dependencies: `npm install`
2. Create a `.env` file with your secret key and database URL
3. Run the server: `npm start`

## API Endpoints

### Wedding Endpoints

* `GET /api/weddings`: Retrieve a list of all wedding events
* `GET /api/weddings/:id`: Retrieve a specific wedding event by ID
* `POST /api/weddings/:id/rsvp`: RSVP to a wedding event
* `GET /api/weddings/:id/gallery`: Retrieve the gallery for a specific wedding event
* `POST /api/weddings/:id/gallery`: Upload a photo to the gallery for a specific wedding event
* `GET /api/weddings/:id/timeline`: Retrieve the story timeline for a specific wedding event
* `POST /api/weddings/:id/timeline`: Create a new story for a specific wedding event

### User Endpoints

* `POST /api/register`: Register a new user account
* `POST /api/login`: Log in to an existing user account

## Database Schema

The database schema is defined in `src/prisma/schema.prisma`