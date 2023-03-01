import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.author}>
        <img className={styles.avatar} src="https://github.com/Vitorlima02.png" />
        <div className={styles.authorInfo}>
          <strong>Vitor Lima</strong>         
          <span>Web Developer</span>
        </div>

        <time title='01 de Março às 14:30h' dateTime='2023-03-01 14:30:05'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p><a href=''>👉 jane.design/doctorcare</a></p>
      <p><a href=''>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}