# Note Taker - Week 11 Notes API Challenge

## Description

A full-stack note-taking application built with Express.js that allows users to write, save, and delete notes. Notes are persisted using a JSON file as the data store. This project demonstrates Express.js routing, RESTful API design, and file-based data persistence with Node.js.

## Live Deployment

[https://week-11-notes-api-challenge.onrender.com](https://week-11-notes-api-challenge.onrender.com)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Routes](#api-routes)
- [Screenshots](#screenshots)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nittygrittytechy/Week-11-Notes-API-Challenge.git
   ```
2. Navigate to the project directory:
```bash
   cd Week-11-Notes-API-Challenge/"Render Files"
```
3. Install dependencies:
```bash
   npm install
```
4. Start the server:
```bash
   node server.js
```
5. Open your browser and visit `http://localhost:3001`

## Usage

1. Click **"Get Started"** on the landing page to navigate to the notes page.
2. Enter a **note title** and **note text** in the right-hand panel.
3. Click the **Save** icon to save the note. It will appear in the sidebar on the left.
4. Click on any saved note in the sidebar to view it.
5. Click the **trash icon** next to a note to delete it.
6. Click **New Note** to clear the form and create a new note.

## Features

- Create and save notes with a title and text body
- View previously saved notes
- Delete notes that are no longer needed
- Notes persist between sessions using JSON file storage
- Clean, responsive user interface built with Bootstrap

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **JavaScript** - Programming language
- **HTML5** - Page structure
- **CSS3** - Styling
- **Bootstrap 5** - Responsive UI framework
- **Font Awesome** - Icons
- **Render** - Cloud deployment platform

## API Routes

| Method | Endpoint | Description |
| ------ | ---------------- | ------------------------- |
| GET | `/api/notes` | Returns all saved notes |
| POST | `/api/notes` | Saves a new note |
| DELETE | `/api/notes/:id` | Deletes a note by its ID |

## HTML Routes

| Method | Endpoint | Description |
| ------ | -------- | -------------------------------- |
| GET | `/notes` | Serves the notes page |
| GET | `*` | Serves the landing page |

## Screenshots

![Note Taker Landing Page](./Assets/11-express-homework-demo.gif)

## License

This project is licensed under the ISC License.