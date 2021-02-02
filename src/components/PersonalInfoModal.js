import { ButtonBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/PersonalInfoModal.style'

export default function PersonalInfoModal() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.aboutTitle}>
          <Typography variant="h2" color="primary">
            Hello,
            <br /> Is it me you&apos;re looking for?
          </Typography>
        </div>

        <div className={classes.aboutDescription}>
          <Typography variant="body1" color="primary">
            I&apos;m an Eindhoven based Front-end Web Developer with experience
            of blending the art of design
            <br />
            and skills of programming.
            <br />
            I have balanced a rigorous course load and have built abilities in
            developing web applications.
            <br />
            Proven track record of providing accurate and effective code with
            <br />
            HTML5, CSS3, JavaScript(Es6/Es7), React, NodeJS, Bootstrap and
            jQuery.
            <br />
            New experiences and challengas are my things.
          </Typography>
        </div>
        <div>
          <ButtonBase className={classes.linkBtn}>GitHub</ButtonBase>
          <ButtonBase className={classes.linkBtn}>linkedIn</ButtonBase>
        </div>
        <div className={classes.subtitleCopyright}>
          <Typography>
            <div>
              &copy; designed and coded with resentment and love by Samereh
            </div>
          </Typography>
        </div>
      </div>
    </div>
  )
}
