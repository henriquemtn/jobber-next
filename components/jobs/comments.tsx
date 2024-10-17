import React from 'react'

// components
import TopTitle from '../global/top-title';

// hooks
import { useQuery } from '@tanstack/react-query';
import { fetchCommentsByJobId } from '@/services/comments';

// types
import { CommentData } from '@/models';


interface CommentsProps {
    job: any;
}

export default function Comments({ job }: CommentsProps) {

    const { isLoading, isFetching, data } = useQuery({
        queryKey: job?.id ? ['comments', { jobId: String(job.id) }] : [],
        queryFn: async () => job?.id && fetchCommentsByJobId(job.id),
        enabled: !!job?.id,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    });

    return (
        <div className='bg-white dark:bg-[#1F1E22] w-full rounded-md shadow-lg p-4 mr-4'>
            <TopTitle label='Comentários:' button />

            {/* Exibir feedback de carregamento */}
            {isLoading || isFetching ? (
                <div>Carregando comentários...</div>
            ) : data && data.length > 0 ? (
                <div className='flex flex-col gap-4'>
                    {/* Mapear os comentários */}
                    {data.map((comment: CommentData) => (
                        <div key={comment.id} className='p-4 border border-gray-200 rounded-md'>
                            <p className='text-gray-700'>{comment.comment}</p>
                            <div className='text-sm text-gray-500'>
                                <span className='font-bold'>{comment.user.name}</span> - {new Date(comment.date_created).toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Nenhum comentário disponível.</div>
            )}
        </div>
    );
}