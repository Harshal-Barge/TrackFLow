import React from 'react'
import { ProjectList } from './Project/ProjectList'
import { Navbar } from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { ProjectDetails } from './Project/ProjectDetails'
import { IssueDetails } from './Issue/IssueDetails'
import { Subscription } from './Subscription/Subscription'
import { UpgradePlanSuccess } from './Subscription/UpgradePlanSuccess'
import { AcceptInvitation } from './Project/AcceptInvitation'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<ProjectList />} />
                <Route path='/project/:id' element={<ProjectDetails />} />
                <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails />} />
                <Route path='/upgradePlan' element={<Subscription />} />
                <Route path='/upgrade_plan/success' element={<UpgradePlanSuccess />} />
                <Route path='/accept_invitation' element={<AcceptInvitation />} />
            </Routes >
        </div >
    )
}
