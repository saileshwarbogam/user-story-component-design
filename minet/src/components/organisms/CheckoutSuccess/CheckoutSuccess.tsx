import { Grid } from '@mui/material'
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

interface CheckoutSuccessProps {
    amount : string;

}

export const CheckoutSuccess = (props : CheckoutSuccessProps) => {

  return (
    <>
        <Grid container>
            <Grid item>
                <Avatar src='tickmark.png'/>
            </Grid>
            <Grid item>
                <Typography children={props.amount} variant="h1"/>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Grid item>
                        {/* Link to buy page */}
                        <Button children='Buy Crypto' onclick={()=>{}} variant='outlined'/>
                    </Grid>
                    <Grid item>
                        {/* Linl to wallet page */}
                        <Button children='Go To Usd Coin' onclick={()=>{}} variant='contained'/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}
