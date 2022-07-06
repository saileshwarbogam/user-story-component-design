import { Box, Modal } from '@material-ui/core'
import React from 'react'

export const KindleModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
      open={open}
      onClose={handleClose}
      >
        <Box>
          {/* kindle pop up */}
        </Box>
      </Modal>
    </div>
  )
}
