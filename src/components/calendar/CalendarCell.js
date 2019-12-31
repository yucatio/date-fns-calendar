import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

const useStyles = makeStyles(theme => ({
  calendarCell: {
    color: ({wday, isTargetMonth}) => {
      if(isTargetMonth) {
        switch(wday) {
          case 0: // Sunday
            return red[500]
          case 6: // Saturday
            return blue[500]
          default:
            return theme.palette.text.primary
        }
      } else {
        // previous or next month
        switch(wday) {
            case 0: // Sunday
            return red[200]
          case 6: // Saturday
            return blue[200]
          default:
            return theme.palette.text.secondary
        }
      }
    },
    backgroundColor: ({isToday}) =>
      isToday ? pink[50] : "transparent"
  },
}))


function CalendarCell(props) {
  const {wday, isTargetMonth, isToday, children, ...other} = props
  const classes = useStyles(props)
  return (<TableCell className={classes.calendarCell} {...other}>{children}</TableCell>)
}

export default CalendarCell
