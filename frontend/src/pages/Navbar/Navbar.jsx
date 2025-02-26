import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { CreateProjectForm } from '../Project/CreateProjectForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/redux/Auth/Action'

export const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <div className='border py-4 px-5 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <p onClick={() => navigate("/")} className='cursor-pointer mx-5 font-bold'>TrackFlow</p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant='ghost'>New Project</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>Create New Project</DialogTitle>
                        <CreateProjectForm />
                    </DialogContent>
                </Dialog>
                <Button onClick={() => navigate("/upgradePlan")} variant='ghost'>Upgrade</Button>
            </div>
            <div className='flex gap-3 items-center'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='rounded-full' asChild>
                        <Button className='rounded-full border-2' variant='outline' size='icon'>
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>{auth.user?.fullName}</p>
            </div>
        </div>
    )
}
