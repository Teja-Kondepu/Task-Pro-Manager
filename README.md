# TaskMaster Pro

TaskMaster Pro is a modern, responsive, and intuitive task management web app built with [Vite](https://vitejs.dev/) and [React](https://react.dev/). It features a clean UI inspired by leading productivity tools, enabling you to quickly add, filter, complete, and delete your tasks—all with persistent local storage.

![TaskMaster Pro Screenshot](./screenshot.png)

## ✨ Features

- **Add Tasks:** Easily add new tasks with a simple input field.
- **Filter Tasks:** View all, completed, or pending tasks with a single click.
- **Complete & Undo:** Toggle tasks as completed or pending.
- **Delete Tasks:** Remove tasks you no longer need.
- **Responsive Design:** Looks great on desktop, tablet, and mobile.
- **Persistent Storage:** Your tasks are saved in your browser's localStorage.

## 🚀 Demo

![TaskMaster Pro Demo](./demo.gif)

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Teja-Kondepu/TaskMaster-Pro.git
   cd TaskMaster-Pro
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**

   Visit [http://localhost:5173](http://localhost:5173)

## 📦 Build for Production

```bash
npm run build
```
The build output will be in the `dist/` directory.

## 📁 Project Structure

```
TaskMaster-Pro/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   └── TodoApp.jsx
│   └── styles/
│       └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 UI/UX

- Uses [Font Awesome](https://fontawesome.com/) for icons and [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins).
- Clean and modern interface inspired by leading task managers.
- Large, prominent input and action buttons for ease of use.

## 📝 Customization

Feel free to extend functionality:
- Add due dates or reminders
- Edit tasks
- Use a backend for multi-device sync

## 🙌 Credits

- Inspired by productivity tools and the [Task Pro Manager](https://github.com/suradakomali/Task-Pro-Manager) project.
- UI enhanced with Font Awesome and Google Fonts.

## 📄 License

This project is open source and available under the [MIT License](./LICENSE).

---

Built with ❤️ by [Teja-Kondepu](https://github.com/Teja-Kondepu)
