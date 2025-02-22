import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createIssues } from '@/redux/Issue/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const CreateIssueForm = () => {
    const dispatch = useDispatch();
    const form = useForm({
        defaultValues: {
            issueName: "",
            description: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(createIssues(data));
        console.log(data);
    };
    return (
        <div>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="issueName"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='IssueName...' />
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
                    <DialogClose>
                        <Button type='submit' className='w-full'>Create</Button>
                    </DialogClose>
                </form>
            </Form>
        </div >
    )
}
