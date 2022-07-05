import { Grid } from '@mui/material'
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Typography } from '../../atoms/Typography/Typography'

export const CryptoCard = () => {
  return (
    <>
        <Grid container direction="column" >
            <Grid item>
                <Avatar src='bitcoin.png'/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children="Bitcoin"/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children="$3,406,069.54"/>
            </Grid>

        </Grid>
    </>
  )
}
