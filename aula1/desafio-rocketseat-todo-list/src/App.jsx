import { Header } from './components/Header';
import { CreateTask } from './components/CreateTask';

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
   <div className={styles.wrapper}>
    <Header />
    <CreateTask />
   </div>
      
  )
}

export default App
