import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  slider: {
    width: '100%,',
    height: '100%',
    position: 'relative',
    transition: 'top 2s ease-in'
  },
  page: {
    width: '100%',
    height: '100%'
    // position: 'relative'
  },
  aboutBtn: {
    position: 'fixed',
    top: '50vh',
    left: '2vw',
    color: '#fff',
    transform: 'rotate(-90deg)',
    zIndex: 1400
  },
  emailBtn: {
    position: 'fixed',
    top: '50vh',
    right: '0vw',
    color: '#fff',
    transform: 'rotate(-90deg)',
    zIndex: 1400
    // fontSize: '0.5 rem'
  },
  projectsBtn: {
    position: 'fixed',
    top: '90vh',
    left: '50vw',
    color: '#fff',
    zIndex: 1400
  }
}))

export default useStyles
