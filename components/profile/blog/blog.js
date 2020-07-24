import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './blog.module.css'

export default function Blog() {
  return (
          <section className={styles.blog}>
            <p className={styles.blogP}><b>Tom's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
            <p className={styles.blogP}>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
            <p className={styles.blogP}>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
            <p className={styles.blogP}>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
            <p className={styles.blogP}>October 29th - MySpace 2-Year Anniversary Concert! (<a href="#">view more</a>) </p>
            <p className={styles.blogP}>NIN, QOTSA, Acoustic and Punk Tours (!) (<a href="#">view more</a>)</p>
            <p className={styles.blogP}>[<a href="#">View All Blog Entries</a>]</p>
          </section>
  )
}