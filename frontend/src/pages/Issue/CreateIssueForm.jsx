import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createIssues } from '@/redux/Issue/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const CreateIssueForm = ({ projectId, status }) => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            priority: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(createIssues({
            ...data,
            projectId: projectId,
            status: status
        }));
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="title"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='Title...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control}
                        name="description"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='Description...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control}
                        name="priority"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Select
                                    defaultValue='Low'
                                    value={field.value}
                                    onValueChange={(value) => {
                                        field.onChange(value)
                                    }}
                                >
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder='Priority'></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='Low'>Low</SelectItem>
                                        <SelectItem value='Medium'>Medium</SelectItem>
                                        <SelectItem value='High'>High</SelectItem>
                                        <SelectItem value='Blocker'>Blocker</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    <DialogClose>
                        <Button type='submit' className='w-full'>Create</Button>
                    </DialogClose>
                </form>
            </Form>
        </div >
    )
}
