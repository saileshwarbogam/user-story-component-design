import { TextField } from '@material-ui/core'
import React from 'react'

interface SearchBarProps {
  handleChange : () => void;
}

export const SearchBar = (props : SearchBarProps) => {

  return (
    <>
        <TextField onChange={props.handleChange}/>
    </>
  )
}
