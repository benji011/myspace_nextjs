import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './blurbs.module.css'

export default function Blurbs() {
  return (
          <section className={styles.blurbs}>
            <header className={styles.mainSectionHeader}>
              <h2 className={styles.mainSectionH2}>Tom's Blurbs</h2>
            </header>
            <h3 className={styles.blurbsH3}>About me:</h3>
            <p className={styles.blurbsP}>I'm here to help you with <b>MySpace</b>. Send me a message if you're confused by anything. <span className="info">Before asking me a question, please check the <a href="#">FAQ</a> to see if your question has already been answered.</span></p>
            <p className={styles.blurbsP}>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
            <p className={styles.blurbsP}><strong>Also, feel free to tell me what features you want to see on MySpace and if I think it's cool, we'll do it!</strong></p>
            <p className={styles.blurbsP}>If you want a tutorial on HTML/designing your page, check this out: <a href="#">Mack</a>!!</p>
            <p className={styles.blurbsP}>Note: If you try to view my friends list you won't see all 24,000,000 million people. This was bogging down the system, so we made it only show 40 people. So you wont be able to see the friends on my list.</p>
            <h3 className={styles.blurbsH3}>Who I'd like to meet:</h3>
            <p className={styles.blurbsP}>I'd like to meet people who educate, inspire or entertain me... I have a few close friends I've known all my life. I'd like to make more. </p>
          </section>
  )
}