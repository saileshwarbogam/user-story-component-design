import { Grid } from '@material-ui/core'
import React from 'react'
import { DropDownIcon } from '../../atoms/Icons/DropDownIcon/DropDownIcon'
import { UserImage } from '../../atoms/UserImage/UserImage'

export const AccountDropDown = () => {
  return (
    <div>
        <Grid>
            <Grid item>
                <UserImage/>
            </Grid>
            <Grid item>
                <DropDownIcon/>
            </Grid>
        </Grid>
    </div>
  )
}
