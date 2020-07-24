// Next.js libraries
import Head from 'next/head'
import Link from 'next/link'
// Profile components
import Header from '../header/header'
import Footer from '../footer/footer'
import SideBar from '../profile/sidebar/sidebar'
import UserNetwork from '../profile/usernetwork/usernetwork'
import Blurbs from '../profile/blurbs/blurbs'
import Blog from '../profile/blog/blog'
// styles
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const name = 'Benjamin Lo'
export const siteTitle = 'MySpace Next.js'

export default function Layout({ children, home }) {
  return (
    <div className={styles.masterContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <div className={styles.pageContentContainer}>
        <SideBar/>
        {/* main section */}
        <main className={styles.mainCol}>
          <UserNetwork/>
          <Blog/>
          <Blurbs/>
        </main>
      </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
  )
}
