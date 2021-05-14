// React
import React from "react"
import Grid from "@material-ui/core/Grid"

import useStyles from "../../theme"

const Intro = () => {
  const theme = useStyles()

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={theme.intro}>
      <h1 className={`${theme.nomargin} ${theme.whitecolor}`}>Reacterial</h1>
      <h3 className={`${theme.nomargin} ${theme.greycolor}`}>Material UI + React</h3>
    </Grid>
  )
}

export default Intro
