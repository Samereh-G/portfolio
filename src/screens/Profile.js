import React from 'react'
import ProfileTitle from '../components/ProfileTitle'
import useStyles from './styles/Profile.style'

export default function Profile() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <video autoPlay muted loop className={classes.backgroundVideo}>
        <source src="videos/waveInBlack&White.mp4" type="video/mp4" />
      </video>
      <ProfileTitle />
    </div>
  )
}
