import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import React from 'react'

export const ProjectCard = () => {
    return (
        <Card className='p-5 w-full lg:w-[48rem]'>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-5'>
                            <h1 className='cursor-pointer font-bold text-lg'>
                                Create Ecommerce Project
                            </h1>
                            <DotFilledIcon />
                            <p className='text-sm text-gray-400'>FullStack</p>
                        </div>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger className='rounded-full'>
                                    <Button className='rounded-full' variant='ghost' size='icon'>
                                        <DotsVerticalIcon />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Update</DropdownMenuItem>
                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                    <p className='text-gray-500 text-sm'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officiis
                        nam praesentium reiciendis minima enim officia quis nemo vero, quasi iste dolores saepe
                        cumque aspernatur dignissimos, architecto dolorum? Nam, itaque.
                    </p>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    {[1, 1, 1, 1].map((item) => <Badge key={item} variant='outline'>tags</Badge>)}
                </div>
            </div>
        </Card>
    )
}
