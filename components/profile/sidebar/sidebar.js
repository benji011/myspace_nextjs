import Head from 'next/head'
import Layout from '../../layout/layout'
import Avatar from './avatar'
import Date from '../../date'
import styles from './sidebar.module.css'

export default function SideBar({ props }) {
  return (
          <aside className={styles.profileSidebar}>
            <header>
              <h1 className={styles.profileSidebarH1}>Tom</h1>
            </header>
            {/* Profile Picture */}
            <Avatar/>
            {/* Contact Box */}
            <section className={styles.contactBox}>
              <h2 className={styles.contactBoxH2}>Contacting Tom</h2>
              <figure className={styles.contactImages}>
                <img src="images/sendMailIcon.gif" alt="Send Message" />
                <img src="images/forwardMailIcon.gif" alt="Forward to Friend" />
                <img src="images/addFriendIcon.gif" alt="Add to Friends" />
                <img src="images/addFavoritesIcon.gif" alt="Add to Favorites" />
                <img src="images/messagefriend.gif" alt="Instant Message" />
                <img src="images/blockUser.gif" alt="Block User" />
                <img src="images/addToGroupIcon.gif" alt="Add to Group" />
                <img src="images/rankUserIcon.gif" alt="Rank User" />
              </figure>
            </section>
            {/* MySpace URL */}
            <section className={styles.myspaceUrlBox}>
              <h3 className={styles.myspaceUrlBoxH3}>
                <b>MySpace URL:</b>
              </h3>
              <p className={styles.myspaceUrlBoxP}>
                http://www.myspace.com/tom
              </p>
            </section>
            {/* Interests Section */}
            <section className={styles.interestsP}>
              <table className={styles.sidebarTable}>
                <caption>
                <h2 className={styles.sidebarTableH2}>Tom's Interests</h2>
                </caption>
                <tbody>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">General</th>
                    <td className={styles.sidebarTableData}>
                      <p>{props[0].interests}</p>
                      {/*<p>Internet, Movies, Reading, Dancing, Karaoke, Baseball, Language, Culture, History of Communism, Philosophy, Singing/Writing Music, Running, Finding New Food, Weight Lifting, Hiking, WWI Aviation, Travel, Building alternate communities</p>*/}
                    </td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Music</th>
                    <td className={styles.sidebarTableData}>
                      <p><b>Bands</b>: {props[0].bands}</p>
                      <p><b>Solo Artists</b>: {props[0].solo_artists}</p>
                      <p><b>Singers</b>: {props[0].singers}</p>
                      <p><b>Albums</b>: {props[0].albums}</p>
                      <p><b>Instruments</b>: {props[0].instruments}</p>
                    </td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Movies</th>
                    <td className={styles.sidebarTableData}>
                      <p><b>Films</b>: Lawrence of Arabia, Ben Hur, Patton, Spartacus, Gandhi, The 10 Commandments, Apocalypse Now, Beauty & The Beast (the cartoon), Thin Red Line, Titanic, Gladiator, The Patriot, Breakfast at Tiffanys, Un Coeur en Hiver, To Live, Happy Times, The Road Home, Not One Less, Ju Dou, Red Sorghum, The Empire of the Sun, Gone With the Wind, The Godfather, 2001, Clockwork Orange, Blade Runner, Deer Hunter, Mean Streets, Grease, Urban Cowboy, Saturday Night Fever, The Sound of Music, Copland, Xiu Xiu, Dances With Wolves</p>
                      <p><b>Directors</b>: Kubrick, Francis Copolla, Zhang Yimou, Anh Hung Tran, Steven Spielberg</p>
                    </td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Television</th>
                    <td className={styles.sidebarTableData}>
                      <p>Tuned out. <em>Except for SF Giants.</em> I rented Band of Brothers and liked that.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            {/* Tom's Details Section */}
            <section className="details">
              <table className="sidebar-table">
                <caption>
                <h2 className="sidebar-table-h2">Tom's Details</h2>
                </caption>
                <tbody>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Status:</th>
                    <td className={styles.sidebarTableData}>Single</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Here For:</th>
                    <td className={styles.sidebarTableData}>Networking, Dating, Serious Relationships, Friends</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Hometown:</th>
                    <td className={styles.sidebarTableData}>San Diego</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Ethnicity:</th>
                    <td className={styles.sidebarTableData}>White / Caucasian</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Zodiac Sign:</th>
                    <td className={styles.sidebarTableData}>Libra</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Smoke / Drink:</th>
                    <td className={styles.sidebarTableData}>No / No</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">Occupation:</th>
                    <td className={styles.sidebarTableData}>MySpace</td>
                  </tr>
                </tbody>
              </table>
            </section>
            {/* Tom's Schools Section */}
            <section className={styles.schools}>
              <table className={styles.sidebarTable}>
                <caption>
                <h2 className={styles.sidebarTableH2}>Tom's Schools</h2>
                </caption>
                <tbody>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">
                      <ul className={styles.schoolsUl}>
                        <li><a href="#">University Of California-Los Angeles</a></li>
                        <li>Los Angeles, CALIFORNIA</li>
                        <li>Graduated: <a href="#">2000</a></li>
                        <li>Degree: Master's Degree</li>
                        <li>Major: Film - Critical Studies</li>
                      </ul>
                    </th>
                    <td className={styles.sidebarTableData}>1999 to 2000</td>
                  </tr>
                  <tr>
                    <th className={styles.sidebarTableHeader} scope="row">
                      <ul className={styles.schoolsUl}>
                        <li><a href="#">University Of California-Berkeley</a></li>
                        <li>Berkeley, CALIFORNIA</li>
                        <li>Graduated: <a href="#">1997</a></li>
                        <li>Student status: Alumni</li>
                        <li>Degree: Bachelor's Degree</li>
                        <li>Major: English & Rhetoric</li>
                        <li>Clubs: DECAL: Literary Theory</li>
                      </ul>
                    </th>
                    <td className={styles.sidebarTableData}>1993 to 1996</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
  )
}