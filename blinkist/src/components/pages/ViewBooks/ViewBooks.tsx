import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react'
import { BookThumbnail } from '../../atoms/BookThumbnail/BookThumbnail';
import { Clock } from '../../atoms/Clock/Clock';
import { MoreIcon } from '../../atoms/MoreIcon/MoreIcon';
import { ProgressBar } from '../../atoms/ProgressBar/ProgressBar';
import { Author } from '../../atoms/Typography/Author/Author';
import { BookName } from '../../atoms/Typography/BookName/BookName';
import { MyLibrary } from '../../atoms/Typography/MyLibrary/MyLibrary'
import { TimeRead } from '../../atoms/Typography/TimeRead/TimeRead';

export const ViewBooks = () => {
    useEffect(()=>{
        // getBookDetails
    });
  return (
    <div>
        <MyLibrary/>
        {/* use map to render all books */}
        <Grid>
            <BookThumbnail/>
            <Grid>
                <BookName/>
                <Author/>
                <Grid>
                    <Clock/>
                    <TimeRead/>
                </Grid>
                <MoreIcon/>
                <ProgressBar/>
            </Grid>
        </Grid>
    </div>
  )
}
