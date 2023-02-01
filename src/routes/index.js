import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import IssuePage from '../pages/IssuePage'
import NotFoundPage from '../pages/NotFoundPage'
import IssuesPage from '../pages/IssuesPage'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<IssuesPage />} />
      <Route path='/facebook/react/issues/:issueNumber' exact element={<IssuePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
)
export default Router
