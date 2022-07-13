import { Grid } from '@mui/material'
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar'
import { Typography } from '../../atoms/Typography/Typography'

interface CryptoCardInterface {
    src: string;
    currencyName : string;
    currencyValue : string;
} 

export const CryptoCard = (props : CryptoCardInterface) => {
  return (
    <>
        <Grid container direction="column" >
            <Grid item>
                <Avatar src={props.src}/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children={props.currencyName}/>
            </Grid>
            <Grid item>
                <Typography variant='h3' children={props.currencyValue}/>
            </Grid>

        </Grid>
    </>
  )
}
