# MERN Event Scraper for Sydney Events

## Project Overview
This project is a MERN (MongoDB, Express, React, Node.js) web application that automatically scrapes and displays upcoming events in Sydney, Australia. The system scrapes event details from Eventbrite and updates them every 24 hours. Users can view event details and click a 'GET TICKETS' button, which requires their email before redirecting them to the original event site.

## Features
- Automated web scraping using Puppeteer to fetch event details.
- MongoDB database to store event details.
- Express.js backend to serve data via REST API.
- React.js frontend to display event listings beautifully.
- Email collection before redirecting users to event ticketing pages.
- Background job to scrape event details every 24 hours.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Web Scraping:** Puppeteer

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (Installed locally or use MongoDB Atlas)
- **npm** (Node Package Manager)

### Installation Steps
#### 1. Clone the Repository
```sh
git clone https://github.com/00Manas-Singgh00/Louder-World.git
cd Louder-World
```

#### 2. Setup Backend
```sh
cd backend
npm install
```

#### 3. Setup Environment Variables
Create a `.env` file inside the `backend/` directory with the following variables:
```env
MONGO_URI=mongodb://localhost:27017/eventsDB
PORT=5000
```

#### 4. Run the Backend
```sh
npm start
```
The backend will run on `http://localhost:5000`

#### 5. Setup Frontend
```sh
cd ../frontend
npm install
```

#### 6. Run the Frontend
```sh
npm start
```
The frontend will run on `http://localhost:3000`

---

## Usage
- Open `http://localhost:3000` in your browser to view the event listings.
- Click the 'GET TICKETS' button to enter your email before being redirected to the original event page.
- The backend automatically scrapes new event data every 24 hours.

## Deployment
To deploy, use services like:
- **Frontend:** Vercel, Netlify
- **Backend:** Heroku, Render
- **Database:** MongoDB Atlas

---

**Author:** Manas Singh  
**GitHub:** [00Manas-Singh00](https://github.com/00Manas-Singh00)
