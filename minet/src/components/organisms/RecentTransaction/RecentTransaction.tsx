import { Grid } from '@mui/material';
import { any } from 'prop-types';
import React, { useEffect } from 'react'

export const RecentTransaction = () => {
    let recentTransactions = [""];
    useEffect(()=> {
        // get recent transaction data
        recentTransactions = [];
    }, []);
  return (
    <div>
        {
            recentTransactions.map(recentTransaction =>(
                <Grid container direction="column">
                        {/* render recent transactions */}
                </Grid>
            ))
        }
    </div>
  )
}
