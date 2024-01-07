import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';

import { FetchContextApi } from '@/contexts/ApiContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { issues, fetchIssuesAPI } = useContext(FetchContextApi);

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchIssue(data: SearchFormInput) {
    fetchIssuesAPI(data.query);
  }

  return (
    <main className="m-auto flex justify-center mt-10">
      <div className="container max-w-[864px]">
        <div className="flex gap-4 justify-between text-md">
          <h1>Publicações</h1>
          <span className="text-sm text-brand-base-span">
            {!issues && <span> 0 </span>}
            {issues?.total_count} publicações
          </span>
        </div>
        <form className="mt-3" onSubmit={handleSubmit(handleSearchIssue)}>
          <input
            type="text"
            className="container max-w-[864px] px-4 py-3 bg-brand-base-input rounded-md placeholder:text-brand-base-label 
            border border-brand-base-label focus:border-brand-blue cursor-pointer"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </form>
      </div>
    </main>
  );
}
