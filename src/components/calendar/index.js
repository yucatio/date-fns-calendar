import React, { useState }  from 'react'

import CalendarCell from './CalendarCell'

import format from 'date-fns/format'
import getDate from 'date-fns/getDate'
import getDay from 'date-fns/getDay'
import isSameDay from 'date-fns/isSameDay'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import endOfWeek from 'date-fns/endOfWeek'
import eachWeekOfInterval from 'date-fns/eachWeekOfInterval'
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'
import startOfMonth from 'date-fns/startOfMonth'
import endOfMonth from 'date-fns/endOfMonth'
import isSameMonth from 'date-fns/isSameMonth'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  yearmonth: {
    margin: theme.spacing(2, 0, 1, 0),
  },
  tableHead: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
  },
}))

const getCalendarArray = date => {
  const sundays = eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date)
  })
  return sundays.map(sunday =>
    eachDayOfInterval({start: sunday, end: endOfWeek(sunday)})
  )
}

function Calendar(props) {
  const [targetDate, setTargetDate] = useState(new Date())
  const classes = useStyles()
  const calendar = getCalendarArray(targetDate)
  const today = new Date()

  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Button variant="outlined" onClick={() => setTargetDate(subMonths(targetDate, 1))}>前の月</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setTargetDate(new Date())}>今月</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={() => setTargetDate(addMonths(targetDate, 1))}>次の月</Button>
        </Grid>
      </Grid>
      <Typography variant="h4" align="center" className={classes.yearmonth}>{format(targetDate, 'y年M月')}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" classes={{head: classes.tableHead, }}>日</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>月</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>火</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>水</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>木</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>金</TableCell>
            <TableCell align="center" classes={{head: classes.tableHead, }}>土</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calendar.map((weekRow, rowNum) => (
            <TableRow key={rowNum}>
              {weekRow.map(date => (
                <CalendarCell key={getDay(date)} wday={getDay(date)} isTargetMonth={isSameMonth(date, targetDate)} isToday={isSameDay(date, today)} align="center">
                  {getDate(date)}
                </CalendarCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}

export default Calendar
