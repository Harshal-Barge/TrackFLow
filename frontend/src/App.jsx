import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar/Navbar'
import { ProjectDetails } from './pages/Project/ProjectDetails'
import { IssueDetails } from './pages/Issue/IssueDetails'
import { Subscription } from './pages/Subscription/Subscription'
import { Auth } from './pages/Auth/Auth'

function App() {

  return (
    <>

      <div>
        {true ? <div> <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project/:id' element={<ProjectDetails />} />
            <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
            <Route path='/upgradePlan' element={<Subscription />} />
          </Routes > </div> : <Auth />}
      </div>
    </>
  )
}

export default App
