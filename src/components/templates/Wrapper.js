import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "../../theme"

const Wrapper = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid item className={classes.item} xs={12} sm={12} md={10} lg={9} container>
      {children}
    </Grid>
  )
}

export default Wrapper
