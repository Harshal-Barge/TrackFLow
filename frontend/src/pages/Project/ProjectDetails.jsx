import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PlusIcon } from '@radix-ui/react-icons'
import React from 'react'
import { InviteUserForm } from './InviteUserForm'
import { IssueList } from '../Issue/IssueList'
import { ChatBox } from '../Chat/ChatBox'

export const ProjectDetails = () => {
    const handleProjectInvitation = () => {

    }

    return (
        <>
            <div className='mt-5 lg:px-10'>
                <div className='lg:flex gap-5 justify-between pb-4'>
                    <ScrollArea className='h-screen pr-2'>
                        <div className='text-gray-400 pb-5 w-full'>
                            <h1 className='text-lg font-semibold pb-5'>Create Ecommerce Website</h1>
                            <div className='space-y-5 pb-5 text-sm'>
                                <p className='w-full md:max-w-lg lg:max-w-xl'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Quaerat facilis corporis quisquam earum expedita dolor,
                                    quod nisi tempora accusantium ipsum atque distinctio quasi
                                </p>
                                <div className='flex'>
                                    <p className='w-36'>Project Lead :</p>
                                    <p>Name</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-36'>Members :</p>
                                    <div className='flex items-center'>
                                        {[1, 1, 1].map((item) => <Avatar className='cursor-pointer mx-1' key={item}>
                                            <AvatarFallback>U</AvatarFallback>
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
                                    <p>Fullstack</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-36'>Status :</p>
                                    <Badge>Open</Badge>
                                </div>
                            </div>
                            <section>
                                <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
                                <div className='lg:flex md:flex gap-3 justify-between py-5 pr-2'>
                                    <IssueList status='pending' title='Todo List' />
                                    <IssueList status='in-progress' title='In Progress' />
                                    <IssueList status='done' title='Done' />
                                </div>
                            </section>
                        </div>
                    </ScrollArea>
                    <div>
                        <ChatBox />
                    </div>
                </div>
            </div>
        </>
    )
}
