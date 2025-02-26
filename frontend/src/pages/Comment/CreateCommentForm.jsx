import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createComment } from '@/redux/Comment/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export const CreateCommentForm = ({ issueId }) => {
    const form = useForm({
        defaultValues: {
            content: ""
        }
    });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (!data.content.trim()) return;
        dispatch(createComment({ ...data, issueId: issueId }));
        console.log(data);
        form.reset();
    };
    return (
        <div className='mx-2'>
            <Form {...form}>
                <form className='flex gap-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="content"
                        render={({ field }) => <FormItem>
                            <div className='flex gap-2'>
                                <FormControl>
                                    <Input {...field}
                                        type='text'
                                        className='w-[20rem]'
                                        placeholder='comment...' />
                                </FormControl>
                            </div>

                            <FormMessage />
                        </FormItem>} />
                    <Button type='submit'>Comment</Button>
                </form>
            </Form>
        </div>
    )
}
