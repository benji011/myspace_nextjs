import Head from 'next/head'
import Layout from '../../layout/layout'
import styles from './avatar.module.css'

export default function Avatar() {
  return (
          <div className={styles.profilePictureContainer}>
            <img className={styles.profilePic} src="images/tom-pic.jpg" alt="A profile picture of Tom, the creator of MySpace."/>
            <p className={styles.personalMsg}><b>":-)"</b></p>
            <ul className={styles.genderAge}>
              <li className={styles.genderAgeLi}>Male</li>
              <li className={styles.genderAgeLi}>30 years old</li>
              <li className={styles.genderAgeLi}>Santa Monica,</li>
              <li className={styles.genderAgeLi}>CALIFORNIA</li>
              <li className={styles.genderAgeLi}>United States</li>
            </ul>
            <ul className={styles.lastLogin}>
              <li className={styles.lastLoginLi}>Last Login:</li>
              <li className={styles.lastLoginLi}>4/22/2006</li>
            </ul>
            <p className={styles.picsVideos}>View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
          </div>
  )
}