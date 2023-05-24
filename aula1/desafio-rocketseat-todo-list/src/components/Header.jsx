import styles from './Header.module.css';

import todoLogo from '../assets/Logo.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo TodoList" />
    </header>
  )
}