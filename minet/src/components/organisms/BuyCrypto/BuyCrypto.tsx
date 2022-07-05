import { Grid } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'
import { Typography } from '../../atoms/Typography/Typography'

export const BuyCrypto = () => {

    const handleBuyNow = ()=> {

    }
  return (
    <>
        <Grid container>
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Typography children="You are buying" variant='h3'/>
                    </Grid>
                    <Grid item>
                        <Typography children="0.023451 BTC" variant='h2'/>
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
                <Button children='Buy Now' variant='contained' onclick={handleBuyNow}/>
            </Grid>

        </Grid>
    </>
  )
}
