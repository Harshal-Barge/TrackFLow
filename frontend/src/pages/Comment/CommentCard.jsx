import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'

export const CommentCard = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                    <p>User</p>
                    <p>how much work is pending?</p>
                </div>
            </div>
            <Button className='rounded-full' size='icon' variant='ghost'>
                <TrashIcon />
            </Button>
        </div>
    )
}
