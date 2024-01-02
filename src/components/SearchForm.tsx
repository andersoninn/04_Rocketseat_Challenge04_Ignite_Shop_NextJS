import { ApiContext } from '@/contexts/ApiContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { apiData } = useContext(ApiContext);

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchCommit(data: SearchFormInput) {
    console.log(data);
  }

  return (
    <main className="m-auto flex justify-center mt-10">
      <div className="container max-w-[864px]">
        <div className="flex gap-4 justify-between text-md">
          <h1>Publicações</h1>
          <span>{apiData?.public_repos} publicações</span>
        </div>
        <form className="mt-3" onSubmit={handleSubmit(handleSearchCommit)}>
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
