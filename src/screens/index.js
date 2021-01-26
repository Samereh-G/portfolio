import { ButtonBase, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import PersonalInfoModal from '../components/PersonalInfoModal'
import Profile from './Profile'
import ProjectsLeftToRightScroll from './ProjectsLeftToRightScroll'
// import Projects from './Projects'
import useStyles from './styles/index.style'

function MainScreen() {
  const classes = useStyles()
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false)
  const [projectsModalIsOpen, setProjectsModalIsOpen] = useState(false)

  const handleToggleAboutModal = () => {
    setInfoModalIsOpen(!infoModalIsOpen)
  }

  const handleToggleProjectsModal = () => {
    setProjectsModalIsOpen(!projectsModalIsOpen)
  }

  return (
    <div className={classes.root}>
      <div
        id="sliderContainer"
        className={classes.slider}
        style={{ top: '0vh' }}
      >
        <div className={classes.page}>
          <Profile />
        </div>
        <div className={classes.page}>
          {/* <Projects /> */}
          {/* <ProjectsLeftToRightScroll /> */}
        </div>
      </div>
      <ButtonBase className={classes.aboutBtn} onClick={handleToggleAboutModal}>
        {infoModalIsOpen ? 'Close' : 'About'}
      </ButtonBase>

      <ButtonBase
        className={classes.projectsBtn}
        onClick={handleToggleProjectsModal}
      >
        {projectsModalIsOpen ? 'Close' : 'Projects'}
      </ButtonBase>

      <Modal open={infoModalIsOpen}>
        <div>
          <PersonalInfoModal />
        </div>
      </Modal>

      <Modal open={projectsModalIsOpen}>
        <div>
          <ProjectsLeftToRightScroll
            projectsModalIsOpen={projectsModalIsOpen}
          />
        </div>
      </Modal>
    </div>
  )
}

export default MainScreen
