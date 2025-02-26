import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { assigneIssueToUser } from '@/redux/Issue/Action';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const UserList = ({ issueId }) => {
    const dispatch = useDispatch();
    const { projectDetails } = useSelector((state) => state.project)
    const handleAssignUserToIssue = (userId) => {
        dispatch(assigneIssueToUser(issueId, userId));
        console.log("done")
    }
    return (
        <>
            <div className='space-y-2'>
                {projectDetails?.team.map((item) => <div
                    onClick={() => handleAssignUserToIssue(item.id)}
                    key={item.id} className='group hover:bg-slate-800 cursor-pointer flex items-center space-x-2 rounded-md border px-3 py-2'>
                    <Avatar>
                        <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                        <p className='text-sm leading-none'>{item.fullName}</p>
                        <p className='text-sm text-muted-foreground'>{item.email}</p>
                    </div>
                </div>)}
            </div>
        </>
    )
}
