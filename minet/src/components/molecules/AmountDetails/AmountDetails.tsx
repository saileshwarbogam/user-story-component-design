import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from '../../atoms/Button/Button'

interface AmountDetailsProps {
    amount : string
}

export const AmountDetails = (props : AmountDetailsProps) => {
    const handleBuyMax = ()=> {

    }
    return (
        <>
            <Typography children="Amount details"/>
            <Grid container>
                <Grid item>
                <Typography  children={props.amount}/>
                </Grid>
                <Grid item>
                <Button children="Buy max" variant='outlined' onclick={handleBuyMax}/>
                </Grid>
            </Grid>
        </>
    )
}
