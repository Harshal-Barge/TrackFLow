import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useEffect } from 'react'
import { IssueCard } from './IssueCard'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import { CreateIssueForm } from './CreateIssueForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIssues } from '@/redux/Issue/Action'

export const IssueList = ({ title, status }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const issue = useSelector((state) => state.issue);
    useEffect(() => {
        dispatch(fetchIssues(id));
        console.log("fetched issues for " + id)
    }, [])
    return (
        <div>
            <Dialog>
                <Card className='w-full md:w-[17rem] lg:w-[18rem]'>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent className='px-2'>
                        <div className='space-y-2'>
                            {issue?.issues?.filter((item) => item.status === status).map((item) => <IssueCard key={item.id} data={item} projectId={id} />)}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <DialogTrigger asChild>
                            <Button variant='outline'
                                className='w-full flex items-center gap-2'>
                                <PlusIcon />
                                Create Issue
                            </Button>
                        </DialogTrigger>
                    </CardFooter>
                </Card>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Issue</DialogTitle>
                    </DialogHeader>
                    <CreateIssueForm projectId={id} status={status} />
                </DialogContent>
            </Dialog>
        </div>
    )
}
