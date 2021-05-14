// React
import React from "react"
import Intro from "../components/organisms/Intro"
import Wrapper from "../components/templates/Wrapper"
import Grid from "@material-ui/core/Grid"
import useStyles from "../theme"

const Index = () => {
  const theme = useStyles()

  return (
    <Grid container direction="column" justify="center" alignItems="center" className={theme.darkback} spacing={0}>
      <Wrapper>
        <Intro />
      </Wrapper>
    </Grid>
  )
}

export default Index
