import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleTextContainer: {
    textAlign: 'center'
  },
  circTxt: {
    position: 'absolute',
    color: 'white',
    display: 'inline-block',
    top: 30,
    left: 30,
    textShadow: '0 4px 8px #666, 0 6px 16px #999'
  }
}))

export default useStyles
