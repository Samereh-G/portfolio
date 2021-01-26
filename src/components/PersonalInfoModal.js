import { ButtonBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/PersonalInfoModal.style'

export default function PersonalInfoModal() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.aboutTitle}>
          {/* <div className={classes.aboutTitle}> */}
          <Typography variant="h2" color="primary">
            <div className="animate__animated animate__fadeInDown animate__delay-1s">
              Hello,
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-1s">
              Is it me you&apos;re looking for?
            </div>
          </Typography>
        </div>

        <div className={classes.aboutDescription}>
          <Typography variant="body1" color="primary">
            <div className="animate__animated animate__fadeInDown animate__delay-2s">
              I&apos;m an Eindhoven based Front-end Web Developer with
              experience of blending the art of design
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
            </div>
            {/* <div className="animate__animated animate__fadeInDown animate__delay-3s">
              I&apos;m an Eindhoven based Front-end Web Developer with
              experience of blending the art of design
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              and skills of programming.
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              I have balanced a rigorous course load and have built abilities in
              developing web applications.
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              Proven track record of providing accurate and effective code with
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              HTML5, CSS3, JavaScript(Es6/Es7), React, NodeJS, Bootstrap and
              jQuery.
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              Seeking a Junior Web Developer position as my first role.
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-3s">
              New experiences and challengas are my things.
            </div> */}
          </Typography>
        </div>
        <div
          className={`${classes.buttonContainer} animate__animated animate__fadeInDown animate__delay-3s`}
        >
          <ButtonBase className={classes.linkBtn}>
            hello@samerehgholami.com
          </ButtonBase>
          <ButtonBase className={classes.linkBtn}>github</ButtonBase>
          {/* <ButtonBase className={classes.linkBtn}>gitlab</ButtonBase> */}
          <ButtonBase className={classes.linkBtn}>linkedIn</ButtonBase>
        </div>
        <div className={classes.subtitleCopyright}>
          <Typography>
            <div className="animate__animated animate__fadeInDown animate__delay-4s">
              &copy; designed and coded with resentment and love by Samereh
            </div>
          </Typography>
        </div>
      </div>
    </div>
  )
}
