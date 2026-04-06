# 📝 Mini Posts App (CRUD using Express & EJS)

A simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and EJS.  
This project simulates a basic social media post system where users can create, view, edit, and delete posts.

---

## 🚀 Features

- View all posts  
- Create a new post  
- View a single post  
- Edit a post  
- Delete a post  
- Uses method-override for PATCH & DELETE  
- Unique IDs generated using UUID  

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js  
- Frontend: EJS (Embedded JavaScript Templates)  
- Utilities: UUID, Method-Override  

---

## 📁 Project Structure

project-folder/
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── public/
│
├── index.js
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

1. Clone the repository
git clone <your-repo-link>

2. Navigate to the project folder
cd project-folder

3. Install dependencies
npm install

4. Run the server
node index.js

5. Open in browser
http://localhost:8080/posts

---

## 📌 Routes Overview

| Method | Route              | Description        |
|--------|------------------|--------------------|
| GET    | /posts           | Show all posts     |
| GET    | /posts/new       | Create post form   |
| POST   | /posts           | Create new post    |
| GET    | /posts/:id       | View post          |
| GET    | /posts/:id/edit  | Edit post form     |
| PATCH  | /posts/:id       | Update post        |
| DELETE | /posts/:id       | Delete post        |

---

## ⚠️ Note

- This project uses an in-memory array (no database).
- All data will be lost when the server restarts.
- IDs are generated using UUID.

---

## 🔮 Future Improvements

- Connect with MongoDB (MERN stack)  
- Improve UI with CSS/Bootstrap  
- Add authentication (login/signup)  
- Convert to full-stack app using React  

---

## 🙌 Author

Rajat Tyagi

---

## ⭐ Support

If you like this project, give it a star ⭐ on GitHub!