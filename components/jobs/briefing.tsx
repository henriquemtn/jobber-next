import React from 'react'
import parse from 'html-react-parser';

interface BriefingProps {
    content: string;
}

export default function Briefing({ content }: BriefingProps) {
    const briefingParse = parse(content);
    return (
        <div id='briefingComponent' className='bg-[#f9f9f9] dark:bg-[#2c2a30]  p-4 rounded-md text-sm'>
            {briefingParse}
        </div>
    )
}
