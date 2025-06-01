# ✈️ Travlr Getaways – Full-Stack Travel Management Platform

> A full-stack travel application built with the MEAN stack to showcase dynamic content delivery, admin dashboards, and secure booking management.

---

## 🎓 About This Project

This project was developed as a final portfolio-grade assignment for **CS-465: Full Stack Development** at Southern New Hampshire University.  
**Travlr Getaways** simulates a modern travel agency platform, featuring both a **customer-facing trip browser** and a secure **admin dashboard** for trip management.

Built with the **MEAN stack** (MongoDB, Express.js, Angular, Node.js), this application demonstrates single-page routing, RESTful APIs, secure admin access, and dynamic content rendering.

---

## 💡 Project Features

| Feature                     | Technology Used |
|----------------------------|-----------------|
| 🧭 Dynamic trip browsing   | Angular SPA (Customer-facing) |
| 🔐 Secure admin portal     | Angular + JWT + AuthGuard |
| 🧾 CRUD operations on trips| Express API + MongoDB |
| 📡 RESTful API backend     | Node.js + Express |
| 🎨 Responsive UI/UX        | Angular 17 + Tailwind CSS (optional) |

---

## 🧱 Tech Stack

| Layer        | Tools Used |
|--------------|-------------|
| Frontend     | Angular 17 SPA (Admin & Client) |
| Backend      | Express.js (REST API) |
| Database     | MongoDB (via Mongoose ODM) |
| Authentication | JWT, AuthInterceptor, AuthGuard |
| Deployment   | Designed for modular deployment (Vercel/Render compatible) |

---

## 🧭 System Architecture

The application is separated into two key SPAs:

### 1. Customer-Facing SPA (Angular)
- Users browse trips, view trip details, and submit inquiries.
- Built using Angular with dynamic routes.

### 2. Admin SPA (Angular)
- Admins can add/edit trips, login securely, and manage content.
- Protected using **JWT-based authentication** with route guards.

---

## 🌐 API Endpoints

| Method | URL             | Description                          |
|--------|------------------|--------------------------------------|
| GET    | `/api/trips`     | List all available trips             |
| GET    | `/api/trips/:slug` | Get details for a specific trip   |
| POST   | `/api/trips`     | Add a new trip (admin only)          |
| PUT    | `/api/trips/:slug` | Edit existing trip (admin only)    |
| POST   | `/api/login`     | Login and receive JWT token          |

---

## 🧩 Project Structure

