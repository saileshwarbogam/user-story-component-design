import { Box, Modal } from '@material-ui/core'
import React from 'react'
import { Button } from '../../atoms/Button/Button';

export const KindleModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange =()=> {
    
  }
  return (
    <div>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Box>
          {/* kindle pop up */}
          <Button children='Continue Reading' variant='contained' onclick={handleChange}/>
        </Box>
      </Modal>
    </div>
  )
}
