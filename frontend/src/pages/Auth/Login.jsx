import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { login } from '@/redux/Auth/Action';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        dispatch(login(data)).then((result) => {
            console.log("result", result)
            if (result.meta.requestStatus === 'fulfilled') {
                navigate('/');
            }
        });
    };
    return (
        <div className='space-y-5'>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="email"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='Email...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />

                    <FormField control={form.control}
                        name="password"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='Password...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    {error && <div className='mt-1 text-red-600'>{error.message}</div>}
                    <Button type='submit' className='w-full'>Login</Button>
                </form>
            </Form>
        </div>
    )
}
