import { Card, CardContent, CardMedia } from '@material-ui/core'
import React from 'react'
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { Typography } from '../../atoms/Typography/Typography'
import { ReadingTime } from '../ReadingTime/ReadingTime';

interface BookCardProps {
  bookImage : string;
  bookName : string;
  authorName : string;
  timeRead : string;
}

export const BookCard = (props: BookCardProps) => {
  const handleChange = () => {
    
  }
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.bookImage}
        alt="book name"
        onClick={handleChange}
      />
      <CardContent>
        <Typography  variant="h5" children={props.bookName}/>
        <Typography variant="body2" children={props.authorName}/>
        <ReadingTime timeRead = {props.timeRead}/>
        <ProgressBar/>
      </CardContent>
      
    </Card>
  )
}
