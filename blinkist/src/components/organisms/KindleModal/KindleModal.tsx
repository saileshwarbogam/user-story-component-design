import { Box, Grid, Modal, TextField } from '@material-ui/core'
import React from 'react'
import { Button } from '../../atoms/Button/Button';
import { Typography } from '../../atoms/Typography/Typography';
interface KindleModalProps {
  open : boolean;
  handleClose : () => void;
}
export const KindleModal = (props : KindleModalProps) => {
  const handleAddEmail = () => {

  }
  const handleNeedHelp = () => {
    
  }
  return (
    <div>
      <Modal
      open={props.open}
      onClose={props.handleClose}
      >
        <Box>
        <Typography children='Set up your Kindle' variant='h1'/>
          <Typography children='Send blinks right to your Kindle from within the app' variant='h1'/>
          <Grid container direction="row">
              <TextField placeholder='email'/>
              <TextField placeholder='@kindle.com'/>
          </Grid>
          <Button children='Add email' onclick={handleAddEmail} variant="contained"/>
          <Button children='Need help?' onclick={handleNeedHelp} variant="outlined"/>
          {/* Link to book details page */}
          <Button children='Continue Reading' variant='contained' onclick={()=>{}}/>
        </Box>
      </Modal>
    </div>
  )
}
