import styles from './CreateTask.module.css';

import { PlusCircle } from 'phosphor-react';

export function CreateTask() {
  return (
    <div className={styles.footer}>
    <footer>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button type='submit' className={styles.button}>
        Criar <span><PlusCircle size={20} /></span>
      </button>
    </footer>
  </div>
  )
}