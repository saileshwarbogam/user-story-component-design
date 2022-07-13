import { Grid } from '@mui/material';
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Typography } from '../../atoms/Typography/Typography';

interface TransactionCardProps {
  day : string;
  date : string;
  senderName : string;
  cryptoPurchased : string;
  priceInDollars : string;
  src:string;
  isPurchased : boolean;
}

export const TransactionCard = (props: TransactionCardProps) => {
  return (
    <Grid container direction="row">

      <Grid item>
        <Grid>
          <Typography children={props.day} variant="h3"/>
          <Typography children={props.date} variant="h2"/>
        </Grid>
      </Grid>

      <Grid item>
        <Avatar src={props.src}/>
      </Grid>
          <Typography children="Bitcoin" variant="h3"/>
          <Typography children={"From "+props.senderName} variant="h3"/>
          {
            props.isPurchased &&
            <Typography children="Purchased" variant="h3"/>
          }

      <Grid item>
          <Typography children={props.cryptoPurchased} variant="h3"/>
          <Typography children={props.priceInDollars} variant="h3"/>

      </Grid>

    </Grid>
  )
}
