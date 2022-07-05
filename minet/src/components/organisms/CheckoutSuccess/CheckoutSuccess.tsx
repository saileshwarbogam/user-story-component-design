import { Grid } from '@mui/material'
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

export const CheckoutSuccess = () => {
    const handleBuyCrypto = ()=> {

    }
    const handleGoToUsdCoin = () => {
        
    }
  return (
    <>
        <Grid container>
            <Grid item>
                <Avatar src='tickmark.png'/>
            </Grid>
            <Grid item>
                <Typography children="0.023451 BTC" variant="h1"/>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item>
                        <Button children='Buy Crypto' onclick={handleBuyCrypto} variant='outlined'/>
                    </Grid>
                    <Grid item>
                        <Button children='Go To Usd Coin' onclick={handleGoToUsdCoin} variant='contained'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}
