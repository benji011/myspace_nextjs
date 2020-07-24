import Head from 'next/head'
import styles from './header.module.css'
import Link from 'next/link'

export const siteTitle = 'MySpace.com'

export default function Header({ children, home }) {
  return (
          <header className={styles.mainHeader}>
            <nav className={styles.searchBar}>
              <ul className={styles.topNavUl}>
                <li className={styles.topNavLi}><a className={styles.topNavA} href="#">{siteTitle}</a></li>
                <li className={styles.topNavLi}><a className={styles.topNavA} href="#">Home</a></li>
              </ul>
              <form className={styles.searchBarForm}>
                <label>
                  The Web
                  <input type="radio" name="search-type" value="the-web"/>
                </label>
                <label>
                  MySpace
                  <input type="radio" name="search-type" value="myspace"/>
                </label>
                <label>
                  <input type="text" name="search"/>
                </label>
                <input className={styles.submitBtn} type="submit" name="submit-button" value="Search"/>
              </form>
              <ul className={styles.topNavsignup}>
                <li className={styles.topNavLi}><a className={styles.topNavA} href="#">Help</a></li>
                <li className={styles.topNavLi}><a className={styles.topNavA} href="#">SignUp</a></li>
              </ul>
            </nav>
            <nav className={styles.navBar}>
              <ul className={styles.navBarUl}>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Home</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Browse</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Search</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Invite</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Film</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Mail</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Blog</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Favorites</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Forum</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Groups</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Events</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Videos</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Music</a></li>
                <li className={styles.navBarLi}><a className={styles.navBarA} href="#">Classifieds</a></li>
              </ul>
            </nav>
          </header>
  )
}
