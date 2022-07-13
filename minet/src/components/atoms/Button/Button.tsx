import React from 'react'
import MuiButton from "@mui/material/Button";


interface ButtonProps {
    onclick: ()=> void;
    variant : string;
    children : string;
}

export const Button = ({variant,children, onclick} : ButtonProps) => {
  return (
    <MuiButton variant={variant as any} onClick={onclick}>
        {children}
    </MuiButton>
  )
}
