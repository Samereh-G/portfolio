import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/ProfileTitle.style'

export default function ProfileTitle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.circleTextContainer}>
        <div className={classes.circTxt} id="shadow">
          <Typography variant="h6" color="primary" style={{ fontWeight: 200 }}>
            In progress
            <span className="animate__animated animate__infinite animate__fadeInLeft infinite animate__delay-0.2s">
              ...
            </span>
          </Typography>
        </div>
      </div>
      <div className="animate__animated animate__fadeInDown animate__delay-1s">
        <Typography variant="h2" color="primary" style={{ fontWeight: 700 }}>
          Samereh Gholami
        </Typography>
      </div>
      <div className="animate__animated animate__fadeInDown animate__delay-2s">
        <Typography variant="h6" color="primary">
          WEB DEVELOPER
        </Typography>
      </div>
    </div>
  )
}
