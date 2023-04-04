import React from 'react'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (
      <Paper
        component="form"
        onSubmit={() => {}}
        className='search-bar-parent'
        sx={{
          borderRadius: 20, 
          border: "1px solid #e3e3e3", 
          pl: 2,
          boxShadow: "none",
          width: "60%",
          mr: {sm: 5}
        }}
        >
          <input 
            className='searsh-bar'
            placeholder='search...'
            value=""
            onChange={() =>{}}
          />
          <IconButton 
          type='submit' 
          sx={{
            color: "red",
            p: "10px"
          }}>
            <SearchIcon />
          </IconButton>
      </Paper>
  )
}

export default SearchBar