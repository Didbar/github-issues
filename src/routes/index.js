import React from 'react'
import { Routes, Route } from 'react-router-dom'

import IssuePage from '../pages/IssuePage'
import NotFoundPage from '../pages/NotFoundPage'
import IssuesPage from '../pages/IssuesPage'

const Router = () => (
  <Routes>
    <Route path='/' exact element={<IssuesPage />} />
    <Route path='/facebook/react/issues/:issueNumber' exact element={<IssuePage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
)
export default Router
