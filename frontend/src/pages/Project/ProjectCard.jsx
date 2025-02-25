import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { deleteProject } from '@/redux/Project/Action'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const ProjectCard = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteProject(data.id));
    }
    return (
        <Card onClick={() => navigate(`/project/${data.id}`)} className='p-5 w-full lg:w-[48rem]'>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h1 className='cursor-pointer font-bold text-lg'>
                                {data.name}
                            </h1>
                            <DotFilledIcon />
                            <p className='text-sm text-gray-400'>{data.category}</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='rounded-full' asChild>
                                    <Button className='rounded-full' variant='ghost' size='icon'>
                                        <DotsVerticalIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Update</DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm'>
                        {data.description}
                    </p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {data.tags.map((item, index) => <Badge key={index} variant='outline'>{item}</Badge>)}
                </div>
            </div>
        </Card>
    )
}
