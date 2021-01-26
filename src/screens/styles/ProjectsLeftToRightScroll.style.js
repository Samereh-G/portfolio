import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  outerWrapper: {
    width: '100vh',
    height: '100vw',
    transform: 'rotate(-90deg) translateX(-100vh)',
    transformOrigin: 'top left',
    overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'absolute',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '700vw',
    transform: 'rotate(90deg) translateY(-100vh)',
    transformOrigin: 'top left'
  },
  slide: {
    width: '75vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  two: {
    // backgroundColor: 'brown'
  },
  three: {
    // backgroundColor: 'pink'
  },
  four: {
    // backgroundColor: 'yellow'
  },
  five: {
    // backgroundColor: 'gray'
  },
  six: {
    // backgroundColor: 'blue'
  },
  seven: {
    // backgroundColor: 'green'
  },
  projectBox: {
    width: '60%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    background: 'rgba(0, 0, 0, .4)',
    '& img': {
      width: '100%',
      height: '100%',
      zIndex: -1
    }
  },
  projectTitle: {
    position: 'absolute',
    // top: '40%',
    left: '-7%',
    maxWidth: '20%'
  },
  projectInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '97%',
    left: '90%'
  },
  infoVerticalLine: {
    borderLeft: '1px solid #fff',
    height: 70,
    marginBottom: 10
  },
  projectInfoBtn: {
    transform: 'rotate(-90deg)',
    color: '#fff'
  },
  infoBox: {
    background: 'gray',
    width: '100%',
    height: '100%'
  }
}))

export default useStyles
