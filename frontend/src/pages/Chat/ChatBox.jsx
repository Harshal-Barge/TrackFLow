import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { fetchChatByProject, fetchChatMessages, sendMessage } from '@/redux/Chat/Action'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ChatBox = ({ projectId }) => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const { chat, auth } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchChatByProject(projectId));
    }, []);

    const handleSendMessage = () => {
        dispatch(sendMessage({ content: message, projectId }));
        console.log("messages", chat);
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
                    {chat?.messages.map((item) => <div key={item.id} className={`flex gap-2 mb-2 ${item?.sender.id === auth.user.id ? "justify-end" : "justify-start"}`}>
                        {item?.sender.id !== auth.user.id && <Avatar>
                            <AvatarFallback>{item?.sender?.fullName[0] || "#"}</AvatarFallback>
                        </Avatar>}
                        <div className='space-y-2 py-2 px-5 border rounded-es-2xl rounded-e-xl'>
                            <p>{item.sender.fullName}</p>
                            <p className='text-gray-300'>{item.content}</p>
                        </div>
                    </div>)}
                </ScrollArea>
                <div className='relative p-0'>
                    <Input
                        placeholder="Message.."
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
