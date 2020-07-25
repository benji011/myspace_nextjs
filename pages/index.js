import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout/layout'
// Profile components
import SideBar from '../components/profile/sidebar/sidebar'
import UserNetwork from '../components/profile/usernetwork/usernetwork'
import Blog from '../components/profile/blog/blog'
import Blurbs from '../components/profile/blurbs/blurbs'
import FriendsSpace from '../components/profile/friends/friends'
import CommentWall from '../components/profile/comments/comments'
import utilStyles from '../styles/utils.module.css'
import { getSortedProfilesData } from '../lib/profiles'

export async function getStaticProps() {
  const allProfilesData = getSortedProfilesData()
  return {
    props: {
      allProfilesData
    }
  }
}

export default function Home ({ allProfilesData }) {
// export default function Home () {
  return (
    <Layout home>
      {/* TODO: remove this later. Just keeping it for reference.*/}
      {/*<Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[MySpace]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="posts/first-post/">
            <a>our Next.js tutorial</a>
          </Link>
          )
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allProfilesData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>*/}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SideBar props={allProfilesData}/>
      <main className={utilStyles.mainCol}>
        <UserNetwork/>
        <Blog/>
        <Blurbs/>
        <FriendsSpace/>
        <CommentWall/>
      </main>
    </Layout>
  )
}
