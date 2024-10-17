import React from 'react'
import { JobsDetailsNotes } from './notes'

interface JobApontamentosProps {
    job: any;
}

export default function JobApontamentos({job}: JobApontamentosProps) {
    return (
        <div className='bg-white dark:bg-[#1F1E22] w-full p-4 rounded-md shadow-md'>
            <h3 className='text-2xl mb-2'>Apontamentos:</h3>
            <JobsDetailsNotes job={job} />
        </div>
    )
}
