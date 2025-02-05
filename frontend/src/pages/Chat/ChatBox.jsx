import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

export const ChatBox = () => {
    const [message, setMessage] = useState("");
    const handleSendMessage = () => {
        console.log(message);
        setMessage("");
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <div className='sticky'>
            <div className='border rounded-lg'>
                <h1 className='border-b p-5'>Chat</h1>
                <ScrollArea className='h-[30rem] w-full p-5 flex gap-3 flex-col'>
                    {[1, 1, 1, 1].map((item, index) => <div key={item} className={`flex gap-2 mb-2 ${index % 2 == 0 ? "justify-start" : "justify-end"}`}>
                        {index % 2 == 0 ? <Avatar>
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar> : null}
                        <div className='space-y-2 py-2 px-5 border rounded-es-2xl rounded-e-xl'>
                            <p>User</p>
                            <p className='text-gray-300'>How are you?</p>
                        </div>
                    </div>)}
                </ScrollArea>
                <div className='relative p-0'>
                    <Input
                        placeHolder="Message.."
                        className='py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0'
                        value={message}
                        onChange={handleMessageChange} />
                    <Button
                        onClick={handleSendMessage}
                        className='absolute right-2 top-3 rounded-full'
                        size='icon' variant='ghost'>
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}
