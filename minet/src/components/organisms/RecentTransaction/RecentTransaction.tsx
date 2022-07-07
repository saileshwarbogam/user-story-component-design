import { Grid } from '@mui/material';
import { any } from 'prop-types';
import React, { useEffect } from 'react'

interface RecentTransactionProps {
    date : string;
    isSold : boolean;
    isPurchased : boolean;
    priceInDollars : string;
    priceInCrypto : string;
}

export const RecentTransaction = (props : RecentTransactionProps) => {
    let recentTransactions = [""];
    useEffect(()=> {
        // get recent transaction data
        recentTransactions = [];
    }, []);
  return (
    <div>
        {
            recentTransactions.map(recentTransaction =>(
                <Grid container direction="row">
                        {/* render recent transactions */}
                </Grid>
            ))
        }
    </div>
  )
}
