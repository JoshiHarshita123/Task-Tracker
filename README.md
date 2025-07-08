# ✅ Task Tracker (React App)

A feature-rich Task Tracker built with **React.js**, supporting login, task creation, due dates, priorities, editing, deletion, filtering, and local storage.

Live Demo: 🔗 [View on Netlify](https://tasktrackk17.netlify.app/)

---

## 🚀 Features

- 🔐 Login system using localStorage (no backend)
- ➕ Add tasks with:
  - Title, description, priority, and due date
- ✅ Mark tasks as completed or pending
- ✏️ Edit tasks inline
- 🗑️ Delete tasks with confirmation
- 🔍 Search and filter tasks (All / Completed / Pending)
- 📅 LocalStorage-based persistence (auto-save)
- 🎨 Responsive, mobile-friendly UI

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router DOM
- **Styling:** Pure CSS (modular per component)
- **State Management:** useState, useEffect
- **Storage:** LocalStorage
- **Deployment:** Netlify

---

## 📂 Project Structure

```
Task-Tracker/
├── public/
│   └── index.html, icons, manifest
├── src/
│   ├── components/
│   │   ├── Login.js, Dashboard.js, TaskForm.js, TaskList.js, TaskItem.js, TaskFilter.js
│   │   └── Corresponding CSS files
│   ├── App.js, index.js, App.css, index.css
├── package.json
```

---

## ⚙️ How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/JoshiHarshita123/Task-Tracker.git
cd Task-Tracker
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the app**
```bash
npm start
```

4. Visit: `http://localhost:3000`

---

## 📦 Build for Production

```bash
npm run build
```
Then deploy the `build/` folder on [Netlify](https://netlify.com) or any static hosting service.

---

## 🧑‍💻 Author

Made with ❤️ by [Harshita Joshi](https://github.com/JoshiHarshita123)
