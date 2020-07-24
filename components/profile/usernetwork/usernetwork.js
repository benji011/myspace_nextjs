import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './usernetwork.module.css'

export default function UserNetwork() {
  return (
        <section className={styles.userNetwork}>
          <header>
            <h2 className={styles.userNetworkH2}>Tom is in your extended network</h2>
          </header>
        </section>
  )
}