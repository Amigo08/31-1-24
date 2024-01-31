import { Button, TextField } from '@mui/material'
import React from 'react'

const BookingTable = () => {
  return (
    <div>
      <h1>BookingTable</h1>
      <TextField id="outlined-basic" label="UserId" variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="TicketNumber" variant="outlined" /> <br/><br/>
      <TextField id="outlined-basic" label="TotalPrice" variant="outlined" /><br/><br/>
      <Button variant="contained" color="success">
  Submit
</Button>
      </div>
  )
}

export default BookingTable