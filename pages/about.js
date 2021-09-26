import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kryptonmc.dev | about</title>
        <meta
          name='keywords'
          content='minecraft, mc, minecraft plugins, krypton, krypton plugins, plugins'
        ></meta>
      </Head>
      <div className='about'>
        <h1>About</h1>
        <p>
          kryptonmc.dev is a plugin resource site for{' '}
          <a href='https://kryptonmc.org'>Krypton</a> which is a new Minecraft
          server software written in Kotlin
        </p>
      </div>
    </div>
  );
}
