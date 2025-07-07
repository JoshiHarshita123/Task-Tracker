 Personal Task Tracker

Description
A simple and responsive Task Tracker web application built using React.js. It allows users to log in, add, edit, delete, filter, and search tasks with features like setting priorities and due dates.


 Features

- 👤 Login with localStorage persistence
- ➕ Add tasks with title, description, priority, and due date
- ✅ Mark tasks as completed or pending
- ✏️ Edit task details inline
- 🗑️ Delete tasks with confirmation
- 🔍 Real-time search and filter by status (all, completed, pending)
- 🎯 Priority levels: High, Medium, Low
- 📅 Due Date picker
- 💾 Tasks persist on page refresh (localStorage)
- 📱 Responsive design (mobile + desktop)

 
 Setup Instructions

1. Clone the repository  
git clone https://github.com/JoshiHarshita123/Task-Tracker.git

csharp
Copy
Edit

2. Navigate into the project directory  
cd Task-Tracker

markdown
Copy
Edit

3. Install dependencies  
npm install

pgsql
Copy
Edit

4. Start the development server  
npm start

yaml
Copy
Edit

5. Open your browser and go to:  
[http://localhost:3000](http://localhost:3000)

 Technologies Used

- ⚛️ React.js (functional components + hooks)
- 🎨 CSS
- 💾 localStorage
- 🧩 React DOM, JSX
- 🔍 VS Code for development

 Live Demo

[🔗 Click here to view the live app](https://your-deployment-url.netlify.app)  
(Replace with actual Netlify/Vercel/GitHub Pages link after deployment)


 Sample Tasks for Testing

```js
const sampleTasks = [
{
 id: 1,
 title: "Complete React assignment",
 description: "Build a task tracker application",
 completed: false,
 createdAt: "2024-01-15T10:00:00Z"
},
{
 id: 2,
 title: "Review JavaScript concepts",
 description: "Go through ES6+ features",
 completed: true,
 createdAt: "2024-01-14T15:30:00Z"
}
];

Author
Harshita Joshi
B.Tech CSE — Graphic Era Hill University

 License
This project is open-source and free to use.



