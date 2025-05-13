# Overview 
I've created a full-stack application that fetches and displays Chrome UX Report (CrUX) data for one or more URLs. The application consists of:/
React frontend with Material UI/
Node.js/Express backend/
Integration with Google's CrUX API/

# Project Structure

├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # API service layer
│   │   ├── App.js           # Main application component
│   │   └── ...
├── backend/                 # Node.js backend
│   ├── controllers/         # API controllers
│   ├── routes/              # Express routes
│   ├── services/            # Business logic
│   ├── app.js               # Express app setup
│   └── ...
├── documentation/           # Design docs and screenshots
└── README.md                # Setup instructions

# Features Implemented
## Part 1: Basic CrUX Data Fetching
URL input field with validation
Search button to fetch data
Data table displaying CrUX metrics
Error handling for invalid URLs or API failures

## Part 2: Filtering and Sorting
Column sorting for all metrics
Filter controls for performance metrics

## Part 3: Multiple URL Support
Bulk URL input (one per line)
Summary statistics (average, sum) for metrics
Batch processing with progress indicators

## Bonus Features
Basic insights and recommendations based on CrUX data
Responsive design for mobile/desktop

# Setup Instructions
## Prerequisites
Node.js (v14+)
npm or yarn
Google API key (for CrUX API)
Docker (optional, for containerized deployment)

## Installation
Clone the repository
Create .env files:
### server/.env:

GOOGLE_API_KEY=your_api_key
PORT=5000

## Install dependencies:

### bash
cd frontend && npm install
cd backend && npm install

Run the application:
### bash
# In one terminal
cd backend && npm start

# In another terminal
cd frontend && npm run dev
Access the app at http://localhost:5000

# Demo Video
View Demo Video

# Key features shown in demo:
Single URL analysis
Bulk URL processing
Filtering and sorting
Summary statistics
Insights generation

# Design Decisions

## Frontend Architecture
Used React hooks for state management
Material UI for consistent styling
Custom hooks for API calls and data processing
Responsive layout with mobile-first approach

## Backend Architecture
Express.js for API routes
Separation of concerns with controller/service pattern
Caching layer for frequent URL requests
Error handling
