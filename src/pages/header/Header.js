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
      "I'm a code enthusiest.",
      "I'm a fullstack developer,",
      "I'm a fly fisherman,",
    ]}
    speed={100}
    eraseSpeed={100}
    eraseDelay={3000}
  />
</h1>
</header>
    )
}
