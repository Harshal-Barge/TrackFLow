import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'
import { useForm } from 'react-hook-form'
import { tags } from './ProjectList'
import { Cross1Icon } from '@radix-ui/react-icons'

export const CreateProjectForm = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            category: "",
            tags: []
        }
    })

    const onSubmit = (data) => {
        console.log("create project data", data)
    }

    const handleTagsChange = (newValue, action) => {
        let currTags = form.getValues("tags");
        if (action === "addTag") {
            if (!currTags.includes(newValue)) {
                currTags = [...currTags, newValue];
            }
        } else if (action === "removeTag") {
            currTags = currTags.filter((tag) => tag !== newValue);
        }
        form.setValue("tags", currTags);
    }

    return (
        <div>
            <Form {...form}>
                <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField control={form.control}
                        name="name"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Input {...field}
                                    type='text'
                                    className='border w-full border-gray-700 py-5 px-5'
                                    placeholder='project name...' />
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
                                    placeholder='project description...' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control}
                        name="category"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Select
                                    defaultValue='fullstack'
                                    value={field.value}
                                    onValueChange={(value) => {
                                        field.onChange(value)
                                    }}
                                >
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder='Category'></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='fullstack'>Full Stack</SelectItem>
                                        <SelectItem value='frontend'>Frontend</SelectItem>
                                        <SelectItem value='backend'>Backend</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>} />
                    <FormField control={form.control}
                        name="tags"
                        render={({ field }) => <FormItem>
                            <FormControl>
                                <Select
                                    onValueChange={(value) => {
                                        handleTagsChange(value, "addTag");
                                    }}
                                >
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder='Tags'></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {tags.map((item) => <SelectItem key={item} value={item}>
                                            {item}
                                        </SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <div className='flex gap-1 flex-wrap'>
                                {field.value.map((item) => <div key={item} className='cursor-pointer flex rounded-full items-center border gap-2 px-3 py-1'>
                                    <span className='text-sm'>{item}</span>
                                    <Cross1Icon onClick={() => handleTagsChange(item, "removeTag")} className='h-3 w-3' />
                                </div>)}
                            </div>
                            <FormMessage />
                        </FormItem>} />
                    <DialogClose>
                        {false ? <div><p>You can create only 3 projects with free plan,
                            Please Upgrade you plan</p></div> :
                            <Button type='submit' className='w-full'>Create Project</Button>}
                    </DialogClose>
                </form>
            </Form>
        </div >
    )
}
