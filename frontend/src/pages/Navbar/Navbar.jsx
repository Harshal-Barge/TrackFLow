import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { CreateProjectForm } from '../Project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='border py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p onClick={() => navigate("/")} className='cursor-pointer mx-5 font-bold'>TrackFlow</p>
                <Dialog>
                    <DialogTrigger>
                        <Button variant='ghost'>New Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>Create New Project</DialogHeader>
                        <CreateProjectForm />
                    </DialogContent>
                </Dialog>
                <Button onClick={() => navigate("/upgradePlan")} variant='ghost'>Upgrade</Button>
            </div>
            <div className='flex gap-3 items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='rounded-full'>
                        <Button className='rounded-full border-2' variant='outline' size='icon'>
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>Name</p>
            </div>
        </div>
    )
}
