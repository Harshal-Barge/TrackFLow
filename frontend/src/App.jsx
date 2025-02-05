import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar/Navbar'
import { ProjectDetails } from './pages/Project/ProjectDetails'
import { IssueDetails } from './pages/Issue/IssueDetails'
import { Subscription } from './pages/Subscription/Subscription'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
        <Route path='/upgradePlan' element={<Subscription />} />
      </Routes >
    </>
  )
}

export default App
