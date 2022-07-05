import { Grid } from '@mui/material';
import React, { useEffect } from 'react'

export const WatchList = () => {

    useEffect(() => {
        // get data
        let data = [];
    }, [])
    return (
        <>
            <Grid container direction="row">
                {/* loop through data and render watchlist */}
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            {/* CryptoDetails */}
                        </Grid>
                        <Grid item>
                            {/* CryptoDetails */}
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )
}
