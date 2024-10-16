// models
import { IJobData, INoteData } from '@/models';

import { CalendarClockIcon, Clock } from 'lucide-react';
import FormatData from '@/components/format/formatData';
import { useQuery } from '@tanstack/react-query';

// hooks
import useNotesModal from '@/hooks/modal/useNotesModal';
import { fetchNotesByJobId } from '@/services';

interface IProps {
  job: IJobData;
}

export const JobsDetailsNotes = ({ job }: IProps) => {
  const notesModal = useNotesModal();

  const { isLoading, isFetching, data } = useQuery({
    queryKey: job?.id ? ['notes', { jobId: String(job.id) }] : [],
    queryFn: async () => job?.id && fetchNotesByJobId(job.id),
    enabled: !!job?.id,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

   const totalMinutes = data && Array.isArray(data) ? (data as INoteData[]).reduce((acc: number, note: INoteData) => acc + note.minutes, 0) : 0;
  
   const hours = Math.floor(totalMinutes / 60);
   const minutes = totalMinutes % 60;
   const formattedValue = `${hours}h:${minutes.toString().padStart(2, '0')}m`;
  return (
    <>
      {isLoading || isFetching ? (
        <div>Carregando...</div> 
      ) : data && data.length > 0 ? (
        <div className='gap-2'>
          {data.map((note) => {
            const { id, description, user: noteUser, start, finish, minutes } = note;

            return (
              <>
                <div key={id} onClick={() => notesModal.onOpen(id)} className='flex flex-col mb-4 text-[14px] border border-dashed rounded-md p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2c2b30]  transition-all'>
                  {description}
                  <span className='font-bold'>{noteUser.name}</span>
                  <div className='flex flex-row'>
                    <div className='flex flex-row items-center mt-2 text-base text-gray-500'>
                    <CalendarClockIcon className='h-4 w-4 mr-2' />
                    <p className='space-x-[2px]'><FormatData value={start} /> até <FormatData value={finish} onlyTime /> - <FormatData value={String(minutes)} isMinutes /></p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          {/* Exibir o total de horas */}
          <div className='flex flex-row gap-1 items-center mt-4 text-base text-gray-600'>
            <Clock size={16} />
            <p>Total de horas: {formattedValue}</p>
          </div>
        </div>
      ) : (
        <div>Nenhum apontamento anexado.</div>
      )}
    </>
  );
};
