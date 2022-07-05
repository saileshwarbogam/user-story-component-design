import { Grid } from '@mui/material';
import React from 'react'
import { Avatar } from '../../atoms/Avatar/Avatar';

interface MyWalletProps{
    money : string;
    src : string;
}

export const MyWallet = ({money ,src} : MyWalletProps) => {
  return (
    <div>
        <Grid container direction="row">
            <Grid item>
                <Avatar src={src}/>
            </Grid>
            <Grid item>
                {/* render wallet details */}
            </Grid>
        </Grid>
    </div>
  )
}
