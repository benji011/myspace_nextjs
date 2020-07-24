// Next.js libraries
import Head from 'next/head'
import Link from 'next/link'
// Profile components
import Header from '../header/header'
import Footer from '../footer/footer'
import SideBar from '../profile/sidebar/sidebar'
import UserNetwork from '../profile/usernetwork/usernetwork'
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
        <main className={styles.mainCol}>
          <UserNetwork/>
          <Blog/>
  {/*        <section className="blog">
            <p><b>Tom's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
            <p>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
            <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
            <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
            <p>October 29th - MySpace 2-Year Anniversary Concert! (<a href="#">view more</a>) </p>
            <p>NIN, QOTSA, Acoustic and Punk Tours (!) (<a href="#">view more</a>)</p>
            <p>[<a href="#">View All Blog Entries</a>]</p>
          </section>
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Tom's Blurbs</h2>
            </header>
            <h3>About me:</h3>
            <p>I'm here to help you with <b>MySpace</b>. Send me a message if you're confused by anything. <span className="info">Before asking me a question, please check the <a href="#">FAQ</a> to see if your question has already been answered.</span></p>
            <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends" and remove me!</p>
            <p><strong>Also, feel free to tell me what features you want to see on MySpace and if I think it's cool, we'll do it!</strong></p>
            <p>If you want a tutorial on HTML/designing your page, check this out: <a href="#">Mack</a>!!</p>
            <p>Note: If you try to view my friends list you won't see all 24,000,000 million people. This was bogging down the system, so we made it only show 40 people. So you wont be able to see the friends on my list.</p>
            <h3>Who I'd like to meet:</h3>
            <p>I'd like to meet people who educate, inspire or entertain me... I have a few close friends I've known all my life. I'd like to make more. </p>
          </section>
          <section className="friends">
            <header className="main-section-header">
              <h2 className="main-section-h2">Tom's Friend Space</h2>
            </header>
            <p><b>Tom has <span className="focus-highlight">73090713</span> Friends.</b></p>
            <div className="friend-pic-container">
              <figure>
                <figcaption><a href="#">MySpace<br />Records</a></figcaption>
                <img src="static/img/myspace-records.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">Andi</a></figcaption>
                <img src="static/img/andi.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">abraham</a></figcaption>
                <img src="static/img/abraham.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">tanner</a></figcaption>
                <img src="static/img/tanner.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">Tams</a></figcaption>
                <img src="static/img/tams.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">MySpace<br />Records</a></figcaption>
                <img src="static/img/myspace-records-2.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">J-e-n-n-i</a></figcaption>
                <img src="static/img/jenni.jpg" />
              </figure>
              <figure>
                <figcaption><a href="#">MySpace<br />Records</a></figcaption>
                <img src="static/img/myspace-records-3.jpg" />
              </figure>
            </div>
            <p className="friends-list-link"><a href="#">View All of Tom's Friends</a></p>
          </section>
          <section className="comment-wall">
            <header className="main-section-header">
              <h2 className="main-section-h2">Tom's Friends Comments</h2>
            </header>
            <p id="comment-counter"><b>Displaying <span className="focus-highlight">10</span> of <span className="focus-highlight">780610</span> comments (<a href="#">View/Edit All Comments</a>)</b></p>
            <table>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Gram</a></figcaption>
                    <img src="static/img/gram.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 6:54 PM</h3>
                  <p>Dude, Appetite for Destruction Rocks, same with Alice Cooper and KISS</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Amanda Lepore</a></figcaption>
                    <img src="static/img/amanda.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 6:51 PM</h3>
                  <p>tom=new money. ;D congrats darling</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Rhys__=]</a></figcaption>
                    <img className="friends-comment-img" src="static/img/missing.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 5:30 PM</h3>
                  <p>tom you have changed the net dude. well in. rhys</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">SLACKER</a></figcaption>
                    <img src="static/img/slacker.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:37 PM</h3>
                  <p>dont listen to those girls, they don't know what they're talking about!! I LOVE YOUR DISPLAY PIC, seeing it makes my day a little better!!!</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Brian</a></figcaption>
                    <img className="friends-comment-img"src="static/img/missing.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:13 PM</h3>
                  <p>Myspace prevented another potential Columbine.You must be very proud!</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Nnenna</a></figcaption>
                    <img src="static/img/nnenna.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:08 PM</h3>
                  <p>Whats up tom...it would be really cool if poets and spoken word artists had a way to display their talent. Its really hard to find spoken word in the music section.</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Woodrow Wilson</a></figcaption>
                    <img className="friends-comment-img" src="static/img/missing.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:06 PM</h3>
                  <p>Despite all the controversy, myspace proved to be useful in saving people today. Good press Mr. Anderson!</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Vicky</a></figcaption>
                    <img className="friends-comment-img" src="static/img/missing.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:05 PM</h3>
                  <p>Just wanna say tks to you :p Everything seems so wonderful, i can change my skin myself :p</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">Camy</a></figcaption>
                    <img className="friends-comment-img" src="static/img/missing.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:04 PM</h3>
                  <p>come on!!! A*teen and radiohead together on the same list ???</p>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <figure>
                    <figcaption><a href="#">James Dean</a></figcaption>
                    <img src="static/img/james.jpg" />
                  </figure>
                </th>
                <td>
                  <h3>4/22/2006 12:04 PM</h3>
                  <p>Kundera and Orwell are great.. Do you know Arthur Koestler? Have you read Hommage to Catalonia?</p>
                </td>
              </tr>
            </table>
            <p id="add-comment"><a href="#">Add Comment</a></p>
          </section>*/}
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
