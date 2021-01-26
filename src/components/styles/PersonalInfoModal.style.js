import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'relaive'
  },
  content: {
    position: 'absolute',
    width: '50%',
    top: '20%',
    left: '10%',
    display: 'flex',
    flexDirection: 'column'
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  aboutTitle: {
    padding: 5
  },
  aboutDescription: {
    padding: 5
  },
  linkBtn: {
    color: 'lightgray',
    textDecoration: 'underline',
    padding: 10,
    margin: 5
  },
  subtitleCopyright: {
    color: '#aaa',
    fontSize: '0.5rem'
  },
  buttonContainer: {
    // display: 'flex'
  }
}))

export default useStyles
