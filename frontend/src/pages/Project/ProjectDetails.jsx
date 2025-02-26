import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { InviteUserForm } from './InviteUserForm'
import { IssueList } from '../Issue/IssueList'
import { ChatBox } from '../Chat/ChatBox'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectByID } from '@/redux/Project/Action'

export const ProjectDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { projectDetails } = useSelector((state) => state.project)

    useEffect(() => {
        dispatch(fetchProjectByID(id));
    }, [id])

    const handleProjectInvitation = () => {

    }

    return (
        <>
            <div className='mt-5 lg:px-5'>
                <div className='lg:flex gap-5 justify-between pb-4'>
                    <ScrollArea className='h-screen pr-2'>
                        <div className='text-gray-400 pb-5 w-full'>
                            <h1 className='text-lg font-semibold pb-5'>{projectDetails?.name}</h1>
                            <div className='space-y-5 pb-5 text-sm'>
                                <p className='w-full md:max-w-lg lg:max-w-xl'>
                                    {projectDetails?.description}
                                </p>
                                <div className='flex'>
                                    <p className='w-36'>Project Lead :</p>
                                    <p>{projectDetails?.owner.fullName}</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-36'>Members :</p>
                                    <div className='flex items-center'>
                                        {projectDetails?.team.map((item) => <Avatar className='cursor-pointer mx-1' key={item.id}>
                                            <AvatarFallback>{item.fullName[0]}</AvatarFallback>
                                        </Avatar>)}
                                    </div>
                                    <Dialog>
                                        <DialogTrigger>
                                            <DialogClose>
                                                <Button className='mx-1' size='sm' variant='outline' onClick={handleProjectInvitation}>
                                                    <span>invite</span>
                                                    <PlusIcon className='w-3 h-3' />
                                                </Button>
                                            </DialogClose>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>Invite User</DialogHeader>
                                            <InviteUserForm />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className='flex'>
                                    <p className='w-36'>Category :</p>
                                    <p>{projectDetails?.category}</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-36'>Status :</p>
                                    <Badge>Open</Badge>
                                </div>
                            </div>
                            <section>
                                <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
                                <div className='lg:flex md:flex gap-3 justify-between py-5 pr-4'>
                                    <IssueList title='Todo List' status="Open" />
                                    <IssueList title='In Progress' status="In-Progress" />
                                    <IssueList title='Done' status="Done" />
                                </div>
                            </section>
                        </div>
                    </ScrollArea>
                    <div className='lg:w-[30%] rounded-md sticky right-5 top-10'>
                        <ChatBox projectId={id} />
                    </div>
                </div>
            </div>
        </>
    )
}
