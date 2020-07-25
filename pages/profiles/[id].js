import Head from 'next/head'
import Layout from '../../components/layout/layout'
// import { getAllPostIds, getPostData } from '../../lib/posts'
// import { getAllProfilesIds, getSortedProfilesData } from '../../lib/profiles'
import { getSortedProfilesData } from '../../lib/profiles'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Profiles({ profileData }) {
  return (
    <Layout>
      <Head>
        <title>{profileData.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{profileData.name}</h1>
        <div>
          <Date dateString={profileData.interests} />
        </div>
      </article>
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = getAllProfilesIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getStaticProps({ params }) {
  const profileData = await getSortedProfilesData(params.id)
  return {
    props: {
      profileData
    }
  }
}