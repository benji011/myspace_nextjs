import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './friends.module.css'

export default function FriendsSpace() {
  return (
          <section>
            <header className={styles.mainSectionHeader}>
              <h2 className={styles.mainSectionH2}>Tom's Friend Space</h2>
            </header>
            <p><b>Tom has <span className={styles.focusHighlight}>73090713</span> Friends.</b></p>
            <div className={styles.friendPicContainer}>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">MySpace<br />Records</a>
                </figcaption>
                <img src="images/myspace-records.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">Andi</a>
                </figcaption>
                <img src="images/andi.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">abraham</a>
                </figcaption>
                <img src="images/abraham.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">tanner</a>
                </figcaption>
                <img src="images/tanner.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">Tams</a>
                </figcaption>
                <img src="images/tams.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">MySpace<br />Records</a>
                </figcaption>
                <img src="images/myspace-records-2.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">J-e-n-n-i</a>
                </figcaption>
                <img src="images/jenni.jpg" />
              </figure>
              <figure className={styles.friendPicContainerFigure}>
                <figcaption className={styles.friendPicContainerFigcaption}>
                  <a href="#">MySpace<br />Records</a>
                </figcaption>
                <img src="images/myspace-records-3.jpg" />
              </figure>
            </div>
            <p className={styles.friendsListLink}>
              <a href="#">View All of Tom's Friends</a>
            </p>
          </section>
  )
}