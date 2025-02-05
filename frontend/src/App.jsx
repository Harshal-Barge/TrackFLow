import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar/Navbar'
import { ProjectDetails } from './pages/Project/ProjectDetails'
import { IssueDetails } from './pages/Issue/IssueDetails'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
        <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
      </Routes >
    </>
  )
}

export default App
