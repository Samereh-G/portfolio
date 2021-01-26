import React from 'react'
import useStyles from './styles/Projects.style'

export default function Projects() {
  const classes = useStyles()

  return (
    <div
      className={`${classes.horizontalScrollWrapper} ${classes.squares} ${classes.rectangles}`}
    >
      <div>item 1</div>
      <div>item 2</div>
      <div>item 3</div>
      <div>item 4</div>
      <div>item 5</div>
      <div>item 6</div>
      <div>item 7</div>
      <div>item 8</div>
      <div>item 9</div>
      <div>item 10</div>
    </div>
  )
}
