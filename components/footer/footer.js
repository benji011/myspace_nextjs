import Head from 'next/head'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer({ children, home }) {
  return (
        <footer className={styles.footer}>
          <nav>
            <ul className={styles.footerUl}>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">About</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">FAQ</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Terms</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Privacy</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Safety Tips</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Contact Myspace</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Report Inappropriate Content</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Promote!</a></li>
              <li className={styles.footerLi}><a className={styles.footerA} href="#">Advertise</a></li>
              <li id="last"><a href="#">MySpace International</a></li>
            </ul>
          </nav>
          <small className={styles.footerSmall}>©2003-2006 MySpace.com. All Rights Reserved.</small>
        </footer>
  )
}
