import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { deleteComment } from '@/redux/Comment/Action'
import { TrashIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'

export const CommentCard = ({ data }) => {
    const dispatch = useDispatch();
    const handleCommentDelete = () => {
        dispatch(deleteComment(data.id));
    }
    return (
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <Avatar>
                    <AvatarFallback>{data.commenter.fullName[0]}</AvatarFallback>
                </Avatar>
                <div>
                    <p>{data.commenter.fullName}</p>
                    <p>{data.content}</p>
                </div>
            </div>
            <Button onClick={handleCommentDelete} className='rounded-full' size='icon' variant='ghost'>
                <TrashIcon />
            </Button>
        </div>
    )
}
