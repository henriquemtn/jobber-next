import React from 'react'
import { StatusData } from '@/models';
import { Button } from '@/components/ui/button';

interface TopTitleProps {
    label: string;
    button?: boolean;
    status?: StatusData;
}

export default function TopTitle({ label, button, status }: TopTitleProps) {
    return (
        <div className='w-full space-y-2 flex flex-col mb-2'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-2xl font-bold dark:text-white'>{label}</h1>
                {button && <Button variant='outline'>+</Button>}
                {status && <Button variant='default' style={{ backgroundColor: status.color }}>{status.name}</Button>}
            </div>
            <div className='w-full border h-[1px]'/>
        </div>
    )
}
