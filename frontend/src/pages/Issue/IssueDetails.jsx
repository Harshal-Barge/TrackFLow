import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CreateCommentForm } from '../Comment/CreateCommentForm';
import { CommentCard } from '../Comment/CommentCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIssueById, updateIssueStatus } from '@/redux/Issue/Action';
import { fetchComments } from '@/redux/Comment/Action';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { PersonIcon } from '@radix-ui/react-icons';
import { UserList } from '../User/UserList';

export const IssueDetails = () => {
    const { projectId, issueId } = useParams();
    const dispatch = useDispatch();
    const { issue, comment } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchIssueById(issueId));
        dispatch(fetchComments(issueId));
    }, [issueId])

    const handleUpdateIssueStatus = (status) => {
        dispatch(updateIssueStatus(issue?.issueDetails.id, status))
        console.log(issue.issueDetails);
        console.log(comment)
    }
    return (
        <div className='px-20 py-8 text-gray-400'>
            <div className='flex justify-between border p-10 rounded-lg'>
                <ScrollArea className='h-[80vh] w-[60%]'>
                    <div>
                        <h1 className='text-lg fond-semibold'>{issue?.issueDetails?.title}</h1>
                        <div className='py-5 px-2'>
                            <h2 className='font-semibold'>Description</h2>
                            <p className='text-sm mt-3'>{issue?.issueDetails?.description}</p>
                        </div>
                        <div className='mt-5'>
                            <h1 className='pb-3'>Activity</h1>
                            <Tabs defaultValue='comments' className='w-[400px]'>
                                <TabsList className='mb-5'>
                                    <TabsTrigger value='all'>All</TabsTrigger>
                                    <TabsTrigger value='comments'>Comments</TabsTrigger>
                                    <TabsTrigger value='history'>History</TabsTrigger>
                                </TabsList>
                                <TabsContent value='all'>
                                    All content
                                </TabsContent>
                                <TabsContent value='comments'>
                                    <CreateCommentForm issueId={issueId} />
                                    <div className='mt-8 space-y-6'>
                                        {comment.comments.map((item) => <CommentCard key={item.id} data={item} />)}
                                    </div>
                                </TabsContent>
                                <TabsContent value='history'>
                                    history content
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </ScrollArea>
                <div className='w-full lg:w-[35%] space-y-2'>
                    <Select onValueChange={handleUpdateIssueStatus}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Open">Open</SelectItem>
                            <SelectItem value="In-Progress">In-Progress</SelectItem>
                            <SelectItem value="Done">Done</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className='border rounded-lg'>
                        <p className='border-b py-3 px-5'>Details</p>
                        <div className='p-5'>
                            <div className='space-y-7'>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Assignee</p>
                                    <div className='flex items-center gap-3'>
                                        <Avatar>
                                            <AvatarFallback>
                                                {issue?.issueDetails?.assignee?.fullName[0] || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <p>{issue?.issueDetails?.assignee?.fullName || "Unassigned"}</p>
                                    </div>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Reporter</p>
                                    <p>Reporter Name</p>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Labels</p>
                                    <p>none</p>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Status</p>
                                    <Badge>{issue?.issueDetails?.status}</Badge>
                                </div>
                                <div className='flex gap-10 items-center'>
                                    <p className='w-[7rem]'>Release</p>
                                    <p>06-02-2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
