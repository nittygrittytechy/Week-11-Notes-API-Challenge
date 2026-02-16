# Note Taker API - Deployment Code

This folder contains the deployed version of the Note Taker application hosted on Render.

## Live URL

[https://week-11-notes-api-challenge.onrender.com](https://week-11-notes-api-challenge.onrender.com)

## How to Run Locally

1. Open your terminal and navigate to this folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser and visit `http://localhost:3001`

## How to Use

- Click **Get Started** to open the notes page.
- Type a **title** and **text** for your note.
- Click **Save** to save the note.
- Click any note in the sidebar to view it.
- Click the **trash icon** to delete a note.
- Click **New Note** to create a new note.

## Render Settings

If redeploying, use the following settings:

- **Build Command:** `npm install`
- **Start Command:** `node server.js`
- **Root Directory:** `Week 11 Notes API Challenge/Note Taker API`