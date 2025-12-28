# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




🎨 Framer Motion — Complete Guide & Documentation
<p align="center"> <img src="https://i.imgur.com/WrFaQmF.png" width="180" /> </p> <p align="center"><b>A modern animation library for React — smooth, declarative, powerful.</b></p>
⭐ Table of Contents

About

Features

Installation

Basic Usage

Core Motion Props

Transform & Style Props

Transition Types

Variants

Gestures

Exit Animations

Layout Animations

Scroll Animations

Keyframes

Advanced APIs

Performance Tips

Advantages & Disadvantages

Example

🔥 About

Framer Motion is the most popular animation library for React, providing physics-based transitions, gestures, scroll animations, layout transitions, and more.

⚡ Features

✔ Easy declarative API

✔ Physics-based animations

✔ Hover / Tap / Drag gestures

✔ Scroll transforms

✔ AnimatePresence for exit animations

✔ Layout animations

✔ Keyframes

✔ SVG support

📦 Installation
npm install framer-motion

🎯 Basic Usage
import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello Motion
    </motion.div>
  );
}

🧩 Core Motion Props
initial

Defines the starting state.

animate

Defines the ending state.

transition

Controls duration, easing, spring physics, etc.

🎨 Transform & Style Props
Transform props
Prop	Meaning
x	Move horizontally
y	Move vertically
scale	Scale size
rotate	Rotate the element
Style props
Prop	Meaning
opacity	Fade
backgroundColor	Color transitions
borderRadius	Shape animation
⏱ Transition Types
Spring
transition={{ type: "spring", stiffness: 150, damping: 20 }}

Tween
transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}

Inertia
transition={{ type: "inertia", velocity: 200 }}

🔷 Variants
const box = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

🖱 Gestures
Hover
whileHover={{ scale: 1.1 }}

Tap
whileTap={{ scale: 0.9 }}

Drag
<motion.div drag dragConstraints={{ left: 0, right: 100 }} />

🧨 Exit Animations (AnimatePresence)
<AnimatePresence>
  {open && (
    <motion.div exit={{ opacity: 0, y: -30 }} />
  )}
</AnimatePresence>

🧭 Scroll Animations
const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

🔁 Keyframes
animate={{ x: [0, 100, -100, 0] }}

🚀 Advanced APIs
API	Description
useAnimation	Manual control
useCycle	Toggle states
useMotionValue	Low-level animated values
useTransform	Map values to another range
🧠 Performance Tips

Use transform animations instead of margin, top, left

Avoid animating large shadows

Use variants for multiple elements

👍 Advantages

Super easy

React-friendly

Smooth physics

Great documentation

👎 Disadvantages

Slightly larger bundle

Complex for huge lists

🧪 Example
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 120 }}
>
  Card
</motion.div>
