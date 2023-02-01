import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import IssuePage from '../pages/IssuePage'
import IssuesPage from '../pages/IssuesPage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<IssuesPage />} />
      <Route path='/facebook/react/issues/:issueNumber' element={<IssuePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
export default Router
