import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'

import Calendar from './calendar/'
import Footer from './Footer'

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(5, 10, 1, 10),
    padding: theme.spacing(5, 5),
  },
}))

function App() {
  const classes = useStyles()

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Calendar />
      </Paper>
      <Footer />
    </div>
  )
}

export default App
