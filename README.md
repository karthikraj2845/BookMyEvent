# BookMyEvent 🎉

A full-stack event booking and management platform built using the MERN stack. BookMyEvent enables users to browse events, view event details, register for events, and manage bookings, while administrators can create, update, and manage events through a secure admin workflow.

## 🌐 Live Demo

### Frontend

**Vercel Deployment:**
https://book-my-event-pied.vercel.app/

### Backend API

**Render Deployment:**
https://bookmyevent-i2k0.onrender.com

---

# 📖 Project Overview

BookMyEvent is a modern event management web application designed to simplify event discovery and registration.

The platform consists of:

* **Frontend:** React + Vite
* **Backend:** Node.js + Express.js
* **Database:** MongoDB Atlas
* **Authentication:** JWT (JSON Web Tokens)
* **Deployment:** Vercel (Frontend) & Render (Backend)

---

# 🚀 Features

## User Features

* User Registration & Login
* Secure JWT Authentication
* Browse Available Events
* View Event Details
* Event Registration Requests
* Responsive UI

## Admin Features

* Create New Events
* Update Existing Events
* Delete Events
* Manage Registration Requests
* Approve or Reject Registrations
* Protected Admin Routes

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs
* Mongoose

## Database

* MongoDB Atlas

## Deployment

* Vercel
* Render

---

# 📂 Project Structure

```bash
BookMyEvent/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

---

# ⚙️ Installation Guide

## Prerequisites

Make sure you have installed:

* Node.js (v18 or higher)
* npm
* MongoDB Atlas Account
* Git

---

# 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd BookMyEvent
```

---

# 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
```

---

# 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

NODE_ENV=development
```

---

# ▶️ Running the Project

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔒 Authentication Flow

1. User logs in using email and password.
2. Backend validates credentials.
3. JWT token is generated.
4. Token is stored on the client side.
5. Protected routes verify JWT before granting access.

---

# 📡 API Endpoints

## Authentication

```http
POST /api/users/register
POST /api/users/login
GET  /api/users/profile
```

## Events

```http
GET    /api/events
GET    /api/events/:id
POST   /api/events
PUT    /api/events/:id
DELETE /api/events/:id
```

## Registrations

```http
POST   /api/registrations
GET    /api/registrations
PUT    /api/registrations/:id
```

---

# 🗄️ Database Design

## User Collection

```javascript
{
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean
}
```

## Event Collection

```javascript
{
  title: String,
  description: String,
  date: Date,
  location: String,
  image: String,
  createdBy: ObjectId
}
```

## Registration Collection

```javascript
{
  user: ObjectId,
  event: ObjectId,
  status: String
}
```

---

# 📈 Future Enhancements

* Stripe Payment Integration
* Event Search & Filtering
* Email Notifications
* QR Code Ticket Generation
* Event Categories
* Dashboard Analytics
* Real-Time Booking Updates

---

# 🧠 Learning Outcomes

This project demonstrates practical implementation of:

* RESTful API Development
* Authentication & Authorization
* MongoDB Database Design
* MERN Stack Architecture
* Frontend-Backend Integration
* Deployment using Vercel and Render
* Environment Variable Management
* Protected Routes & Middleware

---

# 👨‍💻 Author

**Karthik Raj Puduri**

Bachelor of Engineering in Artificial Intelligence and Data Science

CBIT, Hyderabad

---

# 📜 License

This project is intended for educational and portfolio purposes.
