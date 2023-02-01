import React, { useState } from 'react'

// import Select from '@mui/material/Select'
// import MenuItem from '@mui/material/MenuItem'
// import InputLabel from '@mui/material/InputLabel'
// import { IssueStates } from '../../constants/index'

import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
interface Props {
  onSearch: (searchTerm: string) => void
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSearch} className='mainSearch'>
      <Grid container justifyContent='center' alignItems='center'>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField
            type='text'
            placeholder='Search Term'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        {/* //NOTE: Add Selection For Statuses
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='demo-simple-select-standard-label'>Satus</InputLabel>
          <Select
            labelId='demo-simple-select-standard-label'
            id='demo-simple-select-standard'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label='Status'>
            <MenuItem value={IssueStates.OPEN}>Open</MenuItem>
            <MenuItem value={IssueStates.CLOSED}>Closed</MenuItem>
          </Select>
        </FormControl> */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Button type='submit' color='info' size='large'>
            Search
          </Button>
        </FormControl>
      </Grid>
    </form>
  )
}

export default SearchBar
