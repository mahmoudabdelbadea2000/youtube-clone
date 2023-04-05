import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm("")
    }
  }
  return (
      <Paper
        component="form"
        onSubmit={handleSubmit}
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
            value={searchTerm}
            onChange={(e) =>{setSearchTerm(e.target.value)}}
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