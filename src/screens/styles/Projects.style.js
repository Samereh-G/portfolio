import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  // '::-webkit-scrollbar': { width: '2px', height: '2px' },
  '::-webkit-scrollbar': { width: '0px', height: '0px' },
  // '::-webkit-scrollbar-button': { width: '2px', height: '2px' },
  '::-webkit-scrollbar-button': { width: '0px', height: '0px' },
  div: { boxSizing: 'border-box' },
  horizontalScrollWrapper: {
    // position: 'absolute',
    display: 'block',
    top: '0',
    left: '0',
    width: 800,
    maxHeight: 800,
    margin: '0',
    background: '#abc',
    overflowY: 'auto',
    overflowX: 'hidden',
    transform: 'rotate(-90deg) translateY(-80px)',
    transformOrigin: 'right top',
    '& div': {
      display: 'block',
      padding: '5px',
      margin: 5,
      background: '#cab',
      transform: 'rotate(90deg)',
      transformOrigin: 'right top'
    }
  },
  squares: {
    padding: '60px 0 0 0',
    '& div': { width: '60px', height: '60px', margin: '10px' }
  },

  rectangles: {
    top: '100px',
    padding: '100px 0 0 0',
    '& div': {
      width: 100,
      height: 100,
      margin: 50,
      padding: 10,
      background: '#cab',
      transform: 'rotate(90deg) translateY(80px)',
      transformOrigin: 'right top'
    }
  }
}))

export default useStyles
