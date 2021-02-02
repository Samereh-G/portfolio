import React from 'react'
import { Spring } from 'react-spring/renderprops'
import { Typography } from '@material-ui/core'
import useStyles from './styles/ProfileTitle.style'

export default function ProfileTitle() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.circleTextContainer}>
        <div className={classes.circTxt} id="shadow">
          <Typography variant="h6" color="primary" style={{ fontWeight: 200 }}>
            In progress
            <span>...</span>
          </Typography>
        </div>
      </div>

      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 100 }}
        config={{ duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div>
              <Typography
                variant="h2"
                color="primary"
                style={{ fontWeight: 700 }}
              >
                Samereh Gholami
              </Typography>
            </div>
          </div>
        )}
      </Spring>

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div>
              <Typography variant="h6" color="primary">
                WEB DEVELOPER
              </Typography>
            </div>
          </div>
        )}
      </Spring>
    </div>
  )
}
