import { Grid, Tabs } from '@material-ui/core'
import React from 'react'
import { BookThumbnail } from '../../atoms/BookThumbnail/BookThumbnail'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'
import { ReadingTime } from '../../molecules/ReadingTime/ReadingTime'

export const BookDetails = () => {
  return (
    <>
      <Grid container direction="row">
        <Grid item>
          <Typography children='Book Name' variant="h2"/>
          <Typography children='Description' variant="h3"/>
          <Typography children="Author Name" variant='h3'/>
          <ReadingTime timeRead='time'/>
          <Button children='Read Now' variant="contained" onclick={()=>{}}/>
          <Button children='Buy Book' variant="outlined" onclick={()=>{}}/>
          <Button children='Send to Kindle' variant="" onclick={()=>{}}/>
          <Tabs />
        </Grid>
        <Grid item>
          <BookThumbnail src='book.png'/>
        </Grid>
      </Grid>
    </>
  )
}
