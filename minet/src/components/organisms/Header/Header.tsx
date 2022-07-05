import { Avatar } from '@material-ui/core'
import { Grid } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

export const Header = () => {
    const handleSell =()=> {

    }
    const handleBuy = () => {

    }
  return (
    <>
        <Grid container>
            <Grid item>
                <Typography children="Dashboard" variant='h3'/>
            </Grid>
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Button children="sell" onclick={handleSell} variant="contained"/>
                    </Grid>
                    <Grid item>
                        <Button children="Buy" onclick={handleBuy} variant="contained"/>
                    </Grid>
                    <Grid item>
                        <Avatar src="user.png"/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}
