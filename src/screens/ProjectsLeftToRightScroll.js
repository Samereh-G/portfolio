import { ButtonBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles/ProjectsLeftToRightScroll.style'
// import RestaurantReviewPhoto from '../assets/React-App.svg'
import RestaurantReviewPhoto from '../assets/restaurant-review.png'
import ToDoApp from '../assets/To-do-list-app.png'

export default function ProjectsLeftToRightScroll() {
  const classes = useStyles()

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>
        <div className={classes.slide}>
          <div className={classes.projectBox}>
            <img src={RestaurantReviewPhoto} alt="restaurantReview" />
            <div className={classes.projectTitle}>
              <Typography variant="h2" color="primary">
                Restaurant Review
              </Typography>
            </div>

            <div className={classes.projectInfo}>
              <div className={classes.infoVerticalLine} />
              <div className={classes.projectInfoBtn}>
                <ButtonBase>info</ButtonBase>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.slide}>
          <div className={classes.projectBox}>
            <img src={ToDoApp} alt="todo-App" />
            <div className={classes.projectTitle}>
              <Typography variant="h2" color="primary">
                ToDo Application
              </Typography>
            </div>
            <div className={classes.projectInfo}>
              <div className={classes.infoVerticalLine} />
              <div className={classes.projectInfoBtn}>
                <ButtonBase>info</ButtonBase>
              </div>
            </div>
          </div>
        </div>

        <div className={`${classes.slide} ${classes.three}`}>
          <div className={classes.projectBox}>3</div>
        </div>
        <div className={`${classes.slide} ${classes.four}`}>
          <div className={classes.projectBox}>4</div>
        </div>
        <div className={`${classes.slide} ${classes.five}`}>
          <div className={classes.projectBox}>5</div>
        </div>
        <div className={`${classes.slide} ${classes.six}`}>
          <div className={classes.projectBox}>6</div>
        </div>
        <div className={`${classes.slide} ${classes.seven}`}>
          <div className={classes.projectBox}>7</div>
        </div>
      </div>
    </div>
  )
}
