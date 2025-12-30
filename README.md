<div align="center">

# ✨ Task Manager

<img src="demo.gif" alt="Task Manager Demo" width="800px" />

### A Modern, Sleek Task Management Application

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-5.0.9-orange?style=for-the-badge)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [Tech Stack](#tech-stack)

</div>

---

## 🌟 Features

<table>
<tr>
<td>

### 🎨 **Beautiful Dark Theme**
- Midnight blue gradient background
- Neon dot animations
- Grid pattern overlay
- Smooth color transitions

</td>
<td>

### ⚡ **Real-time Updates**
- Instant task creation
- Live completion toggle
- Smooth animations
- Persistent storage

</td>
</tr>
<tr>
<td>

### 🎯 **Intuitive Interface**
- Clean, minimal design
- Purple accent colors
- Glassmorphism effects
- Hover interactions

</td>
<td>

### 💾 **Data Persistence**
- LocalStorage integration
- Auto-save functionality
- Zero configuration needed
- Offline support

</td>
</tr>
</table>

---

## 🚀 Demo

### ✅ Task Creation
Add new tasks with a beautiful gradient input field and instant feedback.

### 🔄 Task Completion
Toggle task completion with animated checkmarks and color transitions.

### 🗑️ Task Deletion
Remove tasks with smooth animations and immediate UI updates.

### 🎨 Interactive Elements
- **Shimmer effects** on task hover
- **Neon glow** on focus states
- **Smooth scrollbar** with gradient styling
- **Floating animations** in background

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/TamarCoder/todo-master.git

# Navigate to project directory
cd todo-master

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|:----------:|:-------:|
| **Next.js 16** | React Framework |
| **React 19** | UI Library |
| **TypeScript** | Type Safety |
| **Zustand** | State Management |
| **SCSS** | Styling |
| **React Icons** | Icon Library |
| **Lucide React** | Modern Icons |

</div>

---

## 💻 Usage

### Adding a Task
1. Type your task in the input field
2. Click **"Add Task"** button or press **Enter**
3. Task appears instantly in the list

### Completing a Task
- Click the circle icon to mark as complete
- Completed tasks show a purple checkmark
- Text gets a strikethrough effect

### Deleting a Task
- Click the trash icon to remove a task
- Task is permanently deleted from storage

---

## 🎨 Design Highlights

### Color Palette
```scss
// Primary Colors
$midnight-blue: #0a0e1a;
$slate-dark: #1e293b;
$slate-darker: #0f172a;

// Accent Colors
$purple-main: #8b5cf6;
$purple-light: #a855f7;
$purple-dark: #7c3aed;
$blue-accent: #3b82f6;
```

### Animations
- **Pulse Effect**: Neon dots breathing animation (8s loop)
- **Float Effect**: Background gradient movement (15s loop)
- **Shimmer**: Task hover sweep effect (0.5s)
- **Smooth Transitions**: 0.3s ease-in-out on all interactions

---

## 📁 Project Structure

```
todo-master/
├── app/
│   ├── components/
│   │   ├── App/           # Main container
│   │   ├── Button/        # Custom button component
│   │   ├── Input/         # Styled input field
│   │   └── Task/          # Task item component
│   ├── store/
│   │   └── AddTask.store.ts  # Zustand store
│   ├── styles/
│   │   └── variables.scss    # SCSS variables
│   └── globals.scss          # Global styles
├── public/                   # Static assets
└── demo.gif                  # Demo animation
```

---

## 🌈 Key Features Breakdown

### 🎯 State Management (Zustand)
```typescript
- addTask()      // Create new tasks
- completeTask() // Toggle completion
- deleteTask()   // Remove tasks
- persist()      // Auto-save to localStorage
```

### 🎨 Custom Components
- **Input**: Gradient placeholder, focus glow effects
- **Task**: Glassmorphism, hover animations
- **Button**: Purple gradient, smooth transitions

### 📱 Responsive Design
- Fluid layouts
- Scrollable task list
- Touch-friendly interactions

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Tamar Khuskivadze**

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with 💜 and Next.js

</div>
