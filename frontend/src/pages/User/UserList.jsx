import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'

export const UserList = () => {
    return (
        <>
            <div className='space-y-2'>
                <div className='border rounded-md'>
                    <p className='py-2 px-3'>{"UserName" || "Unassigne"}</p>
                </div>
                {[1, 1, 1, 1].map((item) => <div key={item} className='group hover:bg-slate-800 cursor-pointer flex items-center space-x-2 rounded-md border px-3 py-2'>
                    <Avatar>
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className='space-y-1'>
                        <p className='text-sm leading-none'>Full Name</p>
                        <p className='text-sm text-muted-foreground'>@username</p>
                    </div>
                </div>)}
            </div>
        </>
    )
}
