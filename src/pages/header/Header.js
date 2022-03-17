import styles from './Header.module.css'
import React from 'react'
import ReactTypingEffect from "react-typing-effect";

export default function Header() {
    return (
        <header className={styles.header}>
<h1>
  <ReactTypingEffect
    text={[
      "Hey, I'm Nate.",
      "I'm a code enthusiast.",
      "I'm a fullstack developer.",
    ]}
    speed={100}
    eraseSpeed={100}
    eraseDelay={3000}
  />
</h1>
</header>
    )
}
