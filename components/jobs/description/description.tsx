import { JobData } from '@/models';
import DescriptionItem from './descriptionItem';

interface JobDescriptionProps extends JobData {}

export default function JobDescription({
  id,
  customer,
  responsible,
  requester,
  title,
  date_created,
  date_updated,
  project,
  package_date,
  bonus,
  package: jobPackage,
  start,
  finish,
  status,
  estimated_time,
}: JobDescriptionProps) {
  return (
    <div className='grid grid-cols-3 space-y-2 mb-4'>
        <DescriptionItem label='ID' value={id} />
        <DescriptionItem label='Cliente' value={customer.name} />
        <DescriptionItem label='Projeto' value={project?.name || 'Não'} />
        <DescriptionItem label='Pacote' value={jobPackage?.name || 'Nenhum'} />
        <DescriptionItem label='Mês/Ano' value={package_date  || 'Nenhum'} />
        <DescriptionItem label='Solicitante' value={requester.name} />
        <DescriptionItem label='Responsável' value={responsible.name} />
        <DescriptionItem label='Previsão de Início' value={start} />
        <DescriptionItem label='Prazo Interno' value={finish} />
        <DescriptionItem label='Tempo Estimado' value={estimated_time} />
        <DescriptionItem label='Título do Job' value={title} />
        <DescriptionItem label='Data de Criação' value={date_created} />
        <DescriptionItem label='Última Atualização' value={date_updated} />
        <DescriptionItem label='Status' value={status.name} />
        <DescriptionItem label='Bônus' value={bonus?.id || 'Não'} />
      </div>
  );
}