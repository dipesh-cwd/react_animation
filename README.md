# 🚀 React Motion Library Documentation

<p align="center">
  <img width="800" src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/assets/cover-light.png" alt="Framer Motion Guide" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/assets/cover-dark.png">
    <img width="800" src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/assets/cover-light.png" alt="Framer Motion Guide">
  </picture>
</p>

[![npm version](https://img.shields.io/npm/v/framer-motion?logo=npm\&style=flat-square)](https://www.npmjs.com/package/framer-motion)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO?logo=github\&style=flat-square)](https://github.com/YOUR_USERNAME/YOUR_REPO/stargazers)
[![License](https://img.shields.io/github/license/YOUR_USERNAME/YOUR_REPO?style=flat-square)](https://github.com/YOUR_USERNAME/YOUR_REPO/blob/main/LICENSE)

---

## 📦 Installation

```bash
npm install framer-motion
```

---

## ▶️ Usage

```bash
npm run dev
```

---

## 📘 What is Framer Motion?

Framer Motion is a production-ready animation library for React that provides:

* Smooth & performant animations
* Props-based declarative API
* Gestures: hover, tap, drag
* Layout animations
* Exit animations
* Reusable animation variants

---

## ⭐ Basic Example

```jsx
import { motion } from "framer-motion";

export default function Box() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="box"
    />
  );
}
```

---

## 🧩 Core Motion Props

### 🔹 `initial`

```jsx
initial={{ opacity: 0, x: -100 }}
```

### 🔹 `animate`

```jsx
animate={{ opacity: 1, x: 0 }}
```

### 🔹 `exit`

```jsx
exit={{ opacity: 0, y: 50 }}
```

### 🔹 `transition`

```jsx
transition={{
  duration: 0.5,
  delay: 0.2,
  ease: "easeInOut",
  type: "spring",
  stiffness: 200,
  damping: 20
}}
```

---

## 🎨 Motion Style Properties

| Property          | Description                |
| ----------------- | -------------------------- |
| `opacity`         | Fade in/out                |
| `x`               | Horizontal movement        |
| `y`               | Vertical movement          |
| `scale`           | Resize                     |
| `rotate`          | Rotate the element         |
| `borderRadius`    | Rounded corners            |
| `backgroundColor` | Color animation            |
| `filter`          | Blur, brightness, contrast |

---

## 🎭 Gestures

### Hover

```jsx
whileHover={{ scale: 1.1 }}
```

### Tap

```jsx
whileTap={{ scale: 0.9 }}
```

### Drag

```jsx
<motion.div drag dragConstraints={{ left: 0, right: 100, top: -50, bottom: 50 }} />
```

---

## 🎬 AnimatePresence (Exit Animations)

```jsx
import { AnimatePresence, motion } from "framer-motion";

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  )}
</AnimatePresence>
```

---

## 🏗️ Layout Animations

```jsx
<motion.div layout />
```

---

## 🎭 Variants (Reusable Animations)

```jsx
const boxVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
/>
```

---

## 📝 Full Props Table

| Prop              | Description              |
| ----------------- | ------------------------ |
| `initial`         | Starting animation state |
| `animate`         | Final animation state    |
| `exit`            | Leaving animation state  |
| `transition`      | Timing & motion control  |
| `variants`        | Reusable animation sets  |
| `whileHover`      | Hover animation          |
| `whileTap`        | Tap animation            |
| `drag`            | Enable dragging          |
| `dragConstraints` | Limit drag area          |
| `layout`          | Auto layout animation    |
| `style`           | Inline or class styling  |

---

## 📂 Project Structure

```
src/
├── assets/
│   ├── cover-light.png
│   ├── cover-dark.png
│   └── demo1.gif
├── components/
│   ├── AnimatedBox.jsx
│   ├── MotionCard.jsx
│   ├── PageTransition.jsx
│   └── MotionList.jsx
├── App.jsx
└── main.jsx
```

---

## 🎁 Example: Button Animation

```jsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 200 }}
>
  Click Me
</motion.button>
```

---

## 🧠 Learning Objectives

* Master motion props (`initial`, `animate`, `transition`, `exit`)
* Learn gestures (`whileHover`, `whileTap`, `drag`)
* Build reusable variants
* Implement exit animations with `AnimatePresence`
* Use layout animations for smooth UI
* Improve React animation workflow

---

## 🎬 Demo GIFs

<p align="center">
  <img src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/assets/demo1.gif" width="600" alt="Demo Animation" />
</p>
```
