import { Grid } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

const timePeriod = [
    "1H",
    "24H",
    "1W",
    "1M",
    "1Y",
]

export const TimePeriod = () => {
  return (
    <>
        <Grid container direction="row">
            {
                timePeriod.map(period=>(
                    <Grid item>
                        <Typography children={period} variant="h3"/>
                    </Grid>
                ))
            }
        </Grid>
    </>
  )
}
