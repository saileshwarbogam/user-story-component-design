import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'

export const AmountDetails = () => {
    const handleBuyMax = ()=> {

    }
    return (
        <>
            <Typography children="Amount details"/>
            <Grid container>
                <Grid item>
                <Typography  children="$34,000"/>
                </Grid>
                <Grid item>
                <Button children="Buy max" variant='outlined' onclick={handleBuyMax}/>
                </Grid>
            </Grid>
        </>
    )
}
