import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post} >
            <header>

                <div className={styles.header}>
                    <img className={styles.avatar} src="https://github.com/ViniCode2.png" />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Gomes</strong>
                        <span>Programador Front-end</span>
                    </div>
                </div>

                <time title='06 de Janeiro ás 01:50h' dateTime='2023-01-06'>Publicado há 1h</time>

            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p> 
                    <a href="#">#novoprojeto </a>{' '}
                    <a href="#"> #nlw</a> {' '}
                    <a href="#"> #rocketseat </a>
                </p>
            </div>
        </article>
    )
}