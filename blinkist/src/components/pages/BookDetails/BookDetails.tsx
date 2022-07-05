import { Grid, Tabs, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { BookThumbnail } from '../../atoms/BookThumbnail/BookThumbnail'
import { Clock } from '../../atoms/Clock/Clock'
import { TimeRead } from '../../atoms/Typography/TimeRead/TimeRead'
import { Header } from '../../molecules/Header/Header'
import { DialogBox } from '../../organisms/DialogBox/DialogBox'

export const BookDetails = () => {
    const [open, setOpen] = useState<Boolean>(false);
  return (
    <div>
        <Header/>
        <Grid>
            <Grid item>
                <Typography/>
                <Typography/>
                <Typography/>
                <Grid>
                    <Grid item>
                        <Clock/>
                        <TimeRead/>
                    </Grid>
                    <Grid item>
                    <Clock/>
                        <TimeRead/>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item>
                        Button
                    </Grid>
                    <Grid item>
                        Button
                    </Grid>
                    <Grid item>
                    Button
                    </Grid>
                </Grid>

                <Tabs/>

            </Grid>
            <Grid item>
                <BookThumbnail/>
            </Grid>
        </Grid>

        {
            open &&
            <>
                <DialogBox/>
            </>
        }
    </div>
  )
}
