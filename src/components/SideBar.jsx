import { Stack } from '@mui/material'
import React from 'react'
import {categories } from "../utils/Constants"


const SideBar = ({selectedCat, setSelectedCat}) => (
    <Stack 
    direction="row"
    sx={{overflowY: 'auto',
        height: {sx: 'auto', md: "92%"},
        flexDirection: {md: "column"}
        }}
    >
        {
            categories.map(cat =>(
                <button
                    key={cat.name}
                    onClick={() => setSelectedCat(cat.name)}
                    className='category-btn'
                    style={{ 
                        background: 
                        cat.name === selectedCat && 
                        "#FC1503", 
                        color: "#fff",
                    }}
                >
                    <span style={{color: 
                        cat.name === selectedCat ? 
                        "" : "#FC1503", marginRight: "15px"}}>{cat.icon}</span>
                    <span style={{opacity: 
                        cat.name === selectedCat ? 
                        "1" : "0.7"}}>{cat.name}</span>
                </button>
            ))
        }
    </Stack>
)

export default SideBar
