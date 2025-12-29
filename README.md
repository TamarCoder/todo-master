<div align="center">
  <h1>📝 Todo Master</h1>
  <p>
    <strong>Modern Todo List Application</strong>
  </p>
  <p>
    Built with Next.js, featuring purple gradient design and smooth animations
  </p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
  ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  
  <p>
    <a href="README.md"><strong>English</strong></a> • <a href="README.ge.md">ქართული</a>
  </p>
</div>

<br/>

## ✨ Features

<table>
<tr>
<td>

### 🎨 Design
- 💜 **Purple Gradient Theme** - Trendy purple color palette
- 🎭 **Smooth Animations** - Fluid transitions and effects
- 📱 **Responsive Design** - Perfect on all screen sizes
- 🌈 **Modern UI** - Contemporary interface design

</td>
<td>

### 🛠️ Components
- ⌨️ **Custom Input** - Fully customized input fields
- 🔘 **Smart Buttons** - Multi-functional button components
- 🔐 **Password Toggle** - Password visibility control
- ✅ **Form Validation** - Yup + React Hook Form

</td>
</tr>
<tr>
<td>

### ⚡ Performance
- 🚀 **Next.js 16** - Latest version
- 📦 **Zustand** - Lightweight state management
- 🎯 **TypeScript** - Full type safety
- 🔄 **Optimized** - Fast and efficient

</td>
<td>

### 🎯 Developer Experience
- 📝 **Clean Code** - Readable and organized
- 🎨 **SCSS Variables** - Centralized styling
- 🔧 **Reusable Components** - DRY principles
- 📚 **Well Documented** - Comprehensive documentation

</td>
</tr>
</table>

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone git@github.com:TamarCoder/todo-master.git

# Navigate to directory
cd todo-master

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser 🎉

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

<details>
<summary><b>📦 Core Technologies</b></summary>

- **Framework:** [Next.js](https://nextjs.org/) `16.1.1`
- **UI Library:** [React](https://react.dev/) `19.2.3`
- **Language:** [TypeScript](https://www.typescriptlang.org/) `5.0`
- **Styling:** [SCSS/Sass](https://sass-lang.com/) `1.97.1`

</details>

<details>
<summary><b>🎯 State & Forms</b></summary>

- **State Management:** [Zustand](https://github.com/pmndrs/zustand) `5.0.9`
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) `7.69.0`
- **Validation:** [Yup](https://github.com/jquense/yup) `1.7.1`
- **Resolvers:** [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) `5.2.2`

</details>

<details>
<summary><b>🎨 UI & Icons</b></summary>

- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) `5.5.0`
- **Additional Icons:** [Lucide React](https://lucide.dev/) `0.562.0`

</details>

<details>
<summary><b>🌐 HTTP & Utils</b></summary>

- **HTTP Client:** [Axios](https://axios-http.com/) `1.13.2`

</details>

## 📁 Project Structure

```
todo-master/
├── 📂 app/
│   ├── 📂 components/
│   │   ├── 📂 App/              # Main App component
│   │   │   ├── App.tsx
│   │   │   └── App.module.scss
│   │   ├── 📂 Button/           # Button component
│   │   │   ├── Button.tsx
│   │   │   ├── Button.Type.ts
│   │   │   └── Button.module.scss
│   │   └── 📂 Input/            # Input component
│   │       ├── Input.tsx
│   │       ├── input.type.ts
│   │       └── Input.module.scss
│   ├── 📂 styles/
│   │   └── variables.scss       # 🎨 SCSS variables
│   ├── globals.scss             # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── page.module.scss
├── 📂 public/                   # Static assets
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 next.config.ts
└── 📄 README.md
```

## 🎨 SCSS Variables

The project uses centralized SCSS variables for consistent styling:

### Colors
```scss
// Purple Palette
$purple-light: #e1bee7;
$purple-medium: #ba68c8;
$purple-main: #9c27b0;
$purple-dark: #7b1fa2;
$purple-darker: #6a1b9a;

// Gradients
$gradient-primary: linear-gradient(135deg, $purple-medium 0%, $purple-dark 100%);
$gradient-hover: linear-gradient(135deg, $purple-dark 0%, $purple-darker 100%);
```

### Spacing
```scss
// Padding & Margins
$padding-xs: 0.25rem;    // 4px
$padding-sm: 0.5rem;     // 8px
$padding-md: 0.75rem;    // 12px
$padding-base: 1rem;     // 16px
$padding-lg: 1.5rem;     // 24px
```

### Transitions
```scss
$transition-fast: 200ms ease-in-out;
$transition-base: 350ms ease-in-out;
$transition-slow: 500ms ease-in-out;
```

## 🧩 Components

### 📝 Input Component

Custom input component with multiple features:

**Features:**
- ✅ Controlled & Uncontrolled modes
- 🔐 Password visibility toggle
- ❌ Error states & validation
- 🎯 Icon support (left/right position)
- 🎨 Hover, focus, disabled states
- 📱 Fully responsive

**Usage:**
```tsx
<Input 
  type="text"
  placeholder="Enter task..."
  value={value}
  onChange={handleChange}
  error={error}
  icon={<SearchIcon />}
  iconPosition="left"
/>
```

### 🔘 Button Component

Multi-functional button component:

**Features:**
- 🎨 Multiple variants: `primary`, `secondary`, `outline`, `ghost`
- 📏 Sizes: `small`, `medium`, `large`
- ⏳ Loading state
- 🎯 Icon support (left/right)
- 📱 Full width option
- ✨ Smooth hover & active animations

**Usage:**
```tsx
<Button 
  variants="primary"
  size="medium"
  title="Add Task"
  onClick={handleClick}
  loading={isLoading}
/>
```

## 📸 Screenshots

> Coming soon...

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tamar Khuskivadze**

- GitHub: [@TamarCoder](https://github.com/TamarCoder)

---

<div align="center">
  Made with 💜 by TamarCoder
  <br/>
  <sub>⭐ Star this repo if you like it!</sub>
</div>
