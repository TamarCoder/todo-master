<div align="center">
  <h1>📝 Todo Master</h1>
  <p>
    <strong>თანამედროვე Todo List აპლიკაცია</strong>
  </p>
  <p>
    Next.js-ზე დაფუძნებული, იასამნისფერი გრადიენტებით და smooth ანიმაციებით
  </p>
  
  ![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
  ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  
  <p>
    <a href="README.md">English</a> • <a href="README.ge.md"><strong>ქართული</strong></a>
  </p>
</div>

<br/>

## ✨ ფუნქციები

<table>
<tr>
<td>

### 🎨 დიზაინი
- 💜 **იასამნისფერი გრადიენტი** - მოდური იასამნისფერი პალიტრა
- 🎭 **Smooth ანიმაციები** - რბილი გადასვლები და ეფექტები
- 📱 **Responsive დიზაინი** - ყველა ეკრანზე სრულყოფილი
- 🌈 **თანამედროვე UI** - თანამედროვე ინტერფეისი

</td>
<td>

### 🛠️ კომპონენტები
- ⌨️ **მორგებული Input** - სრულად მორგებული input fields
- 🔘 **ჭკვიანი ღილაკები** - მრავალფუნქციური ღილაკები
- 🔐 **პაროლის ხილვადობა** - პაროლის toggle
- ✅ **ფორმის ვალიდაცია** - Yup + React Hook Form

</td>
</tr>
<tr>
<td>

### ⚡ პერფორმანსი
- 🚀 **Next.js 16** - უახლესი ვერსია
- 📦 **Zustand** - მსუბუქი state management
- 🎯 **TypeScript** - სრული type safety
- 🔄 **ოპტიმიზებული** - სწრაფი და ეფექტური

</td>
<td>

### 🎯 Developer Experience
- 📝 **Clean Code** - წაკითხვადი და ორგანიზებული
- 🎨 **SCSS ცვლადები** - ცენტრალიზებული სტილები
- 🔧 **კომპონენტების გამოყენება** - ხელახლა გამოსაყენებელი
- 📚 **კარგი დოკუმენტაცია** - დეტალური აღწერილობა

</td>
</tr>
</table>

## 🚀 სწრაფი დაწყება

### პირველადი დაყენება

```bash
# რეპოზიტორიის კლონირება
git clone git@github.com:TamarCoder/todo-master.git

# დირექტორიაში შესვლა
cd todo-master

# დამოკიდებულებების ინსტალაცია
npm install
```

### Development

```bash
# Development server-ის გაშვება
npm run dev
```

გახსენით [http://localhost:3000](http://localhost:3000) ბრაუზერში 🎉

### Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ ტექნოლოგიები

<details>
<summary><b>📦 ძირითადი ტექნოლოგიები</b></summary>

- **Framework:** [Next.js](https://nextjs.org/) `16.1.1`
- **UI Library:** [React](https://react.dev/) `19.2.3`
- **ენა:** [TypeScript](https://www.typescriptlang.org/) `5.0`
- **სტილები:** [SCSS/Sass](https://sass-lang.com/) `1.97.1`

</details>

<details>
<summary><b>🎯 State & Forms</b></summary>

- **State Management:** [Zustand](https://github.com/pmndrs/zustand) `5.0.9`
- **Form Handling:** [React Hook Form](https://react-hook-form.com/) `7.69.0`
- **ვალიდაცია:** [Yup](https://github.com/jquense/yup) `1.7.1`
- **Resolvers:** [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) `5.2.2`

</details>

<details>
<summary><b>🎨 UI & Icons</b></summary>

- **აიქონები:** [React Icons](https://react-icons.github.io/react-icons/) `5.5.0`
- **დამატებითი აიქონები:** [Lucide React](https://lucide.dev/) `0.562.0`

</details>

<details>
<summary><b>🌐 HTTP & Utils</b></summary>

- **HTTP Client:** [Axios](https://axios-http.com/) `1.13.2`

</details>

## 📁 პროექტის სტრუქტურა

```
todo-master/
├── 📂 app/
│   ├── 📂 components/
│   │   ├── 📂 App/              # მთავარი App კომპონენტი
│   │   │   ├── App.tsx
│   │   │   └── App.module.scss
│   │   ├── 📂 Button/           # ღილაკის კომპონენტი
│   │   │   ├── Button.tsx
│   │   │   ├── Button.Type.ts
│   │   │   └── Button.module.scss
│   │   └── 📂 Input/            # Input კომპონენტი
│   │       ├── Input.tsx
│   │       ├── input.type.ts
│   │       └── Input.module.scss
│   ├── 📂 styles/
│   │   └── variables.scss       # 🎨 SCSS ცვლადები
│   ├── globals.scss             # გლობალური სტილები
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # მთავარი გვერდი
│   └── page.module.scss
├── 📂 public/                   # სტატიკური ფაილები
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 next.config.ts
└── 📄 README.md
```

## 🎨 SCSS ცვლადები

პროექტი იყენებს ცენტრალიზებულ SCSS ცვლადებს სტილების მართვისთვის:

### ფერები
```scss
// იასამნისფერი პალიტრა
$purple-light: #e1bee7;
$purple-medium: #ba68c8;
$purple-main: #9c27b0;
$purple-dark: #7b1fa2;
$purple-darker: #6a1b9a;

// გრადიენტები
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

## 🧩 კომპონენტები

### 📝 Input კომპონენტი

მორგებული input component მრავალი ფუნქციით:

**ფუნქციები:**
- ✅ Controlled & Uncontrolled მოდები
- 🔐 პაროლის ხილვადობის toggle
- ❌ Error states & ვალიდაცია
- 🎯 აიქონის მხარდაჭერა (მარცხენა/მარჯვენა)
- 🎨 Hover, focus, disabled states
- 📱 სრულად responsive

**გამოყენება:**
```tsx
<Input 
  type="text"
  placeholder="შეიყვანეთ ამოცანა..."
  value={value}
  onChange={handleChange}
  error={error}
  icon={<SearchIcon />}
  iconPosition="left"
/>
```

### 🔘 Button კომპონენტი

მრავალფუნქციური ღილაკი component:

**ფუნქციები:**
- 🎨 რამდენიმე ვარიანტი: `primary`, `secondary`, `outline`, `ghost`
- 📏 ზომები: `small`, `medium`, `large`
- ⏳ Loading state
- 🎯 აიქონის მხარდაჭერა (მარცხნივ/მარჯვნივ)
- 📱 Full width ოფცია
- ✨ Smooth hover & active ანიმაციები

**გამოყენება:**
```tsx
<Button 
  variants="primary"
  size="medium"
  title="დაამატე ამოცანა"
  onClick={handleClick}
  loading={isLoading}
/>
```

## 📸 სკრინშოტები

> მალე დაემატება...

## 🤝 წვლილი

წვლილი მიღებულია! თავისუფლად გახსენით issues და pull requests.

1. გააკეთეთ repository-ის Fork
2. შექმენით თქვენი feature branch (`git checkout -b feature/შესანიშნავიფუნქცია`)
3. Commit გაუკეთეთ ცვლილებებს (`git commit -m 'დაემატა შესანიშნავი ფუნქცია'`)
4. Push გაუკეთეთ branch-ს (`git push origin feature/შესანიშნავიფუნქცია`)
5. გახსენით Pull Request

## 📝 ლიცენზია

ეს პროექტი ლიცენზირებულია MIT ლიცენზიით - იხილეთ [LICENSE](LICENSE) ფაილი დეტალებისთვის.

## 👨‍💻 ავტორი

**თამარ ხუსკივაძე**

- GitHub: [@TamarCoder](https://github.com/TamarCoder)

---

<div align="center">
  შექმნილია 💜-ით თამარ ხუსკივაძის მიერ
  <br/>
  <sub>⭐ მოიწონეთ ეს repo თუ მოგწონთ!</sub>
</div>
