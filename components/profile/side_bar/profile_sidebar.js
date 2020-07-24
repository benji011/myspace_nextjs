import Head from 'next/head'
import Layout from '../../layout/layout'
import Date from '../../date'

export default function ProfileSideBar() {
  return (
          <aside className="profile-sidebar">
            <header>
              <h1>Tom</h1>
            </header>
            {/* Profile Picture */}
            {/*<Profile />*/}
            {/* Contact Box */}
            <section className="contact-box">
              <h2>Contacting Tom</h2>
              <figure className="contact-images">
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
            <section className="myspace-url-box">
              <h3><b>MySpace URL:</b></h3>
              <p>http://www.myspace.com/tom</p>
            </section>
            {/* Interests Section */}
            <section className="interests">
              <table className="sidebar-table">
                <caption>
                <h2 className="sidebar-table-h2">Tom's Interests</h2>
                </caption>
                <tbody>
                  <tr>
                    <th className="sidebar-table-header" scope="row">General</th>
                    <td className="sidebar-table-data">
                      <p>Internet, Movies, Reading, Dancing, Karaoke, Baseball, Language, Culture, History of Communism, Philosophy, Singing/Writing Music, Running, Finding New Food, Weight Lifting, Hiking, WWI Aviation, Travel, Building alternate communities</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Music</th>
                    <td className="sidebar-table-data">
                      <p><b>Bands</b>: Beatles, Superdrag, Jackson 5, Weezer, Sex Pistols, The Carpenters, Vain, Radiohead, Teenage Fanclub, Rocket from the Crypt, Pitchfork, Oasis, Rialto, Supergrass, Travis, The Doors, Cheap Trick, Simple Plan, AliceCooper, KISS, A*TEENS, The Beach Boys, The Velvet Underground, Journey</p>
                      <p><b>Solo Artists</b>: Billy Joel, Bruce Springsteen, Elvis, Brendan Benson, David Bowie, Rick Springfield, Barry Manilow, Paul Stanley Solo Album, Bob Dylan, Rod Stewart</p>
                      <p><b>Singers</b>: Michael Jackson (age 14 & under), Karen Carpenter, Whitney Houston (particularly The Bodyguard soundtrack), George Michael, Louie Louie, Coco Lee, Robin Zander, Frank Sinatra, Steve Perry, Gerard Way</p>
                      <p><b>Albums</b>: Appetite for Destruction - Guns & Roses; Life - The Cardigans; A Hard Day's Night - The Beatles; Dookie - Green Day; Blue - Weezer; One Missisipi - Brendan Benson; Two Steps from the Move - Hanoi Rocks; Led Zeppelin I, The Doors, In The Valley of Dying Stars - SuperDrag; Survivor When Seconds Count - Rick Springfield, Working Class Dog</p>
                      <p><b>Instruments</b>: The Er Hu, Piano, certain guitar tones (Rocket from the Crypt, Sex Pistols, Rolling Stones)</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Movies</th>
                    <td className="sidebar-table-data">
                      <p><b>Films</b>: Lawrence of Arabia, Ben Hur, Patton, Spartacus, Gandhi, The 10 Commandments, Apocalypse Now, Beauty & The Beast (the cartoon), Thin Red Line, Titanic, Gladiator, The Patriot, Breakfast at Tiffanys, Un Coeur en Hiver, To Live, Happy Times, The Road Home, Not One Less, Ju Dou, Red Sorghum, The Empire of the Sun, Gone With the Wind, The Godfather, 2001, Clockwork Orange, Blade Runner, Deer Hunter, Mean Streets, Grease, Urban Cowboy, Saturday Night Fever, The Sound of Music, Copland, Xiu Xiu, Dances With Wolves</p>
                      <p><b>Directors</b>: Kubrick, Francis Copolla, Zhang Yimou, Anh Hung Tran, Steven Spielberg</p>
                    </td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Television</th>
                    <td className="sidebar-table-data">
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
                    <th className="sidebar-table-header" scope="row">Status:</th>
                    <td className="sidebar-table-data">Single</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Here For:</th>
                    <td className="sidebar-table-data">Networking, Dating, Serious Relationships, Friends</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Hometown:</th>
                    <td className="sidebar-table-data">San Diego</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Ethnicity:</th>
                    <td className="sidebar-table-data">White / Caucasian</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Zodiac Sign:</th>
                    <td className="sidebar-table-data">Libra</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Smoke / Drink:</th>
                    <td className="sidebar-table-data">No / No</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">Occupation:</th>
                    <td className="sidebar-table-data">MySpace</td>
                  </tr>
                </tbody>
              </table>
            </section>
            {/* Tom's Schools Section */}
            <section className="schools">
              <table className="sidebar-table">
                <caption>
                <h2 className="sidebar-table-h2">Tom's Schools</h2>
                </caption>
                <tbody>
                  <tr>
                    <th className="sidebar-table-header" scope="row">
                      <ul>
                        <li><a href="#">University Of California-Los Angeles</a></li>
                        <li>Los Angeles, CALIFORNIA</li>
                        <li>Graduated: <a href="#">2000</a></li>
                        <li>Degree: Master's Degree</li>
                        <li>Major: Film - Critical Studies</li>
                      </ul>
                    </th>
                    <td className="sidebar-table-data">1999 to 2000</td>
                  </tr>
                  <tr>
                    <th className="sidebar-table-header" scope="row">
                      <ul>
                        <li><a href="#">University Of California-Berkeley</a></li>
                        <li>Berkeley, CALIFORNIA</li>
                        <li>Graduated: <a href="#">1997</a></li>
                        <li>Student status: Alumni</li>
                        <li>Degree: Bachelor's Degree</li>
                        <li>Major: English & Rhetoric</li>
                        <li>Clubs: DECAL: Literary Theory</li>
                      </ul>
                    </th>
                    <td className="sidebar-table-data">1993 to 1996</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </aside>
  )
}