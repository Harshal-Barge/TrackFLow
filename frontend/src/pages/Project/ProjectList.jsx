import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
const categories = [
    "all",
    "fullstack",
    "frontend",
    "backend"
];
export const tags = [
    "all",
    "react",
    "nextjs",
    "spring boot",
    "mysql",
    "mongodb",
    "angular",
    "python",
    "flask",
    "django"
];

export const ProjectList = () => {
    const [keyword, setKeyword] = useState("");

    const handleFilterChange = (category, value) => {
        console.log(category, value)
    }

    const handleSearchChange = (e) => {
        setKeyword(e.target.value)
    }
    return (
        <>
            <div className='relative lg:px-5 lg:flex gap-5 justify-center py-5'>
                <section className='filterSection'>
                    <Card className='p-5 sticky top-10'>
                        <div className='flex justify-between lg:w-[20rem]'>
                            <p className='text-xl -tracking-wider'>filters</p>
                            <Button variant="ghost" size="icon">
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className='mt-5'>
                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className='pb-3 text-gray-400 border-b'>Category</h1>
                                    <div className='pt-5'>
                                        <RadioGroup
                                            className='space-y-3 pt-5'
                                            defaultValue="all"
                                            onValueChange={(value) => handleFilterChange("category", value)}>
                                            {categories.map((item) => <div key={item} className='flex items-center gap-2'>
                                                <RadioGroupItem value={item} id={`r-${item}`} />
                                                <Label htmlFor={`r-${item}`}>{item}</Label>
                                            </div>)}
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className='pt-9'>
                                    <h1 className='pb-3 text-gray-400 border-b'>Tags</h1>
                                    <div className='pt-5'>
                                        <RadioGroup
                                            className='space-y-3 pt-5'
                                            defaultValue="all"
                                            onValueChange={(value) => handleFilterChange("tags", value)}>
                                            {tags.map((item) => <div key={item} className='flex items-center gap-2'>
                                                <RadioGroupItem value={item} id={`r-${item}`} />
                                                <Label htmlFor={`r-${item}`}>{item}</Label>
                                            </div>)}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section >
                <section className='projectListSection w-full lg:w-[48rem]'>
                    <div className='flex gap-2 items-center pb-5 justify-between'>
                        <div className='relative p-0 w-full'>
                            <Input
                                onChange={handleSearchChange}
                                placeHolder="search project"
                                className='40% px-9' />
                            <MagnifyingGlassIcon className='absolute top-3 left-4' />
                        </div>
                    </div>
                    <div>
                        <div className='space-y-5 min-h-[74vh]'>
                            {
                                keyword ? [1, 1, 1].map((item) => <ProjectCard key={item} />) :
                                    [1, 1, 1, 1].map((item) => <ProjectCard key={item} />)
                            }
                        </div>
                    </div>
                </section>
            </div >
        </>
    )
}
