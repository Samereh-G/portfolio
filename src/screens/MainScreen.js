import React, { useState } from 'react'
import { ButtonBase, Modal, Tooltip } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PersonalInfoModal from '../components/PersonalInfoModal'
import Profile from './Profile'
import ProjectsLeftToRightScroll from './ProjectsLeftToRightScroll'
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
      <div className={classes.page}>
        <Profile />
      </div>

      <div>
        <CopyToClipboard text="samereh@samerehgholami.com">
          <Tooltip title="click to copy" TransitionComponent={Fade}>
            <ButtonBase className={classes.emailBtn}>
              samereh@samerehgholami.com
            </ButtonBase>
          </Tooltip>
        </CopyToClipboard>
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
