import React from 'react'

import { Toolbar, Button } from '@mui/material'

interface Props {
  onLoadMore: () => void
  hasNextPage?: boolean
}

const Pagination: React.FC<Props> = ({ onLoadMore, hasNextPage = false }) => (
  <Toolbar>
    <Button disabled={!hasNextPage} onClick={onLoadMore} color='primary'>
      Load more
    </Button>
  </Toolbar>
)

export default Pagination
