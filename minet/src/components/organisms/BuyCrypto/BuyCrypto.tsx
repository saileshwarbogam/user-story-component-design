import { Grid } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

interface BuyCrypto {
    buyingAmount : string;
    
}
export const BuyCrypto = (props: BuyCrypto) => {


  return (
    <>
        <Grid container>
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Typography children="You are buying" variant='h3'/>
                    </Grid>
                    <Grid item>
                        <Typography children={props.buyingAmount} variant='h2'/>
                    </Grid>
                    <Grid item>
                        <Typography children="1BTC = $3,406,069.54" variant='h3'/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                {/* payment method */}
                {/* delivey fee */}
            </Grid>
            <Grid item>
                {/* Link to checkout */}
                <Button children='Buy Now' variant='contained' onclick={()=>{}}/>
            </Grid>

        </Grid>
    </>
  )
}
