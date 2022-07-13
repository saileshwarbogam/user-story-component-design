import { Grid } from '@mui/material';
import React, { useEffect } from 'react'


interface WatchListProps {
    cryptoImg : string;
    cryptoName : string;
    value : string;
}

export const WatchList = (props : WatchListProps) => {

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
                            {/* Crypto Graph */}
                        </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )
}
