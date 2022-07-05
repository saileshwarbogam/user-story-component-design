import { Grid } from '@mui/material'
import React from 'react'
import { Typography } from '../../atoms/Typography/Typography'
import { TimePeriod } from '../../molecules/TimePeriod/TimePeriod'

export const MyPortfolio = () => {
  return (
    <div>
        
        <Grid container direction="row">
            <Grid item>
                <Typography children='Total investment' variant='h3'/>
                <Typography children='$11,900,204' variant='h2'/>
            </Grid>
            <Grid item>
                <Typography children='Bitcoin' variant='h3'/>
                <Typography children='$34,000' variant='h2'/>
            </Grid>
            <Grid item>
            <TimePeriod/>
            </Grid>
            <Grid item>
                {/* Render Graphs  */}
            </Grid>
        </Grid>

    </div>
  )
}
