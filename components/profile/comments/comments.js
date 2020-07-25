import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './comments.module.css'

export default function CommentWall() {
  return (
          <section className={styles.commentWall}>
            <header className={styles.mainSectionHeader}>
              <h2 className={styles.mainSectionH2}>Tom's Friends Comments</h2>
            </header>
            <p id={styles.commentCounter}>
              <b>Displaying
                <span className={styles.focusHighlight}>10</span> of
                <span className={styles.focusHighlight}>780610</span>
                comments
                (
                  <a href="#">View/Edit All Comments</a>)
              </b>  
            </p>
            <table className={styles.commentWallTable}>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Gram</a></figcaption>
                      <img src="images/gram.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 6:54 PM</h3>
                  <p>Dude, Appetite for Destruction Rocks, same with Alice Cooper and KISS</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Amanda Lepore</a></figcaption>
                      <img src="images/amanda.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 6:51 PM</h3>
                  <p>tom=new money. ;D congrats darling</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Rhys__=]</a></figcaption>
                      <img className={styles.friendsCommentImg} src="images/missing.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 5:30 PM</h3>
                  <p>tom you have changed the net dude. well in. rhys</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">SLACKER</a></figcaption>
                      <img src="images/slacker.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:37 PM</h3>
                  <p>dont listen to those girls, they don't know what they're talking about!! I LOVE YOUR DISPLAY PIC, seeing it makes my day a little better!!!</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Brian</a></figcaption>
                      <img className={styles.friendsCommentImg}src="images/missing.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:13 PM</h3>
                  <p>Myspace prevented another potential Columbine.You must be very proud!</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Nnenna</a></figcaption>
                      <img src="images/nnenna.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:08 PM</h3>
                  <p>Whats up tom...it would be really cool if poets and spoken word artists had a way to display their talent. Its really hard to find spoken word in the music section.</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Woodrow Wilson</a></figcaption>
                      <img className={styles.friendsCommentImg} src="images/missing.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:06 PM</h3>
                  <p>Despite all the controversy, myspace proved to be useful in saving people today. Good press Mr. Anderson!</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Vicky</a></figcaption>
                      <img className={styles.friendsCommentImg} src="images/missing.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:05 PM</h3>
                  <p>Just wanna say tks to you :p Everything seems so wonderful, i can change my skin myself :p</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">Camy</a></figcaption>
                      <img className={styles.friendsCommentImg} src="images/missing.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:04 PM</h3>
                  <p>come on!!! A*teen and radiohead together on the same list ???</p>
                </td>
              </tr>
              <tr>
                <th className={styles.commentWallTh} scope="row">
                  <figure className={styles.commentWallFigure}>
                    <figcaption className={styles.commentWallFigcaption}>
                      <a href="#">James Dean</a></figcaption>
                      <img src="images/james.jpg" />
                  </figure>
                </th>
                <td className={styles.commentWallTd}>
                  <h3>4/22/2006 12:04 PM</h3>
                  <p>Kundera and Orwell are great.. Do you know Arthur Koestler? Have you read Hommage to Catalonia?</p>
                </td>
              </tr>
            </table>
            <p id={styles.addComment}>
              <a href="#">Add Comment</a></p>
          </  section>
  )
}